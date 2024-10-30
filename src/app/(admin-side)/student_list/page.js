"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AddStudent from "@/app/(devs)/add_student/page";
import { useSearchParams } from "next/navigation";
import Loader from "@/components/loader";
import ConfirmationModal from "@/components/ConfirmationModal";

export default function Stud_list() {
  const router = useRouter();
  const navigate = (path) => {
    router.push(path);
  };

  const searchParams = useSearchParams();
  let urlID = searchParams.get("section");

  const [modal, setModal] = useState(false);
  const [students, setStudents] = useState([]);
  const [section, setSection] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStudents, setSelectedStudents] = useState(new Set());

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          `https://attendance-backend-app.up.railway.app/students/section/${urlID}`
        );
        const resSection = await axios.get(
          `https://attendance-backend-app.up.railway.app/section/${urlID}`
        );
        
        const sortedStudents = response.data.sort((a, b) => {
          const lastNameA = a.lname.toLowerCase();
          const lastNameB = b.lname.toLowerCase();
          return lastNameA.localeCompare(lastNameB);
        });

        setStudents(sortedStudents);
        setSection(resSection.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch students. Check Servers");
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allStudentIds = students.map((student) => student.student_id);
      setSelectedStudents(new Set(allStudentIds));
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

  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const [studentNames, setStudentNames] = useState([]);

  const handleDelete = async () => {
    const destructuredID = Array.from(selectedStudents);
    try {
      await axios.delete(
        `https://attendance-backend-app.up.railway.app/students/${destructuredID}`
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
    setSelectedStudents(new Set());
    setStudentNames([]);
    setConfirmModalOpen(false);
  };

  const openDeleteModal = () => {
    if (selectedStudents.size === 0) {
      alert("No students selected for deletion.");
      return;
    }
    const names = students
      .filter((student) => selectedStudents.has(student.student_id))
      .map((student) => `${student.lname}, ${student.fname}`);
    setStudentNames(names);
    setConfirmModalOpen(true);
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
              className="uppercase flex items-center justify-center no-scrollbar"
            >
              <h1 className="text-3xl">
                {items.strand} {items.grade_level} -{" "}
                <span className="capitalize">{items.section_name}</span>
              </h1>
            </div>
          ))}
          {students.length === 0 ? (
            <div></div>
          ) : (
            <div className="h-full gap-2 flex flex-row justify-end items-center">
              <label htmlFor="all" className="text-sm">
                Select All
              </label>
              <input id="all" type="checkbox" onChange={handleSelectAll} />
              <button
                onClick={openDeleteModal}
                className="bg-red-500 p-2 rounded-lg text-white text-sm flex flex-row items-center gap-1"
              >
                <img src="./icons/delete-white.svg" alt="" className="h-6" />
                Delete
              </button>
              <ConfirmationModal
                isOpen={isConfirmModalOpen}
                onClose={() => setConfirmModalOpen(false)}
                onConfirm={handleDelete}
                studentNames={studentNames}
              />
            </div>
          )}
        </div>
        <div className="w-full h-[90%] overflow-y-scroll flex justify-center no-scrollbar">
          <table className="w-[80%] max-h-[20%] bg-white border-collapse no-scrollbar">
            <tbody>
              {students.length === 0 ? (
                <tr>
                  <td className="flex flex-col gap-y-3 justify-center items-center pt-6">
                    <img
                      src="./images/pana.svg"
                      alt=""
                      className="max-h-[200px]"
                    />
                    <p className="text-xl">No Students Listed</p>
                    <p className="text-gray-400">
                      Click the “add button" to add student
                    </p>
                  </td>
                </tr>
              ) : (
                students.map((list) => (
                  <tr key={list.id} className="border-b">
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedStudents.has(list.student_id)}
                        onChange={() => handleSelectStudent(list.student_id)}
                      />
                    </td>
                    <td className="p-4 flex justify-center">
                      <img
                        src="./images/profile.svg"
                        alt="Student Picture"
                        className="rounded-full h-[50px]"
                      />
                    </td>
                    <td className="p-4">{list.student_id}</td>
                    <td className="capitalize p-4 text-center">
                      {list.lname}, {list.fname} {list.mname}
                    </td>
                    <td className="p-4 text-end">
                      <button
                        onClick={() =>
                          navigate(
                            `../student_profile?id=${list.student_id}&section=${urlID}`
                          )
                        }
                        className="bg-[#002147] text-white p-3 text-sm rounded-lg"
                      >
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))
              )}
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
