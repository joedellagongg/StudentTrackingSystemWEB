import React, { useState } from "react";
import axiosInstance from "@/library/axios";
import Cookies from "js-cookie";

export default function AddCanteenComponent({ setAddModal, dataTransmit }) {
  const [canteenInfo, setCanteenInfo] = useState({
    nfc_id: "",
    lastName: "",
    firstName: "",
    middleName: "",
    emailAddress: "",
    studentContact: "",
    store_name: "",
  });

  const token = Cookies.get("token");

  const handleChange = (e) => {
    setCanteenInfo({
      ...canteenInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(canteenInfo);

    try {
      const response = await axiosInstance.post(
        "/users/add_cashier",
        canteenInfo,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log(response.data.data);
      if (response.data.statusCode === 201) {
        // window.location.reload();
        console.log("Hey i'm working: ", response.data.data);
        dataTransmit(response.data.data);
      }

      // dataTransmit(canteenInfo.store_name);
      // // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="z-50 bg-black bg-opacity-50 w-full h-full fixed inset-0 flex items-center justify-center">
      <div className="bg-white flex justify-center items-center lg:w-[70%] w-[80%] p-4 rounded-xl text-sm max-h-[60vh] overflow-auto">
        <form onSubmit={handleSubmit} className="flex flex-col w-full ">
          <div className=" w-full">
            <div className="flex flex-col mt-4">
              <label htmlFor="storeName" className=" text-base">
                Store Name
              </label>
              <input
                id="storeName"
                name="store_name"
                type="text"
                placeholder="Store Name"
                value={canteenInfo.store_name}
                onChange={handleChange}
                className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl capitalize"
              />
            </div>

            <div className=" w-full flex flex-row gap-x-4 justify-between">
              <div className="flex flex-col mt-4 w-full">
                <label htmlFor="lastName" className=" text-base">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={canteenInfo.lastName}
                  onChange={handleChange}
                  className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl capitalize"
                />
              </div>
              <div className="flex flex-col mt-4 w-full">
                <label htmlFor="firstName" className=" text-base">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={canteenInfo.firstName}
                  onChange={handleChange}
                  className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl capitalize"
                />
              </div>
              <div className="flex flex-col mt-4 w-full">
                <label htmlFor="middleName" className=" text-base">
                  Middle Name
                </label>
                <input
                  id="middleName"
                  name="middleName"
                  type="text"
                  placeholder="Middle Name"
                  value={canteenInfo.middleName}
                  onChange={handleChange}
                  className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl capitalize"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col">
                <label htmlFor="contactNumber" className=" text-base">
                  Contact Number
                </label>
                <input
                  id="contactNumber"
                  name="studentContact"
                  type="number"
                  placeholder="Contact Number"
                  value={canteenInfo.studentContact}
                  onChange={handleChange}
                  className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="emailAddress" className=" text-base">
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  name="emailAddress"
                  type="email"
                  placeholder="Email Address"
                  value={canteenInfo.emailAddress}
                  onChange={handleChange}
                  className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl"
                />
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="NFCid" className=" text-base">
                NFC ID Number
              </label>
              <input
                id="NFCid"
                name="nfc_id"
                type="number"
                placeholder="NFC ID Number"
                value={canteenInfo.nfc_id}
                onChange={handleChange}
                className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 py-2 mt-4">
            <button
              onClick={() => setAddModal(false)}
              type="button"
              className="bg-white border h-10 w-20 rounded-xl"
            >
              Cancel
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
