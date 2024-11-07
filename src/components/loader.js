export default function Loader() {
  return (
    <div className="z-50 w-full h-full p-4 rounded-2xl bg-[#ffffff] flex justify-center items-center">
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-[#002147] animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-[#002147] animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-[#002147] animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
}
