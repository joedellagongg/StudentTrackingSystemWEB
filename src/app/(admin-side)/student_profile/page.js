"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Loader from "@/components/loader";
import Modal from "@/components/edit";
import axiosInstance from "@/library/axios";
import Image from "next/image";

function Student_Profile() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlID = searchParams.get("id");
  const section = searchParams.get("section");

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axiosInstance.get(`/students/${urlID}`);
        // console.log(
        //   Array.isArray(response.data.students)
        //     ? response.data.students
        //     : [response.data.students]
        // );

        setStudents(
          Array.isArray(response.data.students)
            ? response.data.students
            : [response.data.students]
        );
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch section. Check Servers");
        setLoading(false);
      }
    };

    fetchStudents();
  }, [urlID]);

  const handleEditClick = (student) => {
    setCurrentStudent(student);
    setIsEditing(true);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="w-full h-full p-4 rounded-2xl bg-[#ffffff] overflow-y-scroll">
      {students.map((item) => (
        <div className="w-full h-full flex flex-col" key={item.user_id}>
          <div className="flex flex-row border-b md:pb-4 justify-between">
            <button
              onClick={() => router.push(`../student_list?section=${section}`)}
            >
              <Image
                width={0}
                height={0}
                src="./icons/back-icon.svg"
                alt="back"
                className="h-[40px] md:h-[50px] w-auto"
              />
            </button>
            <div className="capitalize flex flex-row gap-6 items-center">
              <div className=" text-center">
                <h1 className="capitalize text-sm md:text-2xl font-semibold">
                  {item.lname}, {item.fname} {item.mname}
                </h1>
                <p className="opacity-50 text-xs md:text-lg">
                  Student ID: {item.username}
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                onClick={() => handleEditClick(item)}
                className="bg-[#002147] p-2 text-xs md:text-lg rounded text-white"
              >
                Edit
              </button>
            </div>
          </div>
          <div className="w-full h-[90%] overflow-y-scroll">
            <div
              key={item.user_id}
              className=" w-full mt-4 flex flex-col gap-y-4"
            >
              <div className=" grid md:grid-cols-3 md:justify-around w-full gap-6">
                <div>
                  <p className=" text-sm">Last Name</p>
                  <p className=" capitalize text-gray-400 h-10 flex items-center bg-[#E5F1FF] rounded-xl p-3">
                    {item.lname}
                  </p>
                </div>
                <div>
                  <p className=" text-sm">First Name</p>
                  <p className=" capitalize text-gray-400 h-10 flex items-center bg-[#E5F1FF] rounded-xl p-3">
                    {item.fname}
                  </p>
                </div>
                <div>
                  <p className=" text-sm">Middle Name</p>
                  <p className=" capitalize text-gray-400 h-10 flex items-center bg-[#E5F1FF] rounded-xl p-3">
                    {item.mname}
                  </p>
                </div>
              </div>
              <div className=" grid md:grid-cols-2 md:justify-around w-full gap-6">
                <div>
                  <p className=" text-sm">Email Address</p>
                  <p className=" text-gray-400 h-10 flex items-center bg-[#E5F1FF] rounded-xl p-3">
                    {item.email}
                  </p>
                </div>
                <div>
                  <p className=" text-sm">Contact Number</p>
                  <p className=" text-gray-400 h-10 flex items-center bg-[#E5F1FF] rounded-xl p-3">
                    {item.studcontact}
                  </p>
                </div>
              </div>

              <div className=" grid md:grid-cols-3 md:justify-around w-full gap-6">
                <div>
                  <p className=" text-sm">Guardian Name</p>
                  <p className=" capitalize text-gray-400 h-10 flex items-center bg-[#E5F1FF] rounded-xl p-3">
                    {item.guardian}
                  </p>
                </div>
                <div>
                  <p className=" text-sm">Guardian's Contact Number</p>
                  <p className=" text-gray-400 h-10 flex items-center bg-[#E5F1FF] rounded-xl p-3">
                    {item.guardiancontact}
                  </p>
                </div>
                <div>
                  <p className=" text-sm">Guardian's Email</p>
                  <p className=" text-gray-400 h-10 flex items-center bg-[#E5F1FF] rounded-xl p-3">
                    {item.guardianEmail}
                  </p>
                </div>
              </div>
              <div className=" md:w-[60%]">
                <p className=" text-sm">NFC ID</p>
                <p className=" text-gray-400 h-10 flex items-center bg-[#E5F1FF] rounded-xl p-3">
                  {item.nfc_id}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Modal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        // onSave={handleSave}
        studentData={currentStudent}
        setStudentData={setCurrentStudent}
      />
    </main>
  );
}

export default function StudentInformation() {
  return (
    <Suspense>
      <Student_Profile />
    </Suspense>
  );
}
