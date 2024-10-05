import { cookies } from "next/headers";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken");

export async function loginHandler(formData: FormData) {
    const username = formData.get("user");
    const password = formData.get("pass");
    const router = useRouter();
    try {
        const response = await axios.post('/', { username, password });
        const { token } = response.data; 

        localStorage.setItem('token', token);

        router.push('/dashboard');
    } catch (err) {
        console.log(err)
    }

    // const admin_user = "123";
    // const admin_pass = "12345";

    // // Log user and pass
    // console.log("User:", user);
    // console.log("Pass:", pass);

    // if (admin_user === user && admin_pass === pass) console.log("True");
    // else {
    //     console.log("Error");
    // }
}
