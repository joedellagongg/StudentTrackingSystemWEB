"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Announcement() {
    const router = useRouter();
    const navigate = (path) => {
        router.push(path);
    };

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [modal, setModal] = useState(false);

    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);

    const fetchEvents = async () => {
        try {
            const response = await axios.get(
                "https://attendance-backend-app.up.railway.app/announcements",
            );
            console.log(response.data);

            setEvents(response.data);
        } catch (err) {
            console.error(err);
            setError("Failed to fetch sections. Check Servers");
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    // const announcement_info = [
    //     {
    //         id: 1,
    //         date: "mm/dd/yyyy",
    //         title: "Class Suspension",
    //         description:
    //             "due to the impact of Super Typhoon Leon (Kong-rey) or recovery from Severe Tropical Storm Kristine (Trami) blablabla...",
    //     },
    // ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "https://attendance-backend-app.up.railway.app/announcements",
                {
                    title,
                    date,
                    description,
                },
            );
            closeModal();
        } catch (error) {
            console.log(error);
        }
        console.log(title, date, description);
    };

    return (
        <main className="w-full h-full rounded-2xl overflow-x-scroll bg-white grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-3">
            {events.map((item) => (
                <div className="bg-[#002147] rounded-xl text-white text-center text-xl h-[150px] hover:bg-white drop-shadow-2xl border hover:text-black relative">
                    <button
                        onClick={() => navigate("../announcement_info")}
                        className="w-full h-full flex flex-col justify-center items-center"
                    >
                        <p className=" uppercase">{item.title}</p>
                        <p>{item.date}</p>
                    </button>

                    <div className="w-full flex justify-end absolute top-2 right-2">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                            className="bg-white p-1 rounded-full h-6 w-6 hover:bg-gray-400"
                        >
                            <img src="./icons/delete.svg" alt="Delete" />
                        </button>
                    </div>
                </div>
            ))}

            {modal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <form className="h-[90%] w-[80%] bg-white rounded-xl">
                        <div className="h-[10%] p-4 w-full flex flex-row justify-between items-center">
                            <p className="text-[#002147] text-xl font-semibold">
                                Create Announcement
                            </p>
                            <button
                                type="button"
                                onClick={closeModal}
                                className="text-[#002147] font-bold text-2xl"
                            >
                                X
                            </button>
                        </div>

                        <div className="h-[80%] w-full overflow-x-scroll p-4 flex flex-col gap-y-4">
                            <div className="w-full h-[20%] flex flex-row justify-between gap-x-4">
                                <div className="flex flex-col w-[50%]">
                                    <label
                                        htmlFor="title"
                                        className="text-xl font-semibold"
                                    >
                                        Title:
                                    </label>
                                    <textarea
                                        placeholder="Announcement's Title"
                                        id="title"
                                        value={title}
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                        className="text-lg h-full rounded-lg p-2 border border-black outline-none"
                                    />
                                </div>

                                <div className="flex flex-col w-[50%]">
                                    <label
                                        htmlFor="date"
                                        className="text-xl font-semibold"
                                    >
                                        Date:
                                    </label>
                                    <input
                                        id="date"
                                        type="date"
                                        value={date}
                                        onChange={(e) =>
                                            setDate(e.target.value)
                                        }
                                        className="text-lg h-full rounded-lg p-2 border border-black outline-none"
                                    />
                                </div>
                            </div>

                            <div className="w-full h-[80%] flex flex-col">
                                <label
                                    htmlFor="description"
                                    className="text-xl font-semibold"
                                >
                                    Description:
                                </label>
                                <textarea
                                    placeholder="Announcement's Description"
                                    id="description"
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                    className="h-full rounded-lg p-2 border border-black outline-none"
                                />
                            </div>
                        </div>

                        <div className="h-[10%] w-full flex flex-row justify-end items-center pr-4 pb-4 gap-2">
                            <button
                                type="button"
                                // onClick={closeModal}
                                className="p-4 rounded-xl"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="bg-[#002147] text-white h-full w-[10%] rounded-xl"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <button
                onClick={openModal}
                className="absolute self-end bottom-8 right-8"
            >
                <img
                    src="./icons/add-icon.svg"
                    className="h-[80px]"
                    alt="add"
                />
            </button>
        </main>
    );
}
