"use client";
import { useRouter } from "next/navigation";
import student_info from "@/components/student_info";
import StudInfo from "@/components/info_layout"
export default function Student_Profile() {
  const router = useRouter();
  const navigate = (path) => {
    router.push(path);
  };

  const student = student_info[0];

  return (
    <main className=" w-full h-full p-4 rounded-2xl bg-[#ffffff] overflow-y-scroll">
      <div className=" w-full h-full flex flex-col">
        <div className=" flex flex-row border-b pb-4 justify-between">
          <button onClick={() => navigate("../student_list", "student_list")}>
            <img src="./icons/back-icon.svg" alt="" className=" h-[50px]" />
          </button>
          <div key={student.id} className=" flex flex-row gap-6 items-center">
            <div>
              <img src={student.pic} alt="" className=" h-20" />
            </div>
            <div>
              <h1 className=" text-xl font-semibold">
                {student.lname}, {student.fname} {student.mname}
              </h1>
              <p className=" opacity-50">Student ID: {student.stud_id}</p>
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <button className=" bg-[#002147] flex flex-row justify-center items-center p-2 pl-4 pr-4 rounded text-white">
              Edit
            </button>
          </div>
        </div>
        <div className="w-full h-[90%] overflow-y-scroll flex justify-center">
          <StudInfo/>
        </div>
      </div>
    </main>
  );
}
