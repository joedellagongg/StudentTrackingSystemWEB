"use client";
import React, { useEffect, useRef, useState } from "react";
import axiosInstance from "@/library/axios";
import Success from "@/components/success";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TopUp_Form({ onClose, amount }) {
  const [studentID, setStudentID] = useState("");
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const nfcInputRef = useRef(null);

  const fetchStudents = async (id) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/students/nfc/${id}`);
      setStudents(response.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch student details. Check the server.");
      setStudents([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (studentID) {
      const timer = setTimeout(() => {
        fetchStudents(studentID);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [studentID]);

  useEffect(() => {
    if (nfcInputRef.current) {
      nfcInputRef.current.focus();
    }
  }, []);

  const handleSubmit = async () => {
    const admin_id = 3;
    const role = "admin";
    const { username } = students[0];

    setIsSubmitting(true); 

    try {
      const res = await axiosInstance.post(`/paymentIntent`, {
        username,
        admin_id,
        role,
        amount,
      });

      if (res.status === 200) {
        toast.success("Top-up was successful!", {
          position: "top-right",
          autoClose: 1000,
        });

        setModal(true);

        setTimeout(() => {
          setModal(false);
          onClose();
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="fixed inset-0 flex p-4 items-center justify-center bg-black bg-opacity-50">
      <div className="h-[60%] md:h-[70%] lg:h-[80%] w-full lg:w-[70%] bg-white p-4 rounded-xl">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-xl font-bold">Top Up to:</h1>
          <button
            onClick={onClose}
            className="font-bold text-2xl text-[#002147]"
          >
            X
          </button>
        </div>
        <div className="w-full h-[95%] flex flex-col justify-center items-center">
          <div className="w-full md:w-[80%] lg:w-[70%] flex flex-col gap-2">
            {!students.length && (
              <>
                <label htmlFor="nfc">NFC ID:</label>
                <input
                  id="nfc"
                  ref={nfcInputRef}
                  type="password"
                  value={studentID}
                  onChange={(e) => setStudentID(e.target.value)}
                  placeholder=" Tap NFC ID"
                  className="text-center outline-none pl-4 pr-4 border border-[#002147] w-full h-16 md:h-24 lg:h-28 rounded-lg"
                />
              </>
            )}

            {studentID && students.length > 0
              ? students.map((item) => (
                  <div key={item.user_id} className="w-full mt-4 text-[2vw]">
                    <p>
                      Student ID:{" "}
                      <span className="font-bold">{item.username}</span>
                    </p>
                    <p>
                      Name:{" "}
                      <span className="font-bold">
                        {item.lname}, {item.fname} {item.mname}
                      </span>
                    </p>
                    <p>
                      Grade & Section:{" "}
                      <span className="font-bold">
                        <span className="uppercase">
                          {item.strand} {item.grade_level} - {item.section_name}
                        </span>
                      </span>
                    </p>
                    <p className="text-lg md:text-3xl">
                      Total Amount:{" "}
                      <span className="font-bold">₱ {amount}</span>
                    </p>
                    <br />
                  </div>
                ))
              : studentID && (
                  <p className="w-full text-sm text-center text-red-400 mt-2">
                    No user found with this NFC ID.
                  </p>
                )}

            {students.length > 0 && (
              <div className="w-full flex flex-row gap-4 justify-center mt-4">
                <button
                  onClick={onClose}
                  className="w-[50%] bg-gray-400 rounded-xl p-2 text-xl"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="w-[50%] bg-[#002147] rounded-xl p-2 text-xl text-white"
                  disabled={isSubmitting || modal}
                >
                  {isSubmitting ? "Processing..." : "Confirm"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {modal && <Success />}
    </main>
  );
}
