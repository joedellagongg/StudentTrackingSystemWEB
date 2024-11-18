"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function AnnouncementInfo() {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);

  const searchParams = useSearchParams();
  const urlID = searchParams.get("event");
  console.log(urlID);
  const router = useRouter();
  const navigate = (path) => {
    router.push(path);
  };

  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   const options = { month: "short", day: "numeric", year: "numeric" };
  //   return date.toLocaleDateString("en-US", options);
  // };

  const fetchEvents = async () => {
    setLoading(true);
    try {
      // const response = await axios.get(
      //     `http://localhost:5500/announcements/${urlID}`,
      // );
      const response = await axios.get(
        `https://attendance-backend-app.up.railway.app/announcements/fetch/${urlID}`
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

  // const events = [
  //     {
  //         id: 1,
  //         date: "mm/dd/yyyy",
  //         title: "Class Suspension",
  //         description:
  //             "due to the impact of Super Typhoon Leon (Kong-rey) or recovery from Severe Tropical Storm Kristine (Trami) blablabla... due to the impact of Super Typhoon Leon (Kong-rey) or recovery from Severe Tropical Storm Kristine (Trami) blablabla... due to the impact of Super Typhoon Leon (Kong-rey) or recovery from Severe Tropical Storm Kristine (Trami) blablabla... due to the impact of Super Typhoon Leon (Kong-rey) or recovery from Severe Tropical Storm Kristine (Trami) blablabla... due to the impact of Super Typhoon Leon (Kong-rey) or recovery from Severe Tropical Storm Kristine (Trami) blablabla...",
  //     },
  // ];

  return (
    <main className="w-full h-full rounded-2xl overflow-x-scroll bg-white p-6">
      <div className=" w-full">
        <button onClick={() => navigate("../announcement")}>
          <img src="./icons/back-icon.svg" alt="back" className="h-[50px]" />
        </button>
      </div>
      {events.map((item) => (
        <div key={item.event_id} className=" mt-6 p-6">
          <h1 className=" uppercase text-3xl font-bold">{item.title}</h1>
          <h1 className=" text-xl font-semibold">{item.date}</h1>
          {/* <h1 className=" text-xl font-semibold"> {formatDate(item.date)}</h1> */}
          <div className=" mt-6">
            <p className="">{item.description}</p>
          </div>
        </div>
      ))}
    </main>
  );
}
