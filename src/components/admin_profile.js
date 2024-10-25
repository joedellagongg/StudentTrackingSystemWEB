import React from "react";

export default function AdminProfile({ isHovered, setIsHovered }) {
  const profile = [
    {
      id: 1,
      profilePic: "./images/profile.svg",
      adminName: "Admin",
    },
  ];
  
  return (
    <div
      className="w-full border-b-2 flex flex-col justify-center items-center gap-y-2"
    >
      {profile.map((profile) => (
        <div key={profile.id} className="flex flex-col items-center">
          <img src={profile.profilePic} alt="Profile" className={isHovered ? "h-16" : " h-28 w-28"} />
          {isHovered && <p className="text-[16px]">{profile.adminName}</p>}
        </div>
      ))}
    </div>
  );
}
