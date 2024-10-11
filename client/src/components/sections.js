"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Section() {
  const sections = [
    { id: "1", grade: "11", strand: "HUMSS", section: "Mactan" },
  ];

  const router = useRouter();
  const navigate = (path) => {
    router.push(path);
  };

  return (
    <main className="grid grid-cols-3 p-6 gap-3 h-full">
      {sections.map((item) => (
        <button
          key={item.id}
          onClick={() => navigate("../student_list", "student_list")}
          className="bg-[#002147] rounded-xl text-white text-center text-xl h-[150px] 
          hover:bg-white drop-shadow-2xl border hover:text-black"
        >
          <p>
            {item.strand} - {item.grade}
          </p>
          <p>{item.section}</p>
        </button>
      ))}
    </main>
  );
}
