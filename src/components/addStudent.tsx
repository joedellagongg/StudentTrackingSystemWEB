"use client";
import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import axiosInstance from "@/library/axios";

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
  // joedellagongg - removed the    ^^ { closeModal}
  const [NFCid, setNFCid] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [Age, setAge] = useState("");
  const [Birthday, setBirthday] = useState("");
  const [Gender, setGender] = useState("");
  const [Address, setAddress] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [guardianEmailAddress, setGuardianEmailAddress] = useState("");
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
  console.log(urlID);

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
    if (!emailAddress) newErrors.emailAddress = "Email Address is required.";
    if (!fatherName) newErrors.fatherName = "Father's Name is required.";
    if (!motherName) newErrors.motherName = "Mother's Name is required.";
    if (!guardianName) newErrors.guardianName = "Guardian's Name is required.";
    if (!studentContact)
      newErrors.studentContact = "Contact Number is required.";
    if (!fatherContact)
      newErrors.fatherContact = "Father's Contact Number is required.";
    if (!motherContact)
      newErrors.motherContact = "Mother's Contact Number is required.";
    if (!guardianContact)
      newErrors.guardianContact = "Guardian's Contact Number is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      const res = await axiosInstance.post("/students", {
        NFCid,
        uname,
        upass,
        urlID,
        lastName,
        firstName,
        middleName,
        emailAddress,
        guardianEmailAddress,
        studentContact,
        guardianContact,
      });

      if (res.data.result.authenticated == true) {
        console.log(res.data);
        window.location.reload();
      } else {
        console.log("[ add_student: ERROR ]");
        console.log("DATAAAAAAAAA", res.data);
      }
    } catch (err) {
      console.error(err);
      console.log("[ add_student: ERROR  why]", err);
    }
  };

  return (
    <div className="z-50 bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 flex items-center justify-center">
      <div className="bg-white flex justify-center items-center max-h-[80%] max-w-[80%] p-4 rounded-xl">
        <form onSubmit={handleSubmit} className="flex flex-col w-full h-full">
          <div className=" grid grid-cols-3">
            <div className="m-2 flex flex-col">
              <label htmlFor="lname">Last Name</label>
              <input
                id="lname"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="h-10 w-full outline-0 border pl-6 rounded-xl capitalize"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
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
                className="h-10 w-full outline-0 border pl-6 rounded-xl"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
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
                className="h-10 w-full outline-0 border pl-6 rounded-xl"
              />
              {errors.middleName && (
                <p className="text-red-500 text-sm">{errors.middleName}</p>
              )}
            </div>
          </div>

          <div className=" grid grid-cols-2">
            <div className="m-2 flex flex-col">
              <label htmlFor="num">Contact Number</label>
              <input
                id="num"
                type="number"
                placeholder="Contact Number"
                value={studentContact}
                onChange={(e) => setStudentContact(e.target.value)}
                className="h-10 w-full outline-0 border pl-6 rounded-xl"
              />
              {errors.studentContact && (
                <p className="text-red-500 text-sm">{errors.studentContact}</p>
              )}
            </div>

            <div className="m-2 flex flex-col">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="text"
                placeholder="Email Address"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                className="h-10 w-full outline-0 border pl-6 rounded-xl"
              />
              {errors.emailAddress && (
                <p className="text-red-500 text-sm">{errors.emailAddress}</p>
              )}
            </div>
          </div>
          <div className="m-2 flex flex-col">
            <label htmlFor="guardian">Guardian Name</label>
            <input
              id="guardian"
              type="text"
              placeholder="Guardian Name"
              value={guardianName}
              onChange={(e) => setGuardianName(e.target.value)}
              className="h-10 w-full outline-0 border pl-6 rounded-xl"
            />
            {errors.guardianName && (
              <p className="text-red-500 text-sm">{errors.guardianName}</p>
            )}
          </div>

          <div className=" grid grid-cols-2">
            <div className="m-2 flex flex-col">
              <label htmlFor="guardiannum">Guardian's Contact Number</label>
              <input
                id="guardiannum"
                type="number"
                placeholder="Guardian's Contact Number"
                value={guardianContact}
                onChange={(e) => setGuardianContact(e.target.value)}
                className="h-10 w-full outline-0 border pl-6 rounded-xl"
              />
              {errors.guardianContact && (
                <p className="text-red-500 text-sm">{errors.guardianContact}</p>
              )}
            </div>
            <div className="m-2 flex flex-col">
              <label htmlFor="guardiannum">Guardian's Email</label>
              <input
                id="guardiannum"
                type="text"
                placeholder="Guardian's Email"
                value={guardianEmailAddress}
                onChange={(e) => setGuardianEmailAddress(e.target.value)}
                className="h-10 w-full outline-0 border pl-6 rounded-xl"
              />
              {errors.guardianContact && (
                <p className="text-red-500 text-sm">{errors.guardianContact}</p>
              )}
            </div>
          </div>
          <div className="m-2 flex flex-col">
            <label htmlFor="nfc">NFC ID Number</label>
            <input
              id="nfc"
              type="number"
              placeholder="NFC ID Number"
              value={NFCid}
              onChange={(e) => setNFCid(e.target.value)}
              className="h-10 w-full outline-0 border pl-6 rounded-xl"
            />
            {errors.NFCid && (
              <p className="text-red-500 text-sm">{errors.NFCid}</p>
            )}
          </div>
          <div className="w-full flex justify-end gap-4">
            <button
              onClick={closeModal}
              type="button"
              className="bg-white border h-10 w-20 rounded-xl"
            >
              <p>Cancel</p>
            </button>
            <button type="submit" className="bg-[#002147] h-10 w-20 rounded-xl">
              <p className="text-white">Submit</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// export default function StudentIncrement() {
//     const searchParams = useSearchParams();
//     let urlID = searchParams.get("section");
//     return (
//         <Suspense>
//             <AddStudent urlID={urlID} />
//         </Suspense>
//     );
// }
