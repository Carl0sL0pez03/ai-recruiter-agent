"use client";
import { UserDetailContext } from "@/context/UserDetailContext";
import { supabase } from "@/services/supabaseClient";
import React, { useContext, useEffect, useState } from "react";

type UserType = {
  id: string;
  name: string;
  email: string;
  picture?: string;
};

function Provider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    let isMounted = true;

    const createNewUser = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        console.error("Error fetching user:", userError);
        return;
      }

      const { data: existingUsers, error: selectError } = await supabase
        .from("Users")
        .select("*")
        .eq("email", user.email);

      if (selectError) {
        console.error("Error checking existing user:", selectError);
        return;
      }

      if (!existingUsers?.length) {
        const { data: newUser, error: insertError } = await supabase
          .from("Users")
          .insert([
            {
              name: user.user_metadata?.name,
              email: user.email,
              picture: user.user_metadata?.picture,
            },
          ])
          .select()
          .single();

        if (insertError) {
          console.error("Error inserting user:", insertError);
          return;
        }

        if (isMounted) setUser(newUser);
      } else {
        if (isMounted) setUser(existingUsers[0]);
      }
    };

    createNewUser();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <UserDetailContext.Provider value={{ user, setUser }}>
        {children}
      </UserDetailContext.Provider>
    </>
  );
}

export default Provider;
