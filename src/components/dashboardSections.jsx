"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Section from "@/components/sections";
import Loader from "@/components/loader";
import Add_section from "@/components/modals";
import axiosInstance from "@/library/axios";

export default function DashboardSections() {
    const [modal, setModal] = useState(false);
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    const fetchSections = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.get("/section");
            setSections(response.data);
        } catch (err) {
            console.error(err);
            setError("Failed to fetch sections. Check Servers");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSections();
    }, []);

    return (
        <>
            <div className="relative w-full h-full flex flex-col">
                {loading ? (
                    <Loader />
                ) : sections.length === 0 ? (
                    <div className="w-full h-full flex flex-col justify-center items-center gap-y-2">
                        <Image
                            width={100}
                            src="./images/rafiki.svg"
                            alt="empty section"
                            className="max-h-[400px]"
                        />
                        <p className="text-xl">Empty Section</p>
                        <p className="text-gray-400">
                            Click the “add” button to add sections
                        </p>
                    </div>
                ) : (
                    <Section
                        sections={sections}
                        fetchSections={fetchSections}
                    />
                )}
                <button
                    onClick={openModal}
                    className="fixed self-end bottom-8 right-8"
                >
                    <Image
                        width={0}
                        height={0}
                        src="./icons/add-icon.svg"
                        className="h-[80px] w-auto"
                        alt="Add"
                    />
                </button>
            </div>
            {modal && (
                <div className="z-50 bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 relative w-[40%] flex flex-col justify-center items-center">
                        <Add_section
                            closeModal={closeModal}
                            onSectionAdded={fetchSections}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
