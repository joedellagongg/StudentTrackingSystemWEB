"use client";

import React from "react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post("http://localhost:5500/login", {
                username,
                password,
            });
            if (res.data.authenticated) {
                router.push("/dashboard");
                console.log("😊😊😊 HAHAHAHAHAHA");
                console.clear();
            } else {
                console.log("😒😒😒");
            }
        } catch (err) {
            console.error(err);
            setLoading(false);
            console.log("😒😒😒");
            alert("Login failed. Please check your credentials.");
        }
    };

    return (
        <main className=" relative h-screen w-full bg-[url('../../public/bg/bg.svg')] bg-cover">
            <div className="absolute h-screen w-full bg-white bg-opacity-40 flex justify-center items-center">
                <div className="bg-blue-200 bg-opacity-60 rounded-2xl flex flex-col gap-y-6">
                    <div className=" flex justify-center items-center pt-6">
                        <img
                            src="./logo/logo.svg"
                            alt=""
                            className=" h-[100px]"
                            fetchPriority="high"
                        />
                    </div>
                    <div className="p-6">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col justify-center items-center gap-y-6">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    className=" h-10 w-96 outline-0 pl-6 rounded-xl"
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className=" h-10 w-96 outline-0 pl-6 rounded-xl"
                                />
                                <button className=" bg-[#002147] h-10 w-20 rounded-xl">
                                    {loading ? (
                                        <p className="text-white">Loading...</p>
                                    ) : (
                                        <p className="text-white">Login</p>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
