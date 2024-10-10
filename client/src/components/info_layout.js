"use client";
import student_info from "@/components/student_info";
export default function StudInfo() {
  const student = student_info[0];

  return (
    <div key={student.id} className=" w-full mt-4 flex flex-col gap-y-4">
      <div className=" grid grid-cols-3 justify-around w-full gap-6">
        <div>
          <p className=" text-sm">Last Name</p>
          <p className=" text-gray-400 bg-[#E5F1FF] rounded-xl p-3">
            {student.lname}
          </p>
        </div>
        <div>
          <p className=" text-sm">First Name</p>
          <p className=" text-gray-400 bg-[#E5F1FF] rounded-xl p-3">
            {student.fname}
          </p>
        </div>
        <div>
          <p className=" text-sm">Middle Name</p>
          <p className=" text-gray-400 bg-[#E5F1FF] rounded-xl p-3">
            {student.mname}
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-3 justify-around w-full gap-6">
        <div>
          <p className=" text-sm">Age</p>
          <p className=" text-gray-400 bg-[#E5F1FF] rounded-xl p-3">
            {student.age}
          </p>
        </div>
        <div>
          <p className=" text-sm">Birthday</p>
          <p className=" text-gray-400 bg-[#E5F1FF] rounded-xl p-3">
            {student.birthday}
          </p>
        </div>
        <div>
          <p className=" text-sm">Gender</p>
          <p className=" text-gray-400 bg-[#E5F1FF] rounded-xl p-3">
            {student.gender}
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-2 justify-around w-full gap-6">
        <div>
          <p className=" text-sm">Email Address</p>
          <p className=" text-gray-400 bg-[#E5F1FF] rounded-xl p-3">
            {student.emailAdd}
          </p>
        </div>
        <div>
          <p className=" text-sm">Contact Number</p>
          <p className=" text-gray-400 bg-[#E5F1FF] rounded-xl p-3">
            {student.contactNum}
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-2 justify-around w-full gap-6">
        <div>
          <p className=" text-sm">Mother</p>
          <p className=" text-gray-400 bg-[#E5F1FF] rounded-xl p-3">
            {student.mothersname}
          </p>
        </div>
        <div>
          <p className=" text-sm">Contact Number</p>
          <p className=" text-gray-400 bg-[#E5F1FF] rounded-xl p-3">
            {student.mothersNo}
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-2 justify-around w-full gap-6">
        <div>
          <p className=" text-sm">Father</p>
          <p className=" text-gray-400 bg-[#E5F1FF] rounded-xl p-3">
            {student.mothersname}
          </p>
        </div>
        <div>
          <p className=" text-sm">Contact Number</p>
          <p className=" text-gray-400 bg-[#E5F1FF] rounded-xl p-3">
            {student.fathersNo}
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-2 justify-around w-full gap-6">
        <div>
          <p className=" text-sm">Guardian</p>
          <p className=" text-gray-400 bg-[#E5F1FF] rounded-xl p-3">
            {student.mothersname}
          </p>
        </div>
        <div>
          <p className=" text-sm">Contact Number</p>
          <p className=" text-gray-400 bg-[#E5F1FF] rounded-xl p-3">
            {student.guardianNo}
          </p>
        </div>
      </div>
    </div>
  );
}
