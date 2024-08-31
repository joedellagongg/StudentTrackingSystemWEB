import React from "react";

export default function Schedule() {
  const schedule = [
    {
      date: "Mon",
      in: "8:00 AM",
      out: "12:00 PM",
    },
    {
        date: "Tues",
        in: "8:00 AM",
        out: "12:00 PM",
      },
      {
        date: "Wed",
        in: "8:00 AM",
        out: "10:00 AM",
      },
      {
        date: "Thurs",
        in: "8:00 AM",
        out: "10:00 AM",
      },
      {
        date: "Fri",
        in: "8:00 AM",
        out: "12:00 PM",
      },
  ];
  return (
    <>
      {schedule.map((sched) => (
        <p className="p-4 bg-[#E1E8FF] rounded-xl text-[14px] text-center">
          {sched.date}: {sched.in} - {sched.out}
        </p>
      ))}
    </>
  );
}
