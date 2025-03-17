"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Settings() {
  const router = useRouter();
  return (
    <main className=" bg-white h-full rounded-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-6 gap-3 overflow-y-scroll no-scrollbar">
      <button
        onClick={() => router.push("/settings/admin-account")}
        className="bg-[rgb(0,33,71)] flex flex-col justify-center items-center rounded-xl text-white text-center text-xl h-[150px] hover:bg-white border hover:text-[rgb(0,33,71)]"
      >
        <Image
          width={100}
          height={0}
          src="/icons/admin-account.svg"
          alt="User"
          className=" h-20 w-auto bg-[rgb(0,33,71)] rounded-xl p-2"
        />
        Admin Accounts
      </button>
      <button className="bg-[rgb(0,33,71)] flex flex-col justify-center items-center rounded-xl text-white text-center text-xl h-[150px] hover:bg-white border hover:text-[rgb(0,33,71)]">
        <Image
          width={100}
          height={0}
          src="/icons/archive.svg"
          alt="User"
          className=" h-20 w-auto bg-[rgb(0,33,71)] rounded-xl p-2"
        />
        Archives
      </button>
    </main>
  );
}
