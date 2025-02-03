import React from "react";

export default function AddCanteenComponent({ setAddModal }) {
  return (
    <div className="z-50 bg-black bg-opacity-50 w-full h-full fixed inset-0 flex items-center justify-center">
      <div className="bg-white flex justify-center items-center lg:w-[50%] w-[80%] p-4 rounded-xl text-sm max-h-[50vh] overflow-auto">
        <form
          //   onSubmit={handleSubmit}
          className="flex flex-col w-full "
        >
          <div className="">
            <div className=" w-full">
              <div className="flex flex-col mt-4">
                <label htmlFor="lname" className=" text-base">Store Name</label>
                <input
                  id="sname"
                  type="text"
                  placeholder="Store Name"
                  //   value={lastName}
                  //   onChange={(e) => setLastName(e.target.value)}
                  className="h-10 w-full outline-0 border pl-2 lg:pl-6 rounded-xl capitalize"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col">
                <label htmlFor="num" className=" text-base">Contact Number</label>
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
                <label htmlFor="email" className=" text-base">Email Address</label>
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

            <div className="flex flex-col mt-4">
              <label htmlFor="nfc" className=" text-base">NFC ID Number</label>
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

          <div className="flex justify-end gap-4 py-2 mt-4">
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
