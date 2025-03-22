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

  const userData = {
    statusCode: 200,
    balanced: true,
    data: [
      {
        user_id: 1,
        username: "259066",
        user_type: "student",
        full_name: "Jorge Rayne David",
        total_balance: "0.00",
      },
    ],
  };

  const user = userData.data[0];

  // New transactions data
  const transactionData = {
    statusCode: 200,
    success: true,
    data: [
      {
        transaction_id: 1,
        reference_no: "2503220637C4012D",
        sender_id: 255384,
        sender_role: "admin",
        amount: "1000.00",
        receiver_id: 252212,
        receiver_role: "student",
        description: "Student Credit",
        timestamp: "2025-03-21T22:37:25.000Z",
        
      },
      {
        transaction_id: 2,
        reference_no: "2503220637C4012D",
        sender_id: 255384,
        sender_role: "admin",
        amount: "1000.00",
        receiver_id: 252212,
        receiver_role: "student",
        description: "Student Credit",
        timestamp: "2025-03-21T22:37:25.000Z",
        
      },
      {
        transaction_id: 1,
        reference_no: "2503220637C4012D",
        sender_id: 255384,
        sender_role: "admin",
        amount: "1000.00",
        receiver_id: 252212,
        receiver_role: "student",
        description: "Student Credit",
        timestamp: "2025-03-21T22:37:25.000Z",
        
      },
      {
        transaction_id: 1,
        reference_no: "2503220637C4012D",
        sender_id: 255384,
        sender_role: "admin",
        amount: "1000.00",
        receiver_id: 252212,
        receiver_role: "student",
        description: "Student Credit",
        timestamp: "2025-03-21T22:37:25.000Z",
        
      },
      {
        transaction_id: 1,
        reference_no: "2503220637C4012D",
        sender_id: 255384,
        sender_role: "admin",
        amount: "1000.00",
        receiver_id: 252212,
        receiver_role: "student",
        description: "Student Credit",
        timestamp: "2025-03-21T22:37:25.000Z",
        
      },
      {
        transaction_id: 1,
        reference_no: "2503220637C4012D",
        sender_id: 255384,
        sender_role: "admin",
        amount: "1000.00",
        receiver_id: 252212,
        receiver_role: "student",
        description: "Student Credit",
        timestamp: "2025-03-21T22:37:25.000Z",
        
      },
      {
        transaction_id: 1,
        reference_no: "2503220637C4012D",
        sender_id: 255384,
        sender_role: "admin",
        amount: "1000.00",
        receiver_id: 252212,
        receiver_role: "student",
        description: "Student Credit",
        timestamp: "2025-03-21T22:37:25.000Z",
        
      },
    ],
  };

  return (
    <main className="w-full h-full rounded-2xl flex flex-row justify-between gap-x-4 bg-[#ffffff] p-6">
      <div className=" h-full w-[60%]">
        <div className=" h-full w-full ">
          <h1 className=" text-[4vw]">Hello, Admin ! 👋</h1>

          <div className="  h-[45%] shadow-xl border rounded-xl p-4 overflow-y-scroll">
            <h1 className=" text-[2vw]">Transaction History</h1>
            <table className="w-full mt-4 table-auto">
              <thead className="w-full">
                <tr>
                  <th className="w-[40%] text-left">User Identity</th>
                  <th className="w-[20%] text-center">Description</th>
                  <th className="w-[20%] text-center">Date & Time</th>
                  <th className="w-[20%] text-center">Amount</th>
                </tr>
              </thead>
            </table>

            <div className="overflow-y-scroll w-full no-scrollbar">
              <table className="w-full mt-4 table-auto">
                <tbody>
                  {transactionData.data.map((item, index) => (
                    <tr key={index} className=" border-b ">
                      <td className="w-[40%] capitalize">
                        <p className="max-w-full">{item.receiver_id}</p>
                      </td>
                      <td className="max-w-[20%] capitalize text-center">
                        {item.description}
                      </td>
                      <td className="w-[20%] capitalize text-center text-[1vw]">
                        {new Date(
                          new Date(item.timestamp).getTime() -
                            8 * 60 * 60 * 1000
                        ).toLocaleString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                        })}
                      </td>
                      <td className="w-[20%] text-center">₱ {item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
        <div className=" h-full w-full rounded-xl border shadow-xl mb-4 bg-gradient-to-br from-[#002147] to-[#168FCC] text-white p-6">
          <div className=" w-full h-[20%]">
            <h1 className=" font-bold text-2xl">{user.full_name}</h1>
            <h1>User ID: {user.username}</h1>
          </div>
          <div className=" flex flex-row h-[80%]">
            <div className=" flex justify-end flex-col gap-x-2">
              <span className=" text-xl">Current Balance:</span>
              <span className=" text-4xl font-bold">
                ₱ {user.total_balance}
              </span>
            </div>
          </div>
        </div>

        <Calendar />
      </div>
    </main>
  );
}
