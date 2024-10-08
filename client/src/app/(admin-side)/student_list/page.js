"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Stud_list() {
  const router = useRouter();
  const navigate = (path) => {
    router.push(path);
  };

  const section = [
    {
      id: 1,
      strand: "HUMSS",
      grade: "11",
      section: "Mactan",
    },
  ];

  const students = [
    {
      id: 1,
      stud_pic: "./images/profile.svg",
      stud_id: "12-3456",
      fname: "rr",
      mname: "C.",
      lname: "Manuel",
    },
    {
      id: 2,
      stud_pic: "./images/profile.svg",
      stud_id: "12-3456",
      fname: "Kenneth",
      mname: "C.",
      lname: "Manuel",
    },
    {
      id: 3,
      stud_pic: "./images/profile.svg",
      stud_id: "12-3456",
      fname: "Kenneth",
      mname: "C.",
      lname: "Manuel",
    },
    {
      id: 4,
      stud_pic: "./images/profile.svg",
      stud_id: "12-3456",
      fname: "Kenneth",
      mname: "C.",
      lname: "Manuel",
    },
    {
      id: 5,
      stud_pic: "./images/profile.svg",
      stud_id: "12-3456",
      fname: "Kenneth",
      mname: "C.",
      lname: "Manuel",
    },
    {
      id: 6,
      stud_pic: "./images/profile.svg",
      stud_id: "12-3456",
      fname: "Kenneth",
      mname: "C.",
      lname: "Manuel",
    },
    {
      id: 7,
      stud_pic: "./images/profile.svg",
      stud_id: "12-3456",
      fname: "Kenneth",
      mname: "C.",
      lname: "Manuel",
    },
    {
      id: 8,
      stud_pic: "./images/profile.svg",
      stud_id: "12-3456",
      fname: "Kenneth",
      mname: "C.",
      lname: "Manuel",
    },
    {
      id: 9,
      stud_pic: "./images/profile.svg",
      stud_id: "12-3456",
      fname: "Kenneth",
      mname: "C.",
      lname: "Manuel",
    },
    {
      id: 10,
      stud_pic: "./images/profile.svg",
      stud_id: "12-3456",
      fname: "Kenneth",
      mname: "C.",
      lname: "Manuel",
    },
  ];
  return (
    <main className=" w-full h-full p-4 rounded-2xl bg-[#ffffff] overflow-y-scroll">
      <div className=" w-full h-full flex flex-col">
        <div className=" flex flex-row border-b pb-4 ">
          <button onClick={() => navigate("../admin", "admin")}>
            <img src="./icons/back-icon.svg" alt="" className=" h-[50px]" />
          </button>

          {section.map((items) => (
            <div
              key={items.id}
              className=" w-full flex items-center justify-center "
            >
              <h1 className=" text-3xl">
                {items.strand} {items.grade} - {items.section}
              </h1>
            </div>
          ))}
        </div>
        <div className="w-full h-[90%] overflow-y-scroll flex justify-center">
          <table className="w-[80%] bg-white border-collapse">
            <tbody>
              {students.map((list) => (
                <tr key={list.id} className="border-b">
                  <td className="p-4">
                    <img
                      src={list.stud_pic}
                      alt="Student Picture"
                      className="h-[60px] rounded-full"
                    />
                  </td>
                  <td className="p-4">{list.stud_id}</td>
                  <td className="p-4 text-center">
                    {list.lname}, {list.fname} {list.mname}
                  </td>
                  <td className="p-4 text-end">
                    <button className="bg-[#002147] text-white p-2 rounded-xl">
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className=" absolute self-end bottom-8 right-8">
          <img src="./icons/add-icon.svg" className=" h-[80px]" />
        </button>
      </div>
    </main>
  );
}
