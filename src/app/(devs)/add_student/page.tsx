"use client";
import React, { useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

interface Errors {
    NFCid?: string;
    lastName?: string;
    firstName?: string;
    middleName?: string;
    Age?: string;
    Birthday?: string;
    Gender?: string;
    Address?: string;
    emailAddress?: string;
    fatherName?: string;
    motherName?: string;
    guardianName?: string;
    studentContact?: string;
    fatherContact?: string;
    motherContact?: string;
    guardianContact?: string;
}

export default function AddStudent({ closeModal }) {
    const [NFCid, setNFCid] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [Age, setAge] = useState("");
    const [Birthday, setBirthday] = useState("");
    const [Gender, setGender] = useState("");
    const [Address, setAddress] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [motherName, setMotherName] = useState("");
    const [guardianName, setGuardianName] = useState("");
    const [studentContact, setStudentContact] = useState("");
    const [fatherContact, setFatherContact] = useState("");
    const [motherContact, setMotherContact] = useState("");
    const [guardianContact, setGuardianContact] = useState("");

    const [errors, setErrors] = useState<Errors>({});

    const crypto = require("crypto");

    function generateRandomNumberString(length) {
        let result = "";
        while (result.length < length) {
            const randomDigit = crypto.randomBytes(1)[0] % 10;
            result += randomDigit;
        }
        return result;
    }

    const currentYear = new Date().getFullYear().toString().slice(-2);
    const uname = currentYear + generateRandomNumberString(4);
    const upass = currentYear + generateRandomNumberString(4);
    const searchParams = useSearchParams();
    let urlID = searchParams.get("section");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors: Errors = {};

        if (!NFCid) newErrors.NFCid = "NFC ID Number is required.";
        if (!lastName) newErrors.lastName = "Last Name is required.";
        if (!firstName) newErrors.firstName = "First Name is required.";
        if (!middleName) newErrors.middleName = "Middle Name is required.";
        if (!Age) newErrors.Age = "Age is required.";
        if (!Birthday) newErrors.Birthday = "Birthday is required.";
        if (!Gender) newErrors.Gender = "Gender is required.";
        if (!Address) newErrors.Address = "Address is required.";
        if (!emailAddress)
            newErrors.emailAddress = "Email Address is required.";
        if (!fatherName) newErrors.fatherName = "Father's Name is required.";
        if (!motherName) newErrors.motherName = "Mother's Name is required.";
        if (!guardianName)
            newErrors.guardianName = "Guardian's Name is required.";
        if (!studentContact)
            newErrors.studentContact = "Contact Number is required.";
        if (!fatherContact)
            newErrors.fatherContact = "Father's Contact Number is required.";
        if (!motherContact)
            newErrors.motherContact = "Mother's Contact Number is required.";
        if (!guardianContact)
            newErrors.guardianContact =
                "Guardian's Contact Number is required.";

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        try {
            const res = await axios.post(
                "https://localhost:5500/students",
        //  const res = await axios.post(
        //      "https://attendance-backend-app.up.railway.app/students",
                {
                    NFCid,
                    uname,
                    upass,
                    urlID,
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
                },
            );

            if (res.data.authenticated) {
                closeModal();
                console.log("[ add_student: SUCCESS ]");
            } else {
                console.log("[ add_student: ERROR ]");
            }
        } catch (err) {
            console.error(err);
            console.log("[ add_student: ERROR  why]", err);
        }
    };

    return (
        <div className="z-50 bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 flex items-center justify-center">
            <div className="bg-white flex justify-center items-center h-[85%] p-4 rounded-xl">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-center items-center w-full h-full"
                >
                    <div className="grid grid-cols-2 overflow-y-scroll">
                        <div className="m-2 flex flex-col">
                            <label htmlFor="lname">Last Name</label>
                            <input
                                id="lname"
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="h-10 w-96 outline-0 border pl-6 rounded-xl capitalize"
                            />
                            {errors.lastName && (
                                <p className="text-red-500 text-sm">
                                    {errors.lastName}
                                </p>
                            )}
                        </div>

                        <div className="m-2 flex flex-col">
                            <label htmlFor="fname">First Name</label>
                            <input
                                id="fname"
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="h-10 w-96 outline-0 border pl-6 rounded-xl"
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-sm">
                                    {errors.firstName}
                                </p>
                            )}
                        </div>

                        <div className="m-2 flex flex-col">
                            <label htmlFor="mname">Middle Name</label>
                            <input
                                id="mname"
                                type="text"
                                placeholder="Middle Name"
                                value={middleName}
                                onChange={(e) => setMiddleName(e.target.value)}
                                className="h-10 w-96 outline-0 border pl-6 rounded-xl"
                            />
                            {errors.middleName && (
                                <p className="text-red-500 text-sm">
                                    {errors.middleName}
                                </p>
                            )}
                        </div>
                        <div className="m-2 flex flex-col">
                            <label htmlFor="age">Age</label>
                            <input
                                id="age"
                                type="number"
                                placeholder="Age"
                                value={Age}
                                onChange={(e) => setAge(e.target.value)}
                                className="h-10 w-96 outline-0 border pl-6 rounded-xl"
                            />
                            {errors.Age && (
                                <p className="text-red-500 text-sm">
                                    {errors.Age}
                                </p>
                            )}
                        </div>

                        <div className="m-2 flex flex-col">
                            <label htmlFor="bday">Birthday</label>
                            <input
                                id="bday"
                                type="date"
                                placeholder="Birthday"
                                value={Birthday}
                                onChange={(e) => setBirthday(e.target.value)}
                                className="h-10 w-96 outline-0 border pl-6 pr-6 rounded-xl text-gray-400"
                            />
                            {errors.Birthday && (
                                <p className="text-red-500 text-sm">
                                    {errors.Birthday}
                                </p>
                            )}
                        </div>

                        <div className="m-2 flex flex-col">
                            <label htmlFor="gender">Gender</label>
                            <select
                                id="gender"
                                value={Gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="h-10 w-96 outline-0 border pl-6 rounded-xl text-gray-400"
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            {errors.Gender && (
                                <p className="text-red-500 text-sm">
                                    {errors.Gender}
                                </p>
                            )}
                        </div>

                        <div className="m-2 flex flex-col">
                            <label htmlFor="add">Address</label>
                            <input
                                id="add"
                                type="text"
                                placeholder="Address"
                                value={Address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="h-10 w-96 outline-0 border pl-6 rounded-xl"
                            />
                            {errors.Address && (
                                <p className="text-red-500 text-sm">
                                    {errors.Address}
                                </p>
                            )}
                        </div>

                        <div className="m-2 flex flex-col">
                            <label htmlFor="num">Contact Number</label>
                            <input
                                id="num"
                                type="number"
                                placeholder="Contact Number"
                                value={studentContact}
                                onChange={(e) =>
                                    setStudentContact(e.target.value)
                                }
                                className="h-10 w-96 outline-0 border pl-6 rounded-xl"
                            />
                            {errors.studentContact && (
                                <p className="text-red-500 text-sm">
                                    {errors.studentContact}
                                </p>
                            )}
                        </div>

                        <div className="m-2 flex flex-col">
                            <label htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                type="text"
                                placeholder="Email Address"
                                value={emailAddress}
                                onChange={(e) =>
                                    setEmailAddress(e.target.value)
                                }
                                className="h-10 w-96 outline-0 border pl-6 rounded-xl"
                            />
                            {errors.emailAddress && (
                                <p className="text-red-500 text-sm">
                                    {errors.emailAddress}
                                </p>
                            )}
                        </div>

                        <div className="m-2 flex flex-col">
                            <label htmlFor="father">Father</label>
                            <input
                                id="father"
                                type="text"
                                placeholder="Father Name"
                                value={fatherName}
                                onChange={(e) => setFatherName(e.target.value)}
                                className="h-10 w-96 outline-0 border pl-6 rounded-xl"
                            />
                            {errors.fatherName && (
                                <p className="text-red-500 text-sm">
                                    {errors.fatherName}
                                </p>
                            )}
                        </div>

                        <div className="m-2 flex flex-col">
                            <label htmlFor="fathernum">Father's Contact</label>
                            <input
                                id="fathernum"
                                type="number"
                                placeholder="Father's Contact Number"
                                value={fatherContact}
                                onChange={(e) =>
                                    setFatherContact(e.target.value)
                                }
                                className="h-10 w-96 outline-0 border pl-6 rounded-xl"
                            />
                            {errors.fatherContact && (
                                <p className="text-red-500 text-sm">
                                    {errors.fatherContact}
                                </p>
                            )}
                        </div>

                        <div className="m-2 flex flex-col">
                            <label htmlFor="mother">Mother</label>
                            <input
                                id="mother"
                                type="text"
                                placeholder="Mother Name"
                                value={motherName}
                                onChange={(e) => setMotherName(e.target.value)}
                                className="h-10 w-96 outline-0 border pl-6 rounded-xl"
                            />
                            {errors.motherName && (
                                <p className="text-red-500 text-sm">
                                    {errors.motherName}
                                </p>
                            )}
                        </div>

                        <div className="m-2 flex flex-col">
                            <label htmlFor="mothernum">Mother's Contact</label>
                            <input
                                id="mothernum"
                                type="number"
                                placeholder="Mother's Contact Number"
                                value={motherContact}
                                onChange={(e) =>
                                    setMotherContact(e.target.value)
                                }
                                className="h-10 w-96 outline-0 border pl-6 rounded-xl"
                            />
                            {errors.motherContact && (
                                <p className="text-red-500 text-sm">
                                    {errors.motherContact}
                                </p>
                            )}
                        </div>

                        <div className="m-2 flex flex-col">
                            <label htmlFor="guardian">Guardian</label>
                            <input
                                id="guardian"
                                type="text"
                                placeholder="Guardian"
                                value={guardianName}
                                onChange={(e) =>
                                    setGuardianName(e.target.value)
                                }
                                className="h-10 w-96 outline-0 border pl-6 rounded-xl"
                            />
                            {errors.guardianName && (
                                <p className="text-red-500 text-sm">
                                    {errors.guardianName}
                                </p>
                            )}
                        </div>

                        <div className="m-2 flex flex-col">
                            <label htmlFor="guardiannum">
                                Guardian's Contact
                            </label>
                            <input
                                id="guardiannum"
                                type="number"
                                placeholder="Guardian's Contact Number"
                                value={guardianContact}
                                onChange={(e) =>
                                    setGuardianContact(e.target.value)
                                }
                                className="h-10 w-96 outline-0 border pl-6 rounded-xl"
                            />
                            {errors.guardianContact && (
                                <p className="text-red-500 text-sm">
                                    {errors.guardianContact}
                                </p>
                            )}
                        </div>

                        <div className="m-2 flex flex-col">
                            <label htmlFor="nfc">NFC ID Number</label>
                            <input
                                id="nfc"
                                type="number"
                                placeholder="NFC ID Number"
                                value={NFCid}
                                onChange={(e) => setNFCid(e.target.value)}
                                className="h-10 w-96 outline-0 border pl-6 rounded-xl"
                            />
                            {errors.NFCid && (
                                <p className="text-red-500 text-sm">
                                    {errors.NFCid}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="w-full flex justify-end gap-4">
                        <button
                            type="button"
                            className="bg-white border h-10 w-20 rounded-xl"
                            onClick={closeModal}
                        >
                            <p>Cancel</p>
                        </button>
                        <button
                            type="submit"
                            className="bg-[#002147] h-10 w-20 rounded-xl"
                        >
                            <p className="text-white">Submit</p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
