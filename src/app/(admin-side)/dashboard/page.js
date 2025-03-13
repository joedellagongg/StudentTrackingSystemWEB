"use client";
import React from "react";
import Calendar from "@/components/calendar";

export default function Admin() {
  const logs = [
    {
      name: "Paula Marie B. Mendoza",
      section: "STEM 11 - Pandi",
      time: "8:00 AM",
      status: "Time in",
    },
    {
      name: "Kenneth C. Manuel",
      section: "HUMSS 12 - Balagtas",
      time: "10:00 AM",
      status: "Time Out",
    },
    {
      name: "Joedel S. Lagong",
      section: "ABM 11 - Bocaue",
      time: "2:00 PM",
      status: "Time In",
    },
    {
      name: "Jorge Rayne David",
      section: "TVL 12 - Baliwag",
      time: "9:00 AM",
      status: "Time Out",
    },
    {
      name: "Paula Marie B. Mendoza",
      section: "STEM 11 - Pandi",
      time: "8:00 AM",
      status: "Time in",
    },
    {
      name: "Kenneth C. Manuel",
      section: "HUMSS 12 - Balagtas",
      time: "10:00 AM",
      status: "Time Out",
    },
    {
      name: "Joedel S. Lagong",
      section: "ABM 11 - Bocaue",
      time: "2:00 PM",
      status: "Time In",
    },
    {
      name: "Jorge Rayne David",
      section: "TVL 12 - Baliwag",
      time: "9:00 AM",
      status: "Time Out",
    },
  ];
  return (
    <main className="w-full h-full rounded-2xl flex flex-row justify-between gap-x-4 bg-[#ffffff] p-6">
      <div className=" h-full w-[60%]">
        <div className=" h-full w-full ">
          <h1 className=" text-[4vw]">Hello, Admin ! 👋</h1>

          <div className="  h-[45%] shadow-xl border rounded-xl p-4 overflow-y-scroll">
            <h1 className=" text-[2vw]">Transaction History</h1>
          </div>
          <div className=" mt-6 h-[40%] shadow-xl border rounded-xl p-4 overflow-y-scroll">
            <h1 className=" text-[2vw]">Daily Logs</h1>
            {logs.map((item, index) => (
              <div key={index} className=" w-full ">
                <table className=" w-full mt-2">
                  <tbody>
                    <tr className=" w-full text-left text-[1vw] border-b">
                      <td className=" opacity-50 w-[40%]">{item.name}</td>
                      <td className=" opacity-50 w-[30%]">{item.section}</td>
                      <td className=" opacity-50 w-[20%]">{item.time}</td>
                      <td
                        className={`w-[10%] ${
                          item.status === "Time Out"
                            ? "text-red-600"
                            : "text-green-600"
                        }`}
                      >
                        {item.status}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" w-[40%] h-full items-center flex flex-col justify-between">
        <div className=" h-full w-full rounded-xl border shadow-xl mb-4">

        </div>
        <Calendar />
      </div>
    </main>
  );
}
