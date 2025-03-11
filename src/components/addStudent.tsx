"use client";
import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import axiosInstance from "@/library/axios";

export default function AddStudent({ closeModal }) {
  const searchParams = useSearchParams();
  let id = searchParams.get("section");

  const [studentData, setStudentData] = useState({
    nfc_id: "",
    section_id: id,
    lastName: "",
    firstName: "",
    middleName: "",
    emailAddress: "",
    guardianEmail: "",
    guardianName: "",
    studentContact: "",
    guardianContact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("show student data: ", studentData);

    try {
      const res = await axiosInstance.post("/students", studentData);

      // console.log("hello", res.data.success);

      if (res.data.success == true) {
        console.log(res.data);

        window.location.reload();
      }
    } catch (err) {
      console.error(err);
      console.log("[ add_student: ERROR  why]", err);   
    }
  };

  return (
    <div className="z-50 bg-black bg-opacity-50 w-full h-full fixed inset-0 flex items-center justify-center">
      <div className="bg-white flex justify-center items-center w-[90%] lg:w-[60%] p-4 rounded-xl text-sm max-h-[90vh] overflow-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full space-y-4"
        >
          <div className="">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <label htmlFor="lname">Last Name</label>
                <input
                  id="lname"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={studentData.lastName}
                  onChange={handleChange}
                  className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl capitalize"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="fname">First Name</label>
                <input
                  id="fname"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={studentData.firstName}
                  onChange={handleChange}
                  className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="mname">Middle Name</label>
                <input
                  id="mname"
                  name="middleName"
                  type="text"
                  placeholder="Middle Name"
                  value={studentData.middleName}
                  onChange={handleChange}
                  className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="num">Contact Number</label>
                <input
                  id="num"
                  name="studentContact"
                  type="number"
                  placeholder="Contact Number"
                  value={studentData.studentContact}
                  onChange={handleChange}
                  className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="emailAddress"
                  type="email"
                  placeholder="Email Address"
                  value={studentData.emailAddress}
                  onChange={handleChange}
                  className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="guardian">Guardian Name</label>
              <input
                id="guardian"
                name="guardianName"
                type="text"
                placeholder="Guardian Name"
                value={studentData.guardianName}
                onChange={handleChange}
                className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="guardiannum">Guardian's Contact Number</label>
                <input
                  id="guardiannum"
                  name="guardianContact"
                  type="number"
                  placeholder="Guardian's Contact Number"
                  value={studentData.guardianContact}
                  onChange={handleChange}
                  className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="guardianEmail">Guardian's Email</label>
                <input
                  id="guardianEmail"
                  name="guardianEmail"
                  type="email"
                  placeholder="Guardian's Email"
                  value={studentData.guardianEmail}
                  onChange={handleChange}
                  className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="nfc">NFC ID Number</label>
              <input
                id="nfc"
                name="nfc_id"
                type="number"
                placeholder="NFC ID Number"
                value={studentData.nfc_id}
                onChange={handleChange}
                className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 py-2">
            <button
              onClick={closeModal}
              name=""
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
