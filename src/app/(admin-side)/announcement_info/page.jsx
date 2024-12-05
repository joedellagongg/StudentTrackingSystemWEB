"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axiosInstance from "@/library/axios";
import { Suspense } from "react";

function AnnouncementInfo() {
    const [loading, setLoading] = useState(false);
    const [events, setEvents] = useState([]);

    const searchParams = useSearchParams();
    const urlID = searchParams.get("event");
    console.log("Announcement ID:", urlID);

    const router = useRouter();
    const navigate = (path) => {
        router.push(path);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { month: "short", day: "numeric", year: "numeric" };
        return date.toLocaleDateString("en-US", options);
    };

    const fetchEvents = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.get(
                `/announcements/fetch/${urlID}`,
            );
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

    return (
        <main className="w-full h-full rounded-2xl overflow-x-scroll bg-white p-6">
            <div className=" w-full">
                <button onClick={() => navigate("../announcement")}>
                    <Image
                        width={0}
                        height={0}
                        src="./icons/back-icon.svg"
                        alt="back"
                        className="h-[50px] w-auto"
                    />
                </button>
            </div>
            {events.map((item) => (
                <div key={item.event_id} className="p-6">
                    <h1 className=" uppercase text-3xl font-bold">
                        {item.title}
                    </h1>
                    <h1 className=" text-xl font-semibold">
                        {formatDate(item.date)}
                    </h1>
                    {/* <h1 className=" text-xl font-semibold"> {formatDate(item.date)}</h1> */}
                    <div className=" mt-6">
                        <p className="">{item.description}</p>
                    </div>
                </div>
            ))}
        </main>
    );
}

export default function AnnouncementByID() {
    return (
        <Suspense fallback={<div>Loading announcement...</div>}>
            <AnnouncementInfo />
        </Suspense>
    );
}
