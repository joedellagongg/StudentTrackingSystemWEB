"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function MobileSideNav() {
  const [sideModal, setSideModal] = useState(false);
  const adminProfile = [
    {
      profilePic: "./images/profile.svg",
      adminName: "Admin",
    },
  ];

  return (
    <div className=" md:hidden w-full h-[10%] flex justify-between items-center bg-white rounded-xl px-2">
      <button onClick={() => setSideModal(true)} className=" md:hidden">
        <Image
          width={0}
          height={0}
          src="./icons/hamburger.svg"
          alt="humburger icon"
          className=" w-12 h-12"
        />
      </button>
      <Image
        priority={true}
        width={0}
        height={0}
        onClick={() => navigate("../dashboard", "dashboard")}
        src="./logo/logo.svg"
        alt="logo"
        className=" h-[80%] w-auto md:hidden"
      />

      {sideModal && (
        <div className="fixed inset-0 flex justify-start bg-black bg-opacity-50 z-50">
          <div className="bg-white w-[70%] h-full p-2">
            <div className=" w-full h-12 flex justify-end items-center">
              <button
                onClick={() => setSideModal(false)}
                className=" font-bold text-3xl"
              >
                X
              </button>
            </div>
            {adminProfile.map((item, index) => (
              <div
                key={index}
                className=" w-full flex flex-row items-center gap-x-4"
              >
                <Image
                  src={item.profilePic}
                  alt=" profile"
                  width={0}
                  height={0}
                  className=" h-16 w-auto"
                />
                <strong className=" text-xl">{item.adminName}</strong>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
