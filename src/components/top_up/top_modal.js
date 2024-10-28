"use client"
export default function TopUp_Form({onClose}) {
  return (
    <main className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className=" h-[80%] w-[70%] bg-white p-4 rounded-xl">
        <h1 className=" text-xl font-bold">Top Up Amount to: </h1>
        <div className=" w-full h-[95%] flex flex-col justify-center items-center ">
          <div className=" w-[70%] flex flex-col gap-2">
            <label htmlFor="nfc">NCF ID:</label>
            <input
              id="nfc"
              type="number"
              className=" outline-none pl-4 pr-4 border border-[#002147] w-full h-12 rounded-lg"
            />
          </div>

          <div className=" w-[70%] flex flex-row gap-4 justify-center mt-4">
            <button
              onClick={onClose}
              className=" w-[45%] bg-gray-400 rounded-xl p-2 text-xl"
            >
              Cancel
            </button>
            <button className=" w-[45%] bg-[#002147] rounded-xl p-2 text-xl text-white">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
