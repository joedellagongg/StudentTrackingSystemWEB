"use client";
import React from "react";
import axios from "axios";

import { useState } from "react";

export default function AddStudent({ closeModal }) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5500/add_student", {
        NFCid,
        uname,
        upass,
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

      if (res.data.authenticated) {
        closeModal();
        console.log("[ add_student: SUCCESS ]");
      } else {
        console.log("[ add_student: ERROR ]");
      }
    } catch (err) {
      console.error(err);
      console.log("[ add_student: ERROR ]");
    }
  };

  return (
    <div className="z-50 bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 flex items-center justify-center">
      <div className="bg-white flex justify-center items-center p-4 h-[80%] rounded-xl overflow-y-scroll">
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col justify-center items-center overflow-y-scroll"
        >
          <div className=" grid grid-cols-2">
            <div className="m-2 flex flex-col">
              <label htmlFor="lname">Last Name</label>
              <input
                id="lname"
                type="text"
                placeholder="Last Name"
                name="last_name"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
                className=" h-10 w-96 outline-0 border pl-6 rounded-xl capitalize"
              />
            </div>

            <div className="m-2 flex flex-col">
              <label htmlFor="fname">Last Name</label>
              <input
                id="fname"
                type="text"
                placeholder="First Name"
                name="first_name"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
                className=" h-10 w-96 outline-0 border pl-6 rounded-xl"
              />
            </div>
            <div className="m-2 flex flex-col">
              <label htmlFor="mname">Midlle Name</label>
              <input
                id="mname"
                type="text"
                placeholder="Middle Name"
                name="middle_name"
                value={middleName}
                onChange={(e) => setmiddleName(e.target.value)}
                className=" h-10 w-96 outline-0 border pl-6 rounded-xl"
              />
            </div>

            <div className="m-2 flex flex-col">
              <label htmlFor="age">Age</label>
              <input
                id="age"
                type="number"
                placeholder="Age"
                name="age"
                value={Age}
                onChange={(e) => setAge(e.target.value)}
                className=" h-10 w-96 outline-0 border pl-6 rounded-xl"
              />
            </div>

            <div className="m-2 flex flex-col">
              <label htmlFor="bday">Birthday</label>
              <input
                id="bday"
                type="date"
                placeholder="Birthday"
                name="birthday"
                value={Birthday}
                onChange={(e) => setBirthday(e.target.value)}
                className=" h-10 w-96 outline-0 border pl-6 pr-6 rounded-xl text-gray-400"
              />
            </div>

            <div className="m-2 flex flex-col">
              <label htmlFor="gender">Gender</label>
              <input
                id="gender"
                type="text"
                placeholder="Gender"
                name="gender"
                value={Gender}
                onChange={(e) => setGender(e.target.value)}
                className=" h-10 w-96 outline-0 border pl-6 rounded-xl"
              />
            </div>

            <div className="m-2 flex flex-col">
              <label htmlFor="add">Address</label>
              <input
                id="add"
                type="text"
                placeholder="Address"
                name="address"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
                className=" h-10 w-96 outline-0 border pl-6 rounded-xl"
              />
            </div>

            <div className="m-2 flex flex-col">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="text"
                placeholder="Email Address"
                name="email"
                value={emailAddress}
                onChange={(e) => setemailAddress(e.target.value)}
                className=" h-10 w-96 outline-0 border pl-6 rounded-xl"
              />
            </div>

            <div className="m-2 flex flex-col">
              <label htmlFor="father">Father</label>
              <input
                id="father"
                type="text"
                placeholder="Father Name"
                name="father_name"
                value={fatherName}
                onChange={(e) => setfatherName(e.target.value)}
                className=" h-10 w-96 outline-0 border pl-6 rounded-xl"
              />
            </div>

            <div className="m-2 flex flex-col">
              <label htmlFor="mother">Mother</label>
              <input
                id="mother"
                type="text"
                placeholder="Mother Name"
                name="mother_name"
                value={motherName}
                onChange={(e) => setmotherName(e.target.value)}
                className=" h-10 w-96 outline-0 border pl-6 rounded-xl"
              />
            </div>

            <div className="m-2 flex flex-col">
              <label htmlFor="num">Contact Number</label>
              <input
                id="num"
                type="number"
                placeholder="Contact Number"
                name="contact_num"
                value={studentContact}
                onChange={(e) => setstudentContact(e.target.value)}
                className=" h-10 w-96 outline-0 border pl-6 rounded-xl"
              />
            </div>

            <div className="m-2 flex flex-col">
              <label htmlFor="guardian">Gurdian</label>
              <input
                id="guardian"
                type="text"
                placeholder="Guardian"
                name="guardian"
                value={guardianName}
                onChange={(e) => setguardianName(e.target.value)}
                className=" h-10 w-96 outline-0 border pl-6 rounded-xl"
              />
            </div>

            <div className="m-2 flex flex-col">
              <label htmlFor="guardiannum">Guardian's Contact</label>
              <input
                id="guardiannum"
                type="number"
                placeholder="Guardian's Contact Number"
                name="guardian_contact"
                value={guardianContact}
                onChange={(e) => setguardianContact(e.target.value)}
                className=" h-10 w-96 outline-0 border pl-6 rounded-xl"
              />
            </div>

            <div className="m-2 flex flex-col">
              <label htmlFor="mothernum">Mother's Contact</label>
              <input
                id="mothernum"
                type="number"
                placeholder="Mother's Contact Number"
                name="mother_contact"
                value={motherContact}
                onChange={(e) => setmotherContact(e.target.value)}
                className=" h-10 w-96 outline-0 border pl-6 rounded-xl"
              />
            </div>

            <div className="m-2 flex flex-col">
              <label htmlFor="fathernum">Father's Contact</label>
              <input
                id="fathernum"
                type="number"
                placeholder="Father's Contact Number"
                name="father_contact"
                value={fatherContact}
                onChange={(e) => setfatherContact(e.target.value)}
                className=" h-10 w-96 outline-0 border pl-6 rounded-xl"
              />
            </div>

            <div className="m-2 flex flex-col">
              <label htmlFor="nfc">NFC ID Number</label>
              <input
                id="nfc"
                type="number"
                placeholder="NFC ID Number"
                name="last_name"
                value={NFCid}
                onChange={(e) => setNFCid(e.target.value)}
                className=" h-10 w-96 outline-0 border pl-6 rounded-xl"
              />
            </div>
          </div>
          <div className=" w-full flex justify-end gap-4">
            <button
              type="button"
              className="bg-white border h-10 w-20 rounded-xl"
              onClick={closeModal}
            >
              <p>Cancel</p>
            </button>
            <button className=" bg-[#002147] h-10 w-20 rounded-xl">
              <p className="text-white">Submit</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
