import React from "react";
import moment from "moment";

export default function DateTime() {
  const date = moment().utcOffset("+08:00").format("ddd, MMMM DD YYYY");
  const time = moment().format("LTS", 1000);

  return (
    <>
      <p className=" text-[20px]">{date}</p>
      <p className=" text-[20px]">{time}</p>
    </>
  );
}
