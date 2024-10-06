import React from "react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function studentRegistration() {
    return (
        <main className="w-full h-full flex justify-center items-center">
            {/* <div className="h-96 w-10 bg-red-500"></div> */}
            <div className="bg-slate-300 flex justify-center items-center w-[80%] p-1 m-20">
                <form action="">
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Middle Name"
                        name="middle_name"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Age"
                        name="age"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Birthday"
                        name="birthday"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Gender"
                        name="gender"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        name="address"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Email Address"
                        name="email"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Father Maiden Name"
                        name="father_name"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Mother Maiden Name"
                        name="mother_name"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Contact Number"
                        name="contact_num"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Guardian"
                        name="guardian"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Guardian's Contact Number"
                        name="guardian_contact"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Mother's Contact Number"
                        name="mother_contact"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />
                    <input
                        type="text"
                        placeholder="Father's Contact Number"
                        name="father_contact"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                        className=" h-10 w-96 m-2 bg-blue-100 pl-6 rounded-xl"
                    />

                    <button className=" bg-[#002147] m-5 h-10 w-20 rounded-xl">
                        <p className="text-white">Login</p>
                    </button>
                </form>
            </div>{" "}
        </main>
    );
}
