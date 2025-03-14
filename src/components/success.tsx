import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Success() {
  const notifySuccess = () => {
    toast.success("Top-up was successful!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
      <button
        onClick={notifySuccess}
        className=" absolute bottom-4 right-6 bg-white shadow shadow-black text-[#002147] rounded-xl p-3"
      >
        Top up Successfully!
      </button>
  );
}
