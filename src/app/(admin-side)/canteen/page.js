"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Canteen() {
  const router = useRouter();

  const navigate = (path) => {
    router.push(path);
  };
  const [deleteModal, setDeleteModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [selectedCanteen, setSelectedCanteen] = useState(null);

  const canteen = [
    { canteen: "Joedel's Canteen" },
    { canteen: "Kenneth's Canteen" },
    { canteen: "Paula's Canteen" },
    { canteen: "Jorgy's Canteen" },
  ];

  const handleDeleteClick = (canteenName, event) => {
    event.stopPropagation();
    setSelectedCanteen(canteenName);
    setDeleteModal(true);
  };

  return (
    <main className="w-full h-full rounded-2xl overflow-x-scroll bg-[#ffffff]">
      <button
        onClick={() => setAddModal(true)}
        className="fixed self-end bottom-8 right-8"
      >
        <Image
          priority={true}
          width={0}
          height={0}
          src="./icons/add-icon.svg"
          className="h-[80px] w-auto"
          alt="Add"
        />
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-6 gap-3">
        {canteen.map((item, index) => (
          <button
            onClick={() => navigate("../canteen_dashboard")}
            key={index}
            className="bg-[#002147] rounded-xl text-white text-center text-xl h-[150px] hover:bg-white drop-shadow-2xl border hover:text-black relative"
          >
            <div className="w-full flex justify-end absolute top-2 right-2">
              <div>
                <Image
                  onClick={(event) => handleDeleteClick(item.canteen, event)}
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
                    // Add your delete action here (e.g., removing from state)
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {addModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 w-[40%] rounded-xl flex flex-col text-left justify-center items-center">
              <div className="w-full">
                <p className="font-bold">Canteen Name:</p>
                <input
                  type="text"
                  placeholder="Input Canteen Name"
                  className="border h-12 rounded-xl outline-0 p-4 w-full"
                />
              </div>
              <div className=" w-full flex flex-row justify-end items-center gap-x-4 mt-4">
                <button onClick={() => setAddModal(false)}>Cancel</button>
                <button className=" rounded-xl bg-[#002147] p-4 text-white">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
