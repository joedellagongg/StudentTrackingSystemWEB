import React from "react";

export default function DashboardPage() {
  const studentName = [
    {
      studFirstName: "Paula Marie",
    },
  ];

  const dtr = [
    {
      status: "Time In",
      time: "8:00 AM",
      date: "Aug 24, 2024",
    },
    {
      status: "Time Out",
      time: "12:00 PM",
      date: "Aug 24, 2024",
    },
    {
      status: "Time In",
      time: "8:00 AM",
      date: "Aug 24, 2024",
    },
    {
      status: "Time Out",
      time: "12:00 PM",
      date: "Aug 24, 2024",
    },
    {
      status: "Time In",
      time: "8:00 AM",
      date: "Aug 24, 2024",
    },
    {
      status: "Time Out",
      time: "12:00 PM",
      date: "Aug 24, 2024",
    },
    {
      status: "Time In",
      time: "8:00 AM",
      date: "Aug 24, 2024",
    },
    {
      status: "Time Out",
      time: "12:00 PM",
      date: "Aug 24, 2024",
    },
  ];
  return (
    <main className=" pl-4 pr-4 w-[60%] h-full">
      <div className=" w-full h-full flex flex-col">
        {studentName.map((studname) => (
          <div className=" ">
            <h1 className=" text-[45px]">Hello, {studname.studFirstName}</h1>
          </div>
        ))}

        <div className=" w-full h-full bg-[#FFFFFF] rounded-2xl p-10 overflow-y-auto no-scrollbar">
          <h1 className=" text-[26px]">Daily Time Records</h1>
          {dtr.map((dtr) => (
            <div className=" flex flex-row justify-around items-center p-4 w-full bg-[#E1E8FF] rounded-xl mt-4">
              <p>{dtr.status}</p>
              <p>{dtr.time}</p>
              <p>{dtr.date}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
