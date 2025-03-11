"use client";
import React, { useState, useEffect, useRef, Suspense } from "react";
import axiosInstance from "@/library/axios";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";

function NFCComponent() {
  const [studentsWithoutNfc, setStudentsWithoutNfc] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStudentIndex, setCurrentStudentIndex] = useState(0);
  const [nfcInput, setNfcInput] = useState("");
  const [isInitialRender, setIsInitialRender] = useState(false);
  const [apiResponse, setApiResponse] = useState(null); // Store the API response here
  const router = useRouter();
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  const nfcInputRef = useRef(null);

  const navigate = (path) => {
    router.push(path);
  };

  useEffect(() => {
    if (!section) return;

    const fetchStudents = async () => {
      try {
        const response = await axiosInstance.get(
          `/students/nfc_lookup/${section}`
        );
        console.log("API Response:", response.data);
        setStudentsWithoutNfc(response.data.data);
      } catch (err) {
        console.error("Error fetching students:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [section]);

  useEffect(() => {
    if (isModalOpen && !isInitialRender && nfcInputRef.current) {
      nfcInputRef.current.focus();
      setIsInitialRender(true);
    }
  }, [isModalOpen, isInitialRender]);

  useEffect(() => {
    if (nfcInputRef.current) {
      nfcInputRef.current.focus();
    }
  }, [currentStudentIndex]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePrevStudent = () => {
    if (currentStudentIndex > 0) {
      setCurrentStudentIndex(currentStudentIndex - 1);
    }
  };

  const handleNextStudent = () => {
    if (currentStudentIndex < studentsWithoutNfc.length - 1) {
      setCurrentStudentIndex(currentStudentIndex + 1);
    }
  };

  const handleInputChange = (event) => {
    setNfcInput(event.target.value);
  };
  const handleNfcSubmit = async () => {
    console.log(typeof currentStudent.username);
    console.log(typeof nfcInput);

    try {
      const response = await axiosInstance.post(`/students/nfc_provider`, {
        username: currentStudent.username,
        nfc_id: nfcInput,
      });

      setApiResponse(response.data); // Store response in state
      console.log(response.data);

      if (response.data.success) {
        console.log("✅ NFC set successfully!");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          console.warn("⚠ NFC UID already exists!");
          setApiResponse({
            success: false,
            message: error.response.data.message,
          });
        } else {
          console.error("🚨 Unexpected error:", error.response.data.message);
          setApiResponse({ success: false, message: "Something went wrong!" });
        }
      } else {
        console.error("❌ Network error or no response from server");
        setApiResponse({
          success: false,
          message: "Server unreachable. Try again later.",
        });
      }
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  const sortedStudents = studentsWithoutNfc.sort((a, b) => {
    return a.full_name.localeCompare(b.full_name);
  });

  const currentStudent = sortedStudents[currentStudentIndex];

  return (
    <main className="w-full h-full rounded-2xl overflow-x-scroll bg-white p-4">
      <div className="w-full flex justify-between">
        <button onClick={() => navigate(`../student_list?section=${section}`)}>
          <Image
            width={0}
            height={0}
            src="/icons/back-icon.svg"
            alt="back"
            className="h-[50px] w-auto"
          />
        </button>

        <button
          onClick={openModal}
          className="bg-[#002147] text-[1.2vw] text-white flex flex-row gap-x-2 p-2 justify-center items-center rounded-xl"
        >
          <Image
            width={0}
            height={0}
            src="/icons/nfc.svg"
            alt="nfc"
            className="h-[2vw] w-auto"
          />
          Add NFC
        </button>
      </div>

      <h2 className="font-bold text-xl mt-4">Students Without NFC</h2>
      <table className="w-full mt-2 border-collapse border border-gray-200 text-left">
        <thead>
          <tr className="border-b border-gray-300">
            <th className=" p-2">No.</th>
            <th className="p-2">Name</th>
            <th className="p-2">Student ID</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.length === 0 ? (
            <tr>
              <td colSpan="2" className="text-center p-2">
                No students without NFC
              </td>
            </tr>
          ) : (
            sortedStudents.map((student, index) => (
              <tr key={student.username} className="border-b border-gray-200">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{student.full_name}</td>
                <td className="p-2">{student.username}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {isModalOpen && currentStudent && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-auto">
            <div className="flex justify-between mt-4 items-center gap-x-20">
              <button
                onClick={handlePrevStudent}
                disabled={currentStudentIndex === 0}
              >
                <Image
                  width={0}
                  height={0}
                  src="/icons/next.svg"
                  alt="next"
                  className=" h-[5vw] w-auto rotate-180"
                />
              </button>
              <div className=" flex flex-col text-[3vw]">
                <p>
                  <span className=" font-bold">Name:</span>{" "}
                  {currentStudent.full_name}
                </p>
                <p>
                  <span className=" font-bold">Student ID:</span>{" "}
                  {currentStudent.username}
                </p>
                <input
                  ref={nfcInputRef}
                  placeholder="Add NFC"
                  value={nfcInput}
                  onChange={handleInputChange}
                  className=" border border-[#002147] rounded-xl mt-4 h-[5vw] text-[2vw] text-center w-full"
                />
              </div>

              <button
                onClick={handleNextStudent}
                disabled={currentStudentIndex === sortedStudents.length - 1}
                className=" rounded-full"
              >
                <Image
                  width={0}
                  height={0}
                  src="/icons/next.svg"
                  alt="next"
                  className=" h-[5vw] w-auto"
                />
              </button>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={handleNfcSubmit} // Trigger the NFC submission
                className="bg-[#002147] text-white px-4 py-2 rounded-lg"
              >
                Set NFC
              </button>
            </div>

            {apiResponse && (
              <div className="mt-4 text-center">
                <p className="text-sm text-green-500">
                  {apiResponse.message || "NFC set successfully!"}
                </p>
              </div>
            )}

            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                className="bg-[#002147] text-white px-4 py-2 rounded-lg"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default function NFC() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <NFCComponent />
    </Suspense>
  );
}
