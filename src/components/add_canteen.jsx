import React from "react";

export default function AddCanteenComponent({ setAddModal }) {
  return (
    <div className="z-50 bg-black bg-opacity-50 w-full h-full fixed inset-0 flex items-center justify-center">
      <div className="bg-white flex justify-center items-center w-[90%] lg:w-[60%] p-4 rounded-xl text-sm max-h-[90vh] overflow-auto">
        <form
          //   onSubmit={handleSubmit}
          className="flex flex-col w-full space-y-4"
        >
          <div className="">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <label htmlFor="lname">Store Name</label>
                <input
                  id="sname"
                  type="text"
                  placeholder="Store Name"
                  //   value={lastName}
                  //   onChange={(e) => setLastName(e.target.value)}
                  className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl capitalize"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lname">Last Name</label>
                <input
                  id="lname"
                  type="text"
                  placeholder="Last Name"
                  //   value={lastName}
                  //   onChange={(e) => setLastName(e.target.value)}
                  className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl capitalize"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="fname">First Name</label>
                <input
                  id="fname"
                  type="text"
                  placeholder="First Name"
                  //   value={firstName}
                  //   onChange={(e) => setFirstName(e.target.value)}
                  className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="mname">Middle Name</label>
                <input
                  id="mname"
                  type="text"
                  placeholder="Middle Name"
                  //   value={middleName}
                  //   onChange={(e) => setMiddleName(e.target.value)}
                  className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="num">Contact Number</label>
                <input
                  id="num"
                  type="number"
                  placeholder="Contact Number"
                  //   value={studentContact}
                  //   onChange={(e) => setStudentContact(e.target.value)}
                  className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  //   value={emailAddress}
                  //   onChange={(e) => setEmailAddress(e.target.value)}
                  className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="guardian">Guardian Name</label>
              <input
                id="guardian"
                type="text"
                placeholder="Guardian Name"
                // value={guardianName}
                // onChange={(e) => setGuardianName(e.target.value)}
                className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="guardiannum">Guardian's Contact Number</label>
                <input
                  id="guardiannum"
                  type="number"
                  placeholder="Guardian's Contact Number"
                  //   value={guardianContact}
                  //   onChange={(e) => setGuardianContact(e.target.value)}
                  className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="guardianEmail">Guardian's Email</label>
                <input
                  id="guardianEmail"
                  type="email"
                  placeholder="Guardian's Email"
                  //   value={guardianEmailAddress}
                  //   onChange={(e) => setGuardianEmailAddress(e.target.value)}
                  className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="nfc">NFC ID Number</label>
              <input
                id="nfc"
                type="number"
                placeholder="NFC ID Number"
                // value={NFCid}
                // onChange={(e) => setNFCid(e.target.value)}
                className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 py-2">
            <button
              onClick={() => setAddModal(false)}
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
    // <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    //   <div className="bg-white p-6 w-[90%] md:w-[60%] lg:w-[40%] rounded-xl flex flex-col text-left justify-center items-center">
    //     <div className="w-full">
    //       <p className="font-bold">Canteen Name:</p>
    //       <input
    //         type="text"
    //         placeholder="Input Canteen Name"
    //         className="border h-12 rounded-xl outline-0 p-4 w-full"
    //       />
    //     </div>
    //     <div className=" w-full flex flex-row justify-end items-center gap-x-4 mt-4">
    //       <button onClick={() => setAddModal(false)}>Cancel</button>
    //       <button className=" rounded-xl bg-[#002147] p-4 text-white">
    //         Save
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}
