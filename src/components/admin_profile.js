import React from "react";

export default function AdminProfile() {
  const profile = [
    {
      id: 1,
      profilePic: "./images/profile.svg",
      studentName: "Admin",
    },
  ];
  return (
    <>
      {profile.map((profile) => (
        <div
          key={profile.id}
          className=" w-full border-b-2 p-6 flex flex-col justify-center items-center gap-y-2"
        >
          <img className=" h-28 w-28" src={profile.profilePic} />
          <p className=" text-[16px]">{profile.studentName}</p>
        </div>
      ))}
    </>
  );
}
