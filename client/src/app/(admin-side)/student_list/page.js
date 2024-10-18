"use client";
import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import AddStudent from "@/app/(devs)/add_student/page";
import Loader from "@/components/loader";

export default function Stud_list() {
  const router = useRouter();
  const navigate = (path) => {
    router.push(path);
  };

  const section = [
    {
      id: 1,
      strand: "HUMSS",
      grade: "11",
      section: "Mactan",
    },
  ];

  const [modal, setModal] = useState(false);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStudents, setSelectedStudents] = useState(new Set());

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          "https://attendance-backend-app.up.railway.app/student_list"
        );
        setStudents(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch students. Check Servers");
        console.error(err);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allStudentIds = new Set(
        students.map((student) => student.student_id)
      );
      setSelectedStudents(allStudentIds);
    } else {
      setSelectedStudents(new Set());
    }
  };

  const handleSelectStudent = (studentId) => {
    const newSelectedStudents = new Set(selectedStudents);
    if (newSelectedStudents.has(studentId)) {
      newSelectedStudents.delete(studentId);
    } else {
      newSelectedStudents.add(studentId);
    }
    setSelectedStudents(newSelectedStudents);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="w-full h-full p-4 rounded-2xl bg-[#ffffff] overflow-y-scroll no-scrollbar">
      <div className="w-full h-full flex flex-col">
        <div className="flex flex-row border-b pb-4 justify-between ">
          <button onClick={() => navigate("../dashboard", "admin")}>
            <img src="./icons/back-icon.svg" alt="" className="h-[50px]" />
          </button>

          {section.map((items) => (
            <div
              key={items.id}
              className="capitalize flex items-center justify-center no-scrollbar"
            >
              <h1 className="text-3xl">
                {items.strand} {items.grade} - {items.section}
              </h1>
            </div>
          ))}
          <div className="h-full gap-2 flex flex-row justify-end items-center">
            <label htmlFor="all" className=" text-sm">
              Select All
            </label>
            <input id="all" type="checkbox" onChange={handleSelectAll} />
            <button className=" bg-red-500 p-2 rounded-lg text-white text-sm flex flex-row items-center gap-1">
              <img src="./icons/delete-white.svg" alt="" className=" h-6" />
              Delete
            </button>
          </div>
        </div>
        <div className="w-full h-[90%] overflow-y-scroll flex justify-center no-scrollbar">
          <table className="w-[80%] max-h-[20%] bg-white border-collapse no-scrollbar">
            <tbody>
              {students.map((list) => (
                <tr key={list.id} className="border-b">
                  <td className=" flex justify-center">
                    <input
                      type="checkbox"
                      checked={selectedStudents.has(list.student_id)}
                      onChange={() => handleSelectStudent(list.student_id)}
                    />
                    <td className="p-4 flex justify-center">
                      <img
                        src="./images/profile.svg"
                        alt="Student Picture"
                        className="rounded-full h-[50px]"
                      />
                    </td>
                  </td>
                  <td className="p-4">{list.student_id}</td>
                  <td className="capitalize p-4 text-center">
                    {list.lname}, {list.fname} {list.mname}
                  </td>
                  <td className="p-4 text-end">
                    <button
                      onClick={() =>
                        navigate(`../student_profile?id=${list.student_id}`)
                      }
                      className="bg-[#002147] text-white p-3 text-sm rounded-lg"
                    >
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          onClick={() => setModal(true)}
          className="absolute self-end bottom-8 right-8"
        >
          <img src="./icons/add-icon.svg" className="h-[80px]" />
        </button>

        {modal && <AddStudent closeModal={() => setModal(false)} />}
      </div>
    </main>
  );
}
