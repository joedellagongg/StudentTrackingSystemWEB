"use client";
import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import axiosInstance from "@/library/axios";

export default function AddStudent({ closeModal }) {
  const searchParams = useSearchParams();
  let id = searchParams.get("section");

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    console.log("id", id);

    try {
      const res = await axiosInstance.post(`/students/file/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // console.log("hello", res.data.success);

      if (res.data.success == true) {
        console.log(res.data);

        window.location.reload();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="z-50 bg-black bg-opacity-50 w-full h-full fixed inset-0 flex items-center justify-center">
      <div className="bg-white flex justify-center items-center w-[50%] lg:w-[30%] p-4 rounded-xl text-sm max-h-[90vh] overflow-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full space-y-4"
        >
          <div className="grid w-full max-w-xs items-center gap-1.5">
            <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Excel File (.xlsx)
            </label>
            <input
              id="file-upload"
              type="file"
              accept=".xlsx"
              onChange={handleFileChange}
              className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-700 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
            />
          </div>

          <div className="flex justify-end gap-4 py-2">
            <button
              onClick={closeModal}
              name=""
              type="button"
              className="bg-white border h-10 w-20 rounded-xl"
            >
              <p>Cancel</p>
            </button>
            <button type="submit" className="bg-[#002147] h-10 w-20 rounded-xl">
              <p className="text-white">Submit</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// export default function StudentIncrement() {
//     const searchParams = useSearchParams();
//     let urlID = searchParams.get("section");
//     return (
//         <Suspense>
//             <AddStudent urlID={urlID} />
//         </Suspense>
//     );
// }
