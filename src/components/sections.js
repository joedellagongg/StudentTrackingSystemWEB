import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Loader from "@/components/loader";
import axiosInstance from "@/library/axios";

export default function Section({ sections, fetchSections }) {
    const router = useRouter();
    const navigate = (path) => {
        router.push(path);
    };

    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const [selectedSection, setSelectedSection] = useState(null);

    const openModal = (section) => {
        setSelectedSection(section);
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
        setSelectedSection(null);
    };

    const handleDelete = async (id) => {
        if (!id) {
            setModal(false);
            return;
        }

        setLoading(true);
        try {
            await axiosInstance.delete(`/section/${id}`);
            window.location.reload();
            closeModal();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6 gap-3 h-full justify-center">
            {sections.map((item) => (
                <button
                    key={item.id}
                    onClick={() => navigate(`/student_list?section=${item.id}`)}
                    className="bg-[#002147] rounded-xl text-white text-center text-xl h-[150px] hover:bg-white drop-shadow-2xl border hover:text-black relative"
                >
                    <div className="w-full flex justify-end absolute top-2 right-2">
                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                                openModal(item);
                            }}
                        >
                            <img
                                src="./icons/delete.svg"
                                alt="Delete"
                                className="bg-white p-1 rounded-full h-6 w-6 hover:bg-gray-400"
                            />
                        </div>
                    </div>
                    <p className="uppercase">
                        {item.strand} - {item.grade_level}
                    </p>
                    <p className="capitalize">{item.section_name}</p>
                </button>
            ))}

            {modal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 w-[30%] gap-y-6 rounded-xl flex flex-col justify-center items-center">
                        <p>
                            Are you sure you want to delete <br />
                            <span className="font-bold text-xl uppercase">
                                {selectedSection?.strand}{" "}
                                {selectedSection?.grade_level} -{" "}
                                {selectedSection?.section_name} ?
                            </span>
                        </p>
                        <div className="w-full flex flex-row justify-end">
                            <button
                                onClick={closeModal}
                                className="mt-4 px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => handleDelete(selectedSection.id)}
                                className="mt-4 ml-2 bg-red-500 text-white px-4 py-2 rounded-xl"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
