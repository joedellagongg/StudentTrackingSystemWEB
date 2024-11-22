"use client";
import React, { use, useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from "@/library/axios";

export default function TopUp_Form({ onClose, amount }) {
    const [studentID, setstudentID] = useState("");
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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

    // 0009057977
    // 0009057977

    useEffect(() => {
        if (studentID) {
            const timer = setTimeout(() => {
                fetchStudents(studentID);
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [studentID]);

    const handleSubmit = async () => {
        const description = `You just Top-up your Account Amount: ₱${amount}`;
        const admin_id = 11; // to follow, basta pag nag log ang user dapat naka aassign na sa admin to.
        const { student_id } = students[0];
        try {
            const res = await axiosInstance.post(`/paymentIntent`, {
                student_id,
                admin_id,
                amount,
                description,
            });
            // const res = await axios.post(
            //     `https://attendance-backend-app.up.railway.app/paymentIntent`,
            //     { student_id, admin_id, amount, description },
            // );
            onClose();
            console.log("ID", res.data.student_id);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="h-[80%] w-[70%] bg-white p-4 rounded-xl">
                <div className=" flex flex-row justify-between items-center">
                    <h1 className="text-xl font-bold">Top Up to:</h1>
                    <button
                        onClick={onClose}
                        className=" font-bold text-2xl text-[#002147]"
                    >
                        X
                    </button>
                </div>
                <div className="w-full h-[95%] flex flex-col justify-center items-center">
                    <div className="w-[70%] flex flex-col gap-2">
                        <label htmlFor="nfc">NFC ID:</label>
                        <input
                            id="nfc"
                            type="password"
                            value={studentID}
                            onChange={(e) => setstudentID(e.target.value)}
                            placeholder=" Tap NFC ID"
                            className=" text-center outline-none pl-4 pr-4 border border-[#002147] w-full h-12 rounded-lg"
                        />
                    </div>

                    {studentID && students.length > 0
                        ? students.map((item) => (
                              <div
                                  key={item.student_id}
                                  className="w-[70%] mt-4 text-xl"
                              >
                                  <p className="">
                                      Student ID:{" "}
                                      <span className=" font-bold">
                                          {item.username}
                                      </span>
                                  </p>
                                  <p className="">
                                      Name:{" "}
                                      <span className=" font-bold">
                                          {item.lname}, {item.fname}{" "}
                                          {item.mname}{" "}
                                      </span>
                                  </p>
                                  <p className="">
                                      Grade & Section:{" "}
                                      <span className=" font-bold">
                                          <span className=" uppercase">
                                              {item.strand} {item.grade_level} -{" "}
                                              {item.section_name}
                                          </span>
                                          <span className=" capitalize">
                                              {item.section}
                                          </span>{" "}
                                      </span>
                                  </p>
                                  <p className=" text-3xl">
                                      Total Amount:{" "}
                                      <span className=" font-bold">
                                          ₱ {amount}
                                      </span>
                                  </p>
                                  <br />
                              </div>
                          ))
                        : studentID && (
                              <p className="w-[70%] text-center text-red-400 mt-2">
                                  No user found with this NFC ID.
                              </p>
                          )}

                    {students.length > 0 && (
                        <div className="w-[70%] flex flex-row gap-4 justify-center mt-4">
                            <button
                                onClick={onClose}
                                className="w-[45%] bg-gray-400 rounded-xl p-2 text-xl"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="w-[45%] bg-[#002147] rounded-xl p-2 text-xl text-white"
                            >
                                Confirm
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
