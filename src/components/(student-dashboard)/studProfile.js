import React from "react";

export default function StudentProfile() {
  const profile = [
    {
      id: 1,
      profilePic: "./images/examplePic.png",
      studentName: "Paula Marie Mendoza",
      idNum: "24-1234",
    },
  ];
  return (
    <>
      {profile.map((profile) => (
        <div className=" w-full border-b-2 p-6 flex flex-col justify-center items-center gap-y-2">
          <img className=" h-28 w-28" src={profile.profilePic} />
          <p className=" text-[16px]">{profile.studentName}</p>
          <p className="text-[12px] opacity-50">ID: {profile.idNum}</p>
        </div>
      ))}
    </>
  );
}
