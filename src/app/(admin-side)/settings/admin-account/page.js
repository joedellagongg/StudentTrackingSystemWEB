"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Archive() {
  const router = useRouter();

  return (
    <main className="w-full h-full rounded-2xl overflow-x-scroll bg-[#ffffff] p-6">
      <div className="">
        <button onClick={() => router.push("/settings")}>
          <Image
            width={0}
            height={0}
            src="../icons/back-icon.svg"
            alt="back"
            className="h-[40px] md:h-[50px] w-auto"
          />
        </button>
      </div>
      admin accounts eyy wala pa
    </main>
  );
}
