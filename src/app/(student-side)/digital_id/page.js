import React from "react";
import Image from "next/image";

export default function Digital_id() {
  return (
    <main className=" pl-4 pr-4 w-[60%] h-full">
      <div className=" w-full h-full flex flex-col">
        <div className=" ">
          <h1 className=" text-[45px]">My Digital ID</h1>
        </div>

        <div className=" flex flex-col gap-y-8 w-full h-full bg-[#FFFFFF] rounded-2xl p-10 overflow-y-auto no-scrollbar">
          {/* ID-FRONT */}
          <div className=" w-full flex flex-col justify-center items-center">
            <h1 className=" text-[35px]">Front</h1>
<<<<<<< HEAD:src/app/(student-dashboard)/digital_id/page.js
            <div className=""></div>
=======
            <div className=" w-[455px] rounded-2xl h-[320px] bg-[url('/id_template/id_bg.svg')] bg-cover">
            </div>
>>>>>>> 15ed984a660da6190dae503d1a898dbb9c493516:src/app/(student-side)/digital_id/page.js
          </div>
          {/* ID-BACK */}

          <div className=" w-full flex flex-col justify-center items-center">
            <h1 className=" text-[35px]">Back</h1>
            <img src="./id_template/ID-Back.svg" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}
