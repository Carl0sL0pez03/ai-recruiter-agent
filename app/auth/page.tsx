"use client";

import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabaseClient";
import Image from "next/image";
import React from "react";

function Login() {
  /* Used to Sing in with google */
  const signInWithGogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) console.log("Error", error?.message);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center border rounded-2xl p-8">
        <div className="flex items-center flex-col">
          <Image
            className="w-[400px] h-[250px] rounded-2xl"
            src={"/login2.png"}
            alt="login"
            width={600}
            height={400}
          />

          <h2 className="text-2xl font-bold text-center mt-5">
            Welcome to Reecruiter
          </h2>
          <p className="text-gray-500 text-center">
            Sign In With Google Authentication
          </p>

          <Button className="mt-7 w-full" onClick={signInWithGogle}>
            {" "}
            Login with Google{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
