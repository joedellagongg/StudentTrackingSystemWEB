"use client";
import React, { useState } from "react";
import axios from "axios";

export default function Add_section({ closeModal }) {
  const [strand, setStrand] = useState("");
  const [level, setLevel] = useState("");
  const [section, setSection] = useState("");
  const [error, setError] = useState({ strand: "", level: "", section: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({ strand: "", level: "", section: "" });

    let hasError = false;
    const newError = { strand: "", level: "", section: "" };

    if (!strand) {
      newError.strand = "Strand is required.";
      hasError = true;
    }
    if (!level) {
      newError.level = "Grade Level is required.";
      hasError = true;
    }
    if (!section) {
      newError.section = "Section Name is required.";
      hasError = true;
    }

    if (hasError) {
      setError(newError);
      return;
    }

    try {
      // const response = await axios.post(
      //     "http://localhost:5500/add_section",
      //     { strand, level, section },
      // );
      const response = await axios.post(
        "https://attendance-backend-app.up.railway.app/section",
        { strand, level, section }
      );

      console.log("Response from server:", response.data);
      closeModal();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col gap-4 h-[50%] w-[90%] text-sm">
      <div className=" w-full">
        <p className="font-bold">Strand:</p>
        {/* <input
          type="text"
          placeholder="Input Strand"
          value={strand}
          onChange={(e) => setStrand(e.target.value)}
          className="border h-12 rounded-xl outline-0 p-4 w-full"
        /> */}
        <select
          value={strand}
          onChange={(e) => setStrand(e.target.value)}
          className="border h-12 rounded-xl pl-4 w-full text-gray-400"
        >
          <option value="">Select Strand</option>
          <option value="abm">ABM</option>
          <option value="humss">HUMSS</option>
          <option value="stem">STEM</option>
          <option value="tvl">TVL</option>
        </select>
        {error.strand && <p className="text-red-500">{error.strand}</p>}{" "}
      </div>

      <div className=" w-full">
        <p className="font-bold">Grade Level:</p>
        {/* <input
                    type="number"
                    placeholder="Input Grade Level"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="border h-12 rounded-xl outline-0 p-4 w-full"
                /> */}
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className=" border h-12 rounded-xl pl-4 w-full text-gray-400"
        >
          <option value="">Select Grade Level</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        {error.level && <p className="text-red-500">{error.level}</p>}{" "}
      </div>

      <div className=" w-full">
        <p className="font-bold">Section:</p>
        <input
          type="text"
          placeholder="Input Section Name"
          value={section}
          onChange={(e) => setSection(e.target.value)}
          className="border h-12 rounded-xl outline-0 p-4 w-full"
        />
        {error.section && <p className="text-red-500">{error.section}</p>}{" "}
      </div>

      <div className="mt-4 flex items-end justify-end gap-2 w-full">
        <button
          type="button"
          onClick={closeModal}
          className="text-sm text-black bg-[#FFFFFF] drop-shadow-2xl border p-3 rounded-xl"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="text-sm p-3 rounded-xl bg-[#002147] text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
