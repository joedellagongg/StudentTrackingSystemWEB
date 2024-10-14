"use client";
import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import AddStudent from "@/app/(devs)/add_student/page";

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

    const openModal = () => setModal(true);
    const [modal, setModal] = useState(false);
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get(
                    "https://attendance-backend-app.up.railway.app/student_list",
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

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <main className=" w-full h-full p-4 rounded-2xl bg-[#ffffff] overflow-y-scroll no-scrollbar">
            <div className=" w-full h-full flex flex-col">
                <div className=" flex flex-row border-b pb-4 ">
                    <button onClick={() => navigate("../dashboard", "admin")}>
                        <img
                            src="./icons/back-icon.svg"
                            alt=""
                            className=" h-[50px]"
                        />
                    </button>

                    {section.map((items) => (
                        <div
                            key={items.id}
                            className=" w-full flex items-center justify-center no-scrollbar "
                        >
                            <h1 className=" text-3xl">
                                {items.strand} {items.grade} - {items.section}
                            </h1>
                        </div>
                    ))}
                </div>
                <div className="w-full h-[90%] overflow-y-scroll flex justify-center no-scrollbar">
                    <table className="w-[80%] max-h-[20%] bg-white border-collapse no-scrollbar">
                        <tbody>
                            {students.map((list) => (
                                <tr key={list.id} className="border-b">
                                    <td className="p-4">
                                        <img
                                            src={`http://localhost:5500/${students.image_profile}/`}
                                            alt="Student Picture"
                                            className="h-[60px] rounded-full"
                                        />
                                    </td>
                                    <td className="p-4">{list.student_id}</td>
                                    <td className="p-4 text-center">
                                        {list.lname}, {list.fname} {list.mname}
                                    </td>
                                    <td className="p-4 text-end">
                                        <button
                                            onClick={() =>
                                                navigate(
                                                    "../student_profile",
                                                    "student_profile",
                                                )
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
                    onClick={openModal}
                    className=" absolute self-end bottom-8 right-8"
                >
                    <img src="./icons/add-icon.svg" className=" h-[80px]" />
                </button>

                {modal && <AddStudent closeModal={() => setModal(false)} />}
            </div>
        </main>
    );
}
