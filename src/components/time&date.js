"use client";

import React from "react";
import moment from "moment";

export default function DateTime() {
  const date = moment().utcOffset("+08:00").format("ddd, MMMM DD YYYY");
  const time = moment().utcOffset("+08:00").format("LT");


  return (
    <>
      <h1 className="">{date}</h1>
      <p className=" text-[20px]">{time}</p>
    </>
  );
}
