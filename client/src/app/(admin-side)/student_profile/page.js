"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import student_info from "@/components/student_info";
import StudInfo from "@/components/info_layout";
import { useEffect, useState } from "react";
// import { URLSearchParams } from "url";
import { useSearchParams } from "next/navigation";
import Loader from "@/components/loader";

export default function Student_Profile() {
    const router = useRouter();

    const navigate = (path) => {
        router.push(path);
    };

    const searchParams = useSearchParams();
    let urlID = searchParams.get("id");
    let section = searchParams.get("section");
    // console.log mo lang ang params

    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                // const response = await axios.get(
                //     `http://localhost:5500/students/${urlID}`,
                // );
                const response = await axios.get(
                    `https://attendance-backend-app.up.railway.app/students/${urlID}`,
                );
                setStudents(response.data);
                console.log(response.data);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setError("Failed to fetch section. Check Servers");
                console.error(err);
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

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
        <main className=" w-full h-full p-4 rounded-2xl bg-[#ffffff] overflow-y-scroll">
            {students.map((item) => (
                <div className=" w-full h-full flex flex-col">
                    <div className=" flex flex-row border-b pb-4 justify-between">
                        <button
                            onClick={() =>
                                navigate(
                                    `../student_list?section=${section}`,
                                    "student_list",
                                )
                            }
                        >
                            <img
                                src="./icons/back-icon.svg"
                                alt=""
                                className=" h-[50px]"
                            />
                        </button>
                        <div
                            key={item.id}
                            className=" capitalize flex flex-row gap-6 items-center"
                        >
                            <div>
                                <img
                                    // src={student.pic}
                                    alt=""
                                    className=" h-20"
                                />
                            </div>
                            <div>
                                <h1 className=" capitalize text-xl font-semibold">
                                    {item.lname}, {item.fname} {item.mname}
                                </h1>
                                <p className=" opacity-50">
                                    Student ID: {item.username}
                                </p>
                            </div>
                        </div>
                        <div className=" flex justify-center items-center">
                            <button className=" bg-[#002147] flex flex-row justify-center items-center p-2 pl-4 pr-4 rounded text-white">
                                Edit
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-[90%] overflow-y-scroll flex justify-center">
                        <div
                            key={item.student_id}
                            className=" w-full mt-4 flex flex-col gap-y-4"
                        >
                            <div className=" grid grid-cols-3 justify-around w-full gap-6">
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
                            <div className=" grid grid-cols-3 justify-around w-full gap-6">
                                <div>
                                    <p className=" text-sm">Age</p>
                                    <p className=" text-gray-400 h-10 flex items-center bg-[#E5F1FF] rounded-xl p-3">
                                        {item.age}
                                    </p>
                                </div>
                                <div>
                                    <p className=" text-sm">Birthday</p>
                                    <p className=" text-gray-400 h-10 flex items-center bg-[#E5F1FF] rounded-xl p-3">
                                        {formatDate(item.birthday)}
                                    </p>
                                </div>
                                <div>
                                    <p className=" text-sm">Gender</p>
                                    <p className=" text-gray-400 h-10 flex items-center bg-[#E5F1FF] rounded-xl p-3">
                                        {item.gender}
                                    </p>
                                </div>
                            </div>
                            <div className=" grid grid-cols-2 justify-around w-full gap-6">
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
                            <div className=" grid grid-cols-2 justify-around w-full gap-6">
                                <div>
                                    <p className=" text-sm">Mother</p>
                                    <p className=" capitalize text-gray-400 h-10 flex items-center bg-[#E5F1FF] rounded-xl p-3">
                                        {item.mother}
                                    </p>
                                </div>
                                <div>
                                    <p className=" text-sm">Contact Number</p>
                                    <p className=" text-gray-400 h-10 flex items-center bg-[#E5F1FF] rounded-xl p-3">
                                        {item.mothercontact}
                                    </p>
                                </div>
                            </div>
                            <div className=" grid grid-cols-2 justify-around w-full gap-6">
                                <div>
                                    <p className=" text-sm">Father</p>
                                    <p className=" capitalize text-gray-400 h-10 flex items-center bg-[#E5F1FF] rounded-xl p-3">
                                        {item.father}
                                    </p>
                                </div>
                                <div>
                                    <p className=" text-sm">Contact Number</p>
                                    <p className=" text-gray-400 h-10 flex items-center bg-[#E5F1FF] rounded-xl p-3">
                                        {item.fathercontact}
                                    </p>
                                </div>
                            </div>
                            <div className=" grid grid-cols-2 justify-around w-full gap-6">
                                <div>
                                    <p className=" text-sm">Guardian</p>
                                    <p className=" capitalize text-gray-400 h-10 flex items-center bg-[#E5F1FF] rounded-xl p-3">
                                        {item.guardian}
                                    </p>
                                </div>
                                <div>
                                    <p className=" text-sm">Contact Number</p>
                                    <p className=" text-gray-400 h-10 flex items-center bg-[#E5F1FF] rounded-xl p-3">
                                        {item.guardiancontact}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </main>
    );
}
