"use client";
import React, { useState, useEffect } from "react";
import axiosInstance from "@/library/axios";
import Image from "next/image";

export default function NFC() {
  const [studentsWithoutNfc, setStudentsWithoutNfc] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axiosInstance.get("/students"); // Adjust this endpoint as needed
        const students = response.data;

        const studentsNoNfc = students.filter((student) => !student.nfc_id);
        setStudentsWithoutNfc(studentsNoNfc);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching students:", err);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="w-full h-full rounded-2xl overflow-x-scroll bg-[#ffffff] p-4">
      <div className="w-full">
        <button>
          <Image
            width={0}
            height={0}
            src="./icons/back-icon.svg"
            alt="back"
            className="h-[50px] w-auto"
          />
        </button>
      </div>

      <h2 className="font-bold text-xl mt-4">Students Without NFC</h2>
      <table className="w-full mt-2">
        <thead>
          <tr>
            <th>Name</th>
            <th>Student ID</th>
          </tr>
        </thead>
        <tbody>
          {studentsWithoutNfc.length === 0 ? (
            <tr>
              <td colSpan="2">No students without NFC</td>
            </tr>
          ) : (
            studentsWithoutNfc.map((student) => (
              <tr key={student.username}>
                <td>
                  {student.lname}, {student.fname}
                </td>
                <td>{student.username}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </main>
  );
}
