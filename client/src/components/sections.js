"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Loader from "@/components/loader";

export default function Section() {
  const router = useRouter();
  const navigate = (path) => {
    router.push(path);
  };

  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          "https://attendance-backend-app.up.railway.app/get_section"
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
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="grid grid-cols-3 p-6 gap-3 h-full">
      {sections.map((item) => (
        <button
          key={item.id}
          onClick={() => navigate(`../student_list?section=${item.id}`)}
          className="bg-[#002147] rounded-xl text-white text-center text-xl h-[150px] 
          hover:bg-white drop-shadow-2xl border hover:text-black"
        >
          <p className=" uppercase">
            {item.strand} - {item.grade_level}
          </p>
          <p className=" capitalize">{item.section_name}</p>
        </button>
      ))}
    </main>
  );
}
