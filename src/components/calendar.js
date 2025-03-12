import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import the default styles

export default function CalendarGfg() {
  const [value, onChange] = useState(new Date());

  return (
    <Calendar
      onChange={onChange}
      value={value}
      className=" rounded-lg shadow-2xl p-4"
    />
  );
}
