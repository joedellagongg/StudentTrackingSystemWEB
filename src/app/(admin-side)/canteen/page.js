"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Canteen() {
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedCanteen, setSelectedCanteen] = useState(null);

  const canteen = [
    { canteen: "Joedel's Canteen" },
    { canteen: "Kenneth's Canteen" },
    { canteen: "Paula's Canteen" },
    { canteen: "Jorgy's Canteen" },
  ];

  const handleDeleteClick = (canteenName) => {
    setSelectedCanteen(canteenName);
    setDeleteModal(true);
  };

  return (
    <main className="w-full h-full rounded-2xl overflow-x-scroll bg-[#ffffff]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-6 gap-3">
        {canteen.map((item, index) => (
          <button
            key={index}
            className="bg-[#002147] rounded-xl text-white text-center text-xl h-[150px] hover:bg-white drop-shadow-2xl border hover:text-black relative"
          >
            <div className="w-full flex justify-end absolute top-2 right-2">
              <div>
                <Image
                  onClick={() => handleDeleteClick(item.canteen)}
                  width={100}
                  height={0}
                  src="./icons/delete.svg"
                  alt="Delete"
                  className="bg-white p-1 rounded-full h-6 w-6 hover:bg-gray-400"
                />
              </div>
            </div>
            {item.canteen}
          </button>
        ))}
        {deleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 w-[30%] rounded-xl flex flex-col text-center justify-center items-center">
              <p className=" text-lg">
                Are you sure you want to delete{" "}
                <span className=" text-xl font-bold">{selectedCanteen}</span> ?
              </p>

              <div className="flex flex-row w-full justify-end gap-4 mt-4 ">
                <button
                  className=" text-[#002147] p-2 rounded"
                  onClick={() => setDeleteModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-red-500 text-white p-2 rounded-xl"
                  onClick={() => {
                    setDeleteModal(false);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
