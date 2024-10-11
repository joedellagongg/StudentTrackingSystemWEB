"use client";
import Section from "@/components/sections";
import Add_section from "@/components/modals";
import { useState } from "react";

export default function Admin() {
    const [modal, setModal] = useState(false);
    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    return (
        <main className="w-full h-full rounded-2xl overflow-x-scroll bg-[#ffffff]">
            <div className="relative w-full h-full flex flex-col">
                <Section />
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
                    <div className="bg-white rounded-lg p-6 relative w-[50%] h-[50%] flex flex-col justify-center items-center">
                        <Add_section />
                    </div>
                </div>
            )}
        </main>
    );
}
