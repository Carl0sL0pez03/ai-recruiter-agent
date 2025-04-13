"use client";
import Image from "next/image";
import React from "react";

import { useUser } from "@/context/UserDetailContext";

function WelcomeContainer() {
  const { user } = useUser();

  return (
    <div className="bg-white p-5 rounded-xl w-full flex justify-between items-center">
      <div>
        <h2 className="text-lg font-bold">Welcome back, {user?.name}</h2>
        <h2 className="text-gray-500">Reecruiter</h2>
      </div>
      {user?.picture && (
        <Image
          className="rounded-full"
          src={user?.picture}
          alt="userAvatar"
          width={40}
          height={40}
        />
      )}
    </div>
  );
}

export default WelcomeContainer;
