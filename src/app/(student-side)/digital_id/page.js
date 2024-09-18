import React from "react";

export default function Digital_id() {
  const id_info = [
    {
      stud_pic: "./images/pic.svg",
      stud_no: "24-1234",
      name: "Paula Marie B. Mendoza",
      grade: "6",
      section: "Yakal",
      adviser: "Kenneth Manuel",
    },
  ];
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

            <div className=" flex flex-col gap-y-6 items-center w-[455px] rounded-2xl h-[320px] bg-[url('/id_template/id_bg.svg')] bg-cover">
              <div className=" flex flex-row items-center gap-x-4 pt-4">
                <div>
                  <img src="./logo/logo.svg" alt="" className=" h-16" />
                </div>
                <div className=" flex flex-col text-center">
                  <h1 className=" text-[#002147] text-[18px]">
                    COLLEGE OF MARY IMMACULATE
                  </h1>
                  <p className=" text-[#002147] text-[9px]">
                    Pandi-Angat Road, Siling Matanda, Pandi, Bulacan
                  </p>
                </div>
              </div>
              <div>
                {id_info.map((studInfo) => (
                  <div className="flex flex-row gap-x-4">
                    <div className=" flex flex-col text-center">
                      <img src={studInfo.stud_pic} alt="" />
                      <p className=" text-[#002147] font-semibold text-[12px]">
                        Student ID: {studInfo.stud_no}
                      </p>
                    </div>

                    <div className=" flex flex-col justify-center ">
                      <h1 className=" text-[20px] font-bold text-[#002147]">
                        {studInfo.name}
                      </h1>
                      <p className=" text-[#002147] font-semibold">Grade: {studInfo.grade}</p>
                      <p className=" text-[#002147] font-semibold">
                        Section: {studInfo.section}
                      </p>
                      <p className=" text-[#002147] font-semibold">
                        Adviser: {studInfo.adviser}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
