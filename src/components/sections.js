import React from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
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
    const [modal, setModal] = useState(false);
    const [selectedSection, setSelectedSection] = useState(null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5500/section",
                );
                // const response = await axios.get(
                //   "https://attendance-backend-app.up.railway.app/section"
                // );
                setSections(response.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch section. Check Servers");
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    const openModal = (section) => {
        setSelectedSection(section);
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
        setSelectedSection(null);
    };

    const handleDelete = async (id) => {
        console.log(typeof id);

        if (!id) {
            setModal(false);
            return;
        }

        try {
            const res = await axios.delete(
                `https://attendance-backend-app.up.railway.app/section/${id}`,
            );
            setModal(false);
        } catch (error) {
            console.log(error);
        }
        // setModal(false);
        // setSelectedSection(null);
    };

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <p>{error}</p>;
    }

<<<<<<< HEAD
    return (
        <main className="grid grid-cols-3 p-6 gap-3 h-full">
            {sections.map((item) => (
                <button
                    key={item.id}
                    onClick={() =>
                        navigate(`../student_list?section=${item.id}`)
                    }
                    className="bg-[#002147] rounded-xl text-white text-center text-xl h-[150px]
=======
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6 gap-3 h-full">
      {sections.map((item) => (
        <button
          key={item.id}
          onClick={() => navigate(`../student_list?section=${item.id}`)}
          className="bg-[#002147] rounded-xl text-white text-center text-xl h-[150px]
>>>>>>> 56b8d80e0cce432b997aac787e120881f007a537
          hover:bg-white drop-shadow-2xl border hover:text-black relative"
                >
                    <div className="w-full flex justify-end absolute top-2 right-2">
                        <button
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
                        </button>
                    </div>
                    <p className="uppercase">
                        {item.strand} - {item.grade_level}
                    </p>
                    <p className="capitalize">{item.section_name}</p>
                </button>
            ))}

<<<<<<< HEAD
            {modal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 w-[30%] gap-y-6 rounded-xl flex flex-col justify-center items-center">
                        <p>
                            Are you sure you want to delete <br />
                            <span className=" font-bold text-xl">
                                {selectedSection?.strand}{" "}
                                {selectedSection?.grade_level} -{" "}
                                {selectedSection?.section_name} ?
                            </span>
                        </p>
                        <div className=" w-full flex flex-row justify-end">
                            <button
                                onClick={closeModal}
                                className="mt-4 px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    handleDelete(selectedSection.id);
                                }}
                                // onClick={handleDelete}
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
=======
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 w-[30%] gap-y-6 rounded-xl flex flex-col justify-center items-center">
            <p>
              Are you sure you want to delete <br />
              <span className=" font-bold text-xl uppercase">
                {selectedSection?.strand} {selectedSection?.grade_level} -{" "}
                {selectedSection?.section_name} ?
              </span>
            </p>
            <div className=" w-full flex flex-row justify-end">
              <button onClick={closeModal} className="mt-4 px-4 py-2 rounded">
                Cancel
              </button>
              <button
                onClick={() => {
                  handleDelete(selectedSection.id);
                }}
                // onClick={handleDelete}
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
>>>>>>> 56b8d80e0cce432b997aac787e120881f007a537
}
