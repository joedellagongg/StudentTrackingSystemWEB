"use client";
import React from "react";
import { useState } from "react";

export default function Add_section() {
    const [strand, setStrand] = useState("");
    const [level, setLevel] = useState("");
    const [section, setSection] = useState("");

    const handleSubmit = async () => {
        console.log(strand, level, section);
    };

    return (
        <form className=" flex flex-col gap-2 w-[50%] text-sm">
            <p className=" font-bold">Strand:</p>

            <input
                type="text"
                placeholder="Input Strand"
                value={strand}
                onChange={(e) => setStrand(e.target.value)}
                className=" border h-12 rounded-xl outline-0 p-4"
            />
            <p className=" font-bold">Grade Level:</p>
            <input
                type="text"
                placeholder="Input Grade Level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className=" border h-12 rounded-xl outline-0 p-4"
            />
            <p className=" font-bold">Section:</p>
            <input
                type="text"
                placeholder="Input Section Name"
                value={section}
                onChange={(e) => setSection(e.target.value)}
                className=" border h-12 rounded-xl outline-0 p-4"
            />
            <div className=" mt-4 flex items-end justify-end gap-2 w-[50%]">
                <button className=" text-sm text-black bg-[#FFFFFF] drop-shadow-2xl border  p-3 rounded-xl">
                    Cancel
                </button>
                <button
                    onClick={handleSubmit}
                    className=" text-sm p-3 rounded-xl bg-[#002147] text-white"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}
