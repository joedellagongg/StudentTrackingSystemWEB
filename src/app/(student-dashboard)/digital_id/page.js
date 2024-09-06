import React from "react";

export default function Digital_id() {
  return (
    <main className=" pl-4 pr-4 w-[60%] h-full">
      <div className=" w-full h-full flex flex-col">
        <div className=" ">
          <h1 className=" text-[45px]">My Digital ID</h1>
        </div>
        <div className=" w-full h-full bg-[#FFFFFF] rounded-2xl p-10 overflow-y-auto no-scrollbar">
          <div className=" w-full flex flex-col justify-center items-center ">
            <h1 className=" text-[35px]">Back</h1>
            <img src="./id_template/ID-Back.svg" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}
