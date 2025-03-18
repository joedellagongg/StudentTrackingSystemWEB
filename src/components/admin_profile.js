import React from "react";
import Image from "next/image";

export default function AdminProfile({ isHovered, setIsHovered }) {
  const profile = [
    {
      id: 1,
      profilePic: "../images/profile.svg",
      adminName: "Admin",
    },
  ];

  // height={0}
  // width={100}

  return (
    <div className=" w-full border-b-2 flex-col gap-x-2">
      {profile.map((profile) => (
        <div key={profile.id} className="flex flex-row items-center gap-x-2">
          <Image
            height={0}
            width={0}
            src={profile.profilePic}
            alt="Profile"
            className={` h-16 w-auto ${isHovered ? "h-16 w-auto" : "mx-auto"}`}
          />
          {isHovered && (
            <p className="text-[16px] font-bold">{profile.adminName}</p>
          )}
        </div>
      ))}
    </div>
  );
}
