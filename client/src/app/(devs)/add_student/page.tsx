"use client";

import React from "react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function studentRegistration() {
    const [NFCid, setNFCid] = useState("");
    const [lastName, setlastName] = useState("");
    const [firstName, setfirstName] = useState("");
    const [middleName, setmiddleName] = useState("");
    const [Age, setAge] = useState("");
    const [Birthday, setBirthday] = useState("");
    const [Gender, setGender] = useState("");
    const [Address, setAddress] = useState("");
    const [emailAddress, setemailAddress] = useState("");
    const [fatherName, setfatherName] = useState("");
    const [motherName, setmotherName] = useState("");
    const [guardianName, setguardianName] = useState("");
    const [studentContact, setstudentContact] = useState("");
    const [fatherContact, setfatherContact] = useState("");
    const [motherContact, setmotherContact] = useState("");
    const [guardianContact, setguardianContact] = useState("");

    const timeLogger = {};

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5500/development", {
                NFCid,
                lastName,
                firstName,
                middleName,
                Age,
                Birthday,
                Gender,
                Address,
                emailAddress,
                fatherName,
                motherName,
                guardianName,
                studentContact,
                fatherContact,
                motherContact,
                guardianContact,
            });

            // if (res.data.authenticated) {
            //     // router.push("/student_info");
            //     console.clear();
            // } else {
            //     console.log("😒😒😒");
            // }
        } catch (err) {
            console.error(err);
            console.log("😒😒😒");
            // alert("Login failed. Please check your credentials.");
        }
    };

    return (
        <main className="w-full h-full flex justify-center items-center">
            {/* <div className="h-96 w-10 bg-red-500"></div> */}
            <div className="bg-slate-300 flex justify-center items-center w-[80%] p-1 m-20">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="NFC ID Number"
                        name="last_name"
                        value={NFCid}
                        onChange={(e) => setNFCid(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Middle Name"
                        name="middle_name"
                        value={middleName}
                        onChange={(e) => setmiddleName(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Age"
                        name="age"
                        value={Age}
                        onChange={(e) => setAge(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="date"
                        placeholder="Birthday"
                        name="birthday"
                        value={Birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Gender"
                        name="gender"
                        value={Gender}
                        onChange={(e) => setGender(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        name="address"
                        value={Address}
                        onChange={(e) => setAddress(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Email Address"
                        name="email"
                        value={emailAddress}
                        onChange={(e) => setemailAddress(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Father Maiden Name"
                        name="father_name"
                        value={fatherName}
                        onChange={(e) => setfatherName(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Mother Maiden Name"
                        name="mother_name"
                        value={motherName}
                        onChange={(e) => setmotherName(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Contact Number"
                        name="contact_num"
                        value={studentContact}
                        onChange={(e) => setstudentContact(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Guardian"
                        name="guardian"
                        value={guardianName}
                        onChange={(e) => setguardianName(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Guardian's Contact Number"
                        name="guardian_contact"
                        value={guardianContact}
                        onChange={(e) => setguardianContact(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Mother's Contact Number"
                        name="mother_contact"
                        value={motherContact}
                        onChange={(e) => setmotherContact(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Father's Contact Number"
                        name="father_contact"
                        value={fatherContact}
                        onChange={(e) => setfatherContact(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />

                    <button className=" bg-[#002147] m-5 h-10 w-20 rounded-xl">
                        <p className="text-white">Submit</p>
                    </button>
                </form>
            </div>{" "}
        </main>
    );
}
