import React from "react";
import { useSearchParams } from "next/navigation";
const axios = require("axios");

const Modal = ({ isOpen, onClose, studentData, setStudentData }) => {
  if (!isOpen) return null;

  const searchParams = useSearchParams();
  const urlID = searchParams.get("id");
  // console.log(urlID);

  const handleUpdate = async () => {
    try {
      const res = await axiosInstance.patch(`/students/${urlID}`, studentData);
      onClose();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
    console.log(studentData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-6">
      <div className="bg-white p-6 pb-10 rounded-xl shadow-lg w-[60%] h-[90%] flex flex-col gap-y-2 ">
        <h2 className="text-xl font-semibold">Edit Student Information</h2>
        <div className="overflow-y-scroll h-[90%] w-full flex flex-col gap-y-3 items-center">
          <div className=" grid grid-cols-3 justify-around w-full gap-6">
            <div className=" flex flex-col justify-center">
              <p className="text-sm">First Name</p>
              <input
                type="text"
                value={studentData.fname}
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    fname: e.target.value,
                  })
                }
                className="border rounded-xl h-10 p-3 bg-[#E5F1FF]"
              />
            </div>
            <div className=" flex flex-col justify-center">
              <p className="text-sm">Last Name</p>
              <input
                type="text"
                value={studentData.lname}
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    lname: e.target.value,
                  })
                }
                className="border rounded-xl h-10 p-3 bg-[#E5F1FF]"
              />
            </div>
            <div className=" flex flex-col justify-center">
              <p className="text-sm">Middle Name</p>
              <input
                type="text"
                value={studentData.mname}
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    mname: e.target.value,
                  })
                }
                className="border rounded-xl h-10 p-3 bg-[#E5F1FF]"
              />
            </div>
          </div>
          <div className=" grid grid-cols-3 justify-around w-full gap-6">
            <div className=" flex flex-col justify-center">
              <p className="text-sm">Age</p>
              <input
                type="number"
                value={studentData.age}
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    age: e.target.value,
                  })
                }
                className="border rounded-xl h-10 p-3 bg-[#E5F1FF]"
              />
            </div>
            <div className=" flex flex-col justify-center">
              <p className="text-sm">Birthday</p>
              <input
                type="date"
                value={studentData.birthday?.split("T")[0]}
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    birthday: e.target.value,
                  })
                }
                className="border rounded-xl h-10 p-3 bg-[#E5F1FF]"
              />
            </div>
            <div className=" flex flex-col justify-center">
              <p className="text-sm">Gender</p>
              <select
                value={studentData.gender}
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    gender: e.target.value,
                  })
                }
                className="border rounded-xl h-10 pl-4 pr-4 bg-[#E5F1FF]"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className=" grid grid-cols-2 justify-around w-full gap-6">
            <div className=" flex flex-col justify-center">
              <p className="text-sm">Email Address</p>
              <input
                type="email"
                value={studentData.email}
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    email: e.target.value,
                  })
                }
                className="border rounded-xl h-10 p-3 bg-[#E5F1FF]"
              />
            </div>
            <div className=" flex flex-col justify-center">
              <p className="text-sm">Contact Number</p>
              <input
                type="number"
                value={studentData.studcontact}
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    studcontact: e.target.value,
                  })
                }
                className="border rounded-xl h-10 p-3 bg-[#E5F1FF]"
              />
            </div>
          </div>
          <div className=" grid grid-cols-2 w-full gap-6">
            <div className=" flex flex-col justify-center">
              <p className="text-sm">Mother's Name</p>
              <input
                type="text"
                value={studentData.mother}
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    mother: e.target.value,
                  })
                }
                className="border rounded-xl h-10 p-3 bg-[#E5F1FF]"
              />
            </div>
            <div className=" flex flex-col justify-center">
              <p className="text-sm">Mother's Contact</p>
              <input
                type="number"
                value={studentData.mothercontact}
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    mothercontact: e.target.value,
                  })
                }
                className="border rounded-xl h-10 p-3 bg-[#E5F1FF]"
              />
            </div>
          </div>
          <div className=" grid grid-cols-2 w-full gap-6">
            <div className=" flex flex-col justify-center">
              <p className="text-sm">Father's Name</p>
              <input
                type="text"
                value={studentData.father}
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    father: e.target.value,
                  })
                }
                className="border rounded-xl h-10 p-3 bg-[#E5F1FF]"
              />
            </div>
            <div className=" flex flex-col justify-center">
              <p className="text-sm">Father's Contact</p>
              <input
                type="number"
                value={studentData.fathercontact}
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    fathercontact: e.target.value,
                  })
                }
                className="border rounded-xl h-10 p-3 bg-[#E5F1FF]"
              />
            </div>
          </div>
          <div className=" grid grid-cols-2 w-full gap-6">
            <div className=" flex flex-col justify-center">
              <p className="text-sm">Guardian's Name</p>
              <input
                type="text"
                value={studentData.guardian}
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    guardian: e.target.value,
                  })
                }
                className="border rounded-xl h-10 p-3 bg-[#E5F1FF]"
              />
            </div>
            <div className=" flex flex-col justify-center">
              <p className="text-sm">Guardian's Contact</p>
              <input
                type="number"
                value={studentData.guardiancontact}
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    guardiancontact: e.target.value,
                  })
                }
                className="border rounded-xl h-10 p-3 bg-[#E5F1FF]"
              />
            </div>
          </div>
          <div className=" w-full">
            <p className="text-sm">NFC ID</p>
            <input
              type="number"
              value={studentData.nfc_id}
              onChange={(e) =>
                setStudentData({
                  ...studentData,
                  nfc_id: e.target.value,
                })
              }
              className="border rounded-xl h-10 w-full p-3 bg-[#E5F1FF]"
            />
          </div>
        </div>
        <div className="flex justify-end gap-x-4 items-center">
          <button type="button" onClick={onClose} className=" p-4 rounded-xl">
            Cancel
          </button>
          <button
            type="button"
            onClick={handleUpdate}
            className="bg-[#002147] text-white rounded-xl p-3"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
