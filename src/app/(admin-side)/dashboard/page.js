"use client";
import Section from "@/components/sections";
import Add_section from "@/components/modals";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "@/components/loader";

export default function Admin() {
    const [modal, setModal] = useState(false);
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    const fetchSections = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:5500/section");
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
        <main className="w-full h-full rounded-2xl overflow-x-scroll bg-[#ffffff]">
            <div className="relative w-full h-full flex flex-col">
                {loading ? (
                    <Loader />
                ) : sections.length === 0 ? (
                    <div className="w-full h-full flex flex-col justify-center items-center gap-y-2">
                        <img
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
                    <img
                        src="./icons/add-icon.svg"
                        className="h-[80px]"
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
        </main>
    );
}
