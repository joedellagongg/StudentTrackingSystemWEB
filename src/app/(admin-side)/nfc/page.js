"use client";
import React, { useState, useEffect, Suspense } from "react";
import axiosInstance from "@/library/axios";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

function NFCComponent() {
  const [studentsWithoutNfc, setStudentsWithoutNfc] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const section = searchParams.get("section");

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

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="w-full h-full rounded-2xl overflow-x-scroll bg-white p-4">
      <div className="w-full">
        <button>
          <Image
            width={0}
            height={0}
            src="/icons/back-icon.svg"
            alt="back"
            className="h-[50px] w-auto"
          />
        </button>
      </div>

      <h2 className="font-bold text-xl mt-4">Students Without NFC</h2>
      <table className="w-full mt-2 border-collapse border border-gray-200">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="p-2">Name</th>
            <th className="p-2">Student ID</th>
          </tr>
        </thead>
        <tbody>
          {studentsWithoutNfc.length === 0 ? (
            <tr>
              <td colSpan="2" className="text-center p-2">
                No students without NFC
              </td>
            </tr>
          ) : (
            studentsWithoutNfc.map((student) => (
              <tr key={student.username} className="border-b border-gray-200">
                <td className="p-2">{student.full_name}</td>{" "}
                {/* Fixed property name */}
                <td className="p-2">{student.username}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
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
