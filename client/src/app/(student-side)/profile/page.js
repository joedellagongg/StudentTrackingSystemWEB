export default function ProfilePage() {
  const studentInfo = [
    {
      lname: "Mendoza",
      fname: "Paula Marie",
      mname: "Bonifacio",
      age: "22",
      bday: "March 4, 2021",
      gender: "Female",
      address: "123 Street Poblacion, Pandi, Bulacan 3014",
      email: "example123@gmail.com",
      father: "Father Mendoza", fatherNo: "09123456789",
      mother: "Mother Mendoza", motherNo: "09987654321",
      guardian: "Guardian Mendoza", guardianNo: "0912348765",
    },
  ];
  return (
    <main className=" pl-4 pr-4 w-[60%] h-full">
      <div className=" w-full h-full flex flex-col">
        <div className=" ">
          <h1 className=" text-[45px]">Student Profile</h1>
        </div>

        <div className=" w-full h-full bg-[#FFFFFF] rounded-2xl p-10 overflow-y-auto no-scrollbar">
          <div className=" w-full flex justify-end">
            <button className=" bg-[#002147] h-8 w-24 rounded-lg text-white">
              Edit
            </button>
          </div>
          {studentInfo.map((info) => (
            <div className=" gap-y-4 flex flex-col mt-8 ">
              <div className=" w-full flex flex-row justify-between gap-x-4">
                <div className=" flex flex-col w-[33.3%] ">
                  <p className=" text-[12px]">Last Name</p>
                  <p className=" bg-[#E1E8FF] p-2 rounded-lg text-gray-400">{info.lname}</p>
                </div>
                <div className=" flex flex-col w-[33.3%] ">
                  <p className=" text-[12px]">First Name</p>
                  <p className=" bg-[#E1E8FF] p-2 rounded-lg text-gray-400">{info.fname}</p>
                </div>
                <div className=" flex flex-col w-[33.3%] ">
                  <p className=" text-[12px]">Middle Name</p>
                  <p className=" bg-[#E1E8FF] p-2 rounded-lg text-gray-400">{info.mname}</p>
                </div>
              </div>

              <div className=" w-full flex flex-row justify-between gap-x-4">
                <div className=" flex flex-col w-[15%] ">
                  <p className=" text-[12px]">Age</p>
                  <p className=" bg-[#E1E8FF] p-2 rounded-lg text-gray-400">{info.age}</p>
                </div>
                <div className=" flex flex-col w-[55%] ">
                  <p className=" text-[12px]">Birthday</p>
                  <p className=" bg-[#E1E8FF] p-2 rounded-lg text-gray-400">{info.bday}</p>
                </div>
                <div className=" flex flex-col w-[30%] ">
                  <p className=" text-[12px]">Gender</p>
                  <p className=" bg-[#E1E8FF] p-2 rounded-lg text-gray-400">{info.gender}</p>
                </div>
              </div>

              <div>
                <div className=" flex flex-col w-full">
                  <p className=" text-[12px]">Address</p>
                  <p className=" bg-[#E1E8FF] p-2 rounded-lg text-gray-400">{info.address}</p>
                </div>
              </div>

              <div>
                <div className=" flex flex-col w-[60%]">
                  <p className=" text-[12px]">Email Address</p>
                  <p className=" bg-[#E1E8FF] p-2 rounded-lg text-gray-400">{info.email}</p>
                </div>
              </div>

              <div className=" w-full flex flex-row justify-between gap-x-4">
                <div className=" flex flex-col w-[50%] ">
                  <p className=" text-[12px]">Father</p>
                  <p className=" bg-[#E1E8FF] p-2 rounded-lg text-gray-400">{info.father}</p>
                </div>
                <div className=" flex flex-col w-[50%] ">
                  <p className=" text-[12px]">Contact Number</p>
                  <p className=" bg-[#E1E8FF] p-2 rounded-lg text-gray-400">{info.fatherNo}</p>
                </div>
              </div>

              <div className=" w-full flex flex-row justify-between gap-x-4">
                <div className=" flex flex-col w-[50%] ">
                  <p className=" text-[12px]">Mother</p>
                  <p className=" bg-[#E1E8FF] p-2 rounded-lg text-gray-400">{info.mother}</p>
                </div>
                <div className=" flex flex-col w-[50%] ">
                  <p className=" text-[12px]">Contact Number</p>
                  <p className=" bg-[#E1E8FF] p-2 rounded-lg text-gray-400">{info.motherNo}</p>
                </div>
              </div>

              <div className=" w-full flex flex-row justify-between gap-x-4">
                <div className=" flex flex-col w-[50%] ">
                  <p className=" text-[12px]">Guardian</p>
                  <p className=" bg-[#E1E8FF] p-2 rounded-lg text-gray-400">{info.mother}</p>
                </div>
                <div className=" flex flex-col w-[50%] ">
                  <p className=" text-[12px]">Contact Number</p>
                  <p className=" bg-[#E1E8FF] p-2 rounded-lg text-gray-400">{info.motherNo}</p>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
