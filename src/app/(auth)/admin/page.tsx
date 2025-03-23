"use client";

import React from "react";
import Image from "next/image";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/library/axios";
import Cookies from "js-cookie";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const token = Cookies.get("token");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);

    try {
      const res = await axiosInstance.post(
        "/login",
        { username, password },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // console.log(res.data.token);

      if (res.data && res.data.token) {
        const token = res.data.token;

        Cookies.set("token", token, {
          expires: 1 / 24,
          secure: true,
          sameSite: "Strict",
        });

        const decodedToken = jwtDecode(token);
        console.log("Decoded Token:", decodedToken);

        router.push("/dashboard");
      } else {
        alert("Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Login Error:", err);
      alert("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className=" relative h-screen w-full bg-[url('../../public/bg/bg.svg')] bg-cover">
      <div className="absolute h-screen w-full bg-white bg-opacity-40 flex justify-center items-center">
        <div className="bg-blue-200 bg-opacity-60 rounded-2xl flex flex-col gap-y-6 md:max-w-[50%] w-[80%]">
          <div className=" flex justify-center items-center pt-6">
            <Image
              priority={true}
              src="./logo/logo.svg"
              alt="logo"
              width={0}
              height={0}
              className=" h-[100px] w-auto"
              // fetchPriority="high"
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
                  onChange={(e) => setUsername(e.target.value)}
                  className=" h-10 md:w-96 outline-0 pl-6 rounded-xl"
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=" h-10 md:w-96 outline-0 pl-6 rounded-xl"
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
