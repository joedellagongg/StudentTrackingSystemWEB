"use client";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ImageComponent() {
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5500/get_section",
                );
                setSections(response.data);
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

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <main className="grid grid-cols-3 p-6 gap-3 h-full">
            {sections.map((item) => (
                <button
                    key={item.id}
                    onClick={() => navigate("../student_list", "student_list")}
                    className="bg-[#002147] rounded-xl text-white text-center text-xl h-[150px] 
      hover:bg-white drop-shadow-2xl border hover:text-black"
                >
                    <p>
                        {item.strand} - {item.grade_level}
                    </p>
                    <p>{item.section_name}</p>
                </button>
            ))}
        </main>
    );
}
