"use client";

import React from "react";
import moment from "moment";
import Clock from "react-live-clock";

export default function DateTime() {
  const date = moment().utcOffset("+08:00").format("ddd, MMMM DD YYYY");

  return (
    <>
      <h1 className=" ">{date}</h1>
      <p className=" text-[20px]"><Clock format={"LTS"} ticking={true} /></p>
      
    </>
  );
}
