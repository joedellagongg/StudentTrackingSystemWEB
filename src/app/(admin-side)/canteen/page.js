"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AddCanteenComponent from "../../../components/add_canteen";
import axiosInstance from "@/library/axios";
import { useSearchParams } from "next/navigation";

export default function Canteen() {
  const router = useRouter();

  const [canteenPage, setCanteenPage] = useState({
    setCanteenList: [],
    loadingState: false,
  });

  const navigate = (path) => {
    router.push(path);
  };

  const fetchCanteen = async () => {
    setCanteenPage((prevState) => ({
      ...prevState,
      loadingState: true,
    }));
    try {
      const response = await axiosInstance.get("/stores");
      console.log(response.data.data);

      setCanteenPage((prevState) => ({
        ...prevState,
        setCanteenList: response.data.data,
        loadingState: false,
      }));
    } catch (err) {
      console.error(err);
    } finally {
      setCanteenPage((prevState) => ({
        ...prevState,
        loadingState: false,
      }));
    }
  };

  useEffect(() => {
    fetchCanteen();
  }, []);

  const [deleteModal, setDeleteModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [selectedCanteen, setSelectedCanteen] = useState(null);

  const handleDeleteClick = (canteenName, event) => {
    event.stopPropagation();
    setSelectedCanteen(canteenName);
    setDeleteModal(true);
  };

  const handleAddCanteen = (newCanteen) => {
    setCanteenPage((prevState) => ({
      ...prevState,
      setCanteenList: [...prevState.setCanteenList, newCanteen],
    }));
    setAddModal(false);
  };

  return (
    <main className="w-full h-full rounded-2xl overflow-x-scroll bg-[#ffffff]">
      <button
        onClick={() => setAddModal(true)}
        className="fixed self-end bottom-4 right-4 md:bottom-8 md:right-8 z-40"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-6 gap-3 z-10">
        {canteenPage.setCanteenList.map((item) => (
          <button
            onClick={() =>
              navigate(`../canteen_dashboard?canteen_id=${item.username}`)
            }
            key={item.store_id}
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
            {item.name}
          </button>
        ))}
        {deleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 w-[90%] md:w-[40%] lg:w-[30%] rounded-xl flex flex-col text-center justify-center items-center">
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

        {addModal && (
          <AddCanteenComponent
            setAddModal={setAddModal}
            dataTransmit={handleAddCanteen}
          />
        )}
      </div>
    </main>
  );
}
