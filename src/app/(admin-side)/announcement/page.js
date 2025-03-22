"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Loader from "@/components/loader";
import { Astloch } from "next/font/google";
import axiosInstance from "@/library/axios";
import Cookies from "js-cookie";

export default function Announcement() {
  const router = useRouter();
  const navigate = (path) => {
    router.push(path);
  };

  const token = Cookies.get("token");
  // console.log("Stored Token:", token);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [modal, setModal] = useState(false);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const [titleError, setTitleError] = useState("");
  const [dateError, setDateError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const openDeleteModal = (announcement) => {
    setSelectedAnnouncement(announcement);
    setDeleteModal(true);
  };
  const closeDeleteModal = () => {
    setDeleteModal(false);
    setSelectedAnnouncement(null);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const deleteEvent = async (id) => {
    try {
      const delResponse = await axiosInstance.delete(`/announcements/${id}`,{
        headers: { Authorization: `Bearer ${token}` },
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/announcements", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);

      setEvents(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTitleError("");
    setDateError("");
    setDescriptionError("");

    let valid = true;

    if (!title) {
      setTitleError("Title is required.");
      valid = false;
    }

    if (!date) {
      setDateError("Date is required.");
      valid = false;
    }

    if (!description) {
      setDescriptionError("Description is required.");
      valid = false;
    }

    if (!valid) return;

    try {
      const res = await axiosInstance.post("/announcements", {
        title,
        date,
        description,
      },{
        headers: { Authorization: `Bearer ${token}` },
      });
      closeModal();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="relative w-full h-full rounded-2xl overflow-y-scroll bg-white p-6 no-scrollbar">
      <div className=" gap-3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <div className="w-full h-full absolute z-50">
            <Loader />
          </div>
        ) : events.length === 0 ? (
          <div className=" absolute w-full h-full flex flex-col justify-center items-center">
            <Image
              width={0}
              height={0}
              src="/images/announcement.svg"
              alt="no announcement"
              className=" h-[50%] w-auto"
            />
            <h1>No Announcements</h1>
            <h3 className=" text-gray-400">
              Click the “add” button to add announcements
            </h3>
          </div>
        ) : (
          events.map((item) => (
            <div
              key={item.event_id}
              className="bg-[#002147] rounded-xl text-white text-center text-xl h-[150px] hover:bg-white drop-shadow-2xl border hover:text-black relative "
            >
              <button
                onClick={() =>
                  navigate(`../announcement_info?event=${item.event_id}`)
                }
                className="w-full h-full flex flex-col justify-center items-center"
              >
                <p className="uppercase">{item.title}</p>
                <p>{formatDate(item.date)}</p>
              </button>

              <div className="w-full flex justify-end absolute top-2 right-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openDeleteModal(item);
                  }}
                  className="bg-white p-1 rounded-full h-6 w-6 hover:bg-gray-400"
                >
                  <Image
                    width={0}
                    height={0}
                    src="./icons/delete.svg"
                    alt="Delete"
                    className=" h-15 w-auto"
                  />
                </button>
              </div>
            </div>
          ))
        )}

        {deleteModal && selectedAnnouncement && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className=" w-[80%] md:w-[60%] lg:w-[50%] lg:h-[50%] bg-white rounded-xl flex flex-col justify-center items-center p-6">
              <div className="w-full h-[10%]" />
              <div className="w-full h-[70%] flex flex-col justify-center items-center text-center gap-y-4">
                <p className=" text-sm md:text-xl font-semi-bold">
                  Are you sure you want to delete this announcement?
                </p>
                <p className=" text-lg md:text-xl">
                  <strong className="font-bold uppercase">
                    {selectedAnnouncement.title}
                  </strong>
                  <br />
                  <strong className="font-bold">
                    {formatDate(selectedAnnouncement.date)}
                  </strong>
                </p>
              </div>
              <div className="w-full h-[20%] flex flex-row justify-end items-center px-6 gap-x-2">
                <button onClick={closeDeleteModal} className="p-4">
                  Cancel
                </button>
                <button
                  onClick={() => deleteEvent(selectedAnnouncement.event_id)}
                  className="bg-red-500 rounded-xl p-2 md:p-4 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {modal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <form className=" lg:h-[90%] w-[80%] bg-white rounded-xl">
              <div className="h-[10%] p-4 w-full flex flex-row justify-between items-center">
                <p className="text-[#002147] text-lg md:text-xl font-semibold">
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

              <div className="h-[80%] w-full overflow-y-scroll p-4 flex flex-col gap-y-4">
                <div className="w-full h-[20%] flex flex-col md:flex-row justify-between gap-y-2 md:gap-x-4">
                  <div className="flex flex-col w-full md:w-[50%]">
                    <label
                      htmlFor="title"
                      className=" text-sm md:text-xl font-semibold"
                    >
                      Title:
                    </label>
                    <input
                      type="text"
                      placeholder="Announcement's Title"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className=" text-sm md:text-lg h-12 lg:h-full rounded-lg p-2 border border-black outline-none"
                    />
                    {titleError && (
                      <p className="text-red-500 text-sm mt-1">{titleError}</p>
                    )}
                  </div>

                  <div className="flex flex-col w-full md:w-[50%]">
                    <label
                      htmlFor="date"
                      className=" text-sm md:text-xl font-semibold"
                    >
                      Date:
                    </label>
                    <input
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className=" w-full text-sm md:text-lg h-12 lg:h-full rounded-lg p-2 border border-black outline-none"
                    />
                    {dateError && (
                      <p className="text-red-500 text-sm mt-1">{dateError}</p>
                    )}
                  </div>
                </div>

                <div className="w-full h-[80%] flex flex-col">
                  <label
                    htmlFor="description"
                    className=" text-sm md:text-xl font-semibold"
                  >
                    Description:
                  </label>
                  <textarea
                    type="text"
                    placeholder="Announcement's Description"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className=" text-sm lg:text-lg h-44 lg:h-full rounded-lg p-2 border border-black outline-none text-center"
                  />
                  {descriptionError && (
                    <p className="text-red-500 text-sm mt-1">
                      {descriptionError}
                    </p>
                  )}
                </div>
              </div>

              <div className="h-[10%] w-full flex flex-row justify-end items-center pr-4 pb-4 gap-2">
                <button
                  type="button"
                  className="p-4 rounded-xl"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-[#002147] text-white h-10 lg:h-full w-[20%] lg:w-[10%] rounded-xl"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        )}

        <button onClick={openModal} className="fixed self-end bottom-8 right-8">
          <Image
            width={0}
            height={0}
            src="./icons/add-icon.svg"
            className="h-[80px] w-auto"
            alt="add"
          />
        </button>
      </div>
    </main>
  );
}
