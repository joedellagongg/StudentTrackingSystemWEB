import React from "react";
import Image from "next/image";

export default function AdminProfile({ isHovered, setIsHovered }) {
    const profile = [
        {
            id: 1,
            profilePic: "./images/profile.svg",
            adminName: "Admin",
        },
    ];

    // height={0}
    // width={100}

    return (
        <div className="w-full border-b-2 flex flex-col gap-x-2">
            {profile.map((profile) => (
                <div
                    key={profile.id}
                    className="flex flex-row items-center gap-x-2"
                >
                    <Image
                        height={0}
                        width={100}
                        src={profile.profilePic}
                        alt="Profile"
                        className={isHovered ? "h-16" : " h-16 w-16"}
                    />
                    {isHovered && (
                        <p className="text-[16px] font-bold">
                            {profile.adminName}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}
