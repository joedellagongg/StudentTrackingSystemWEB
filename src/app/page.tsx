export default function homePage() {
  return (
    <main className=" relative h-screen w-full bg-[url('../../public/bg/bg.svg')] bg-cover ">
      <div className="absolute h-screen w-full bg-white bg-opacity-40 flex justify-center items-center">
        <div className=" h-[50%] w-[50%] bg-blue-200 bg-opacity-60 rounded-2xl flex flex-col gap-y-6">
          <div className=" flex justify-center items-center pt-6">
            <img src="./logo/logo.svg" alt="" className=" h-[100px]" />
          </div>
          <div className=" flex flex-col justify-center items-center gap-y-6">
            <input
              type="number"
              placeholder="ID Number"
              className=" h-10 w-96 outline-0 pl-6 rounded-xl"
            />
            <input
              type="password"
              placeholder="Password"
              className=" h-10 w-96 outline-0 pl-6 rounded-xl"
            />
            <button className=" bg-[#002147] h-10 w-20 rounded-xl">
              <p className="text-white">Login</p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
