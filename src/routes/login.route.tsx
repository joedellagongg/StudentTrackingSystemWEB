import { error } from "console";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken");

export async function login(formData: FormData) {
    const user = formData.get("user");
    const pass = formData.get("pass");

    const admin_user = "123";
    const admin_pass = "12345";

    // Log user and pass
    console.log("User:", user);
    console.log("Pass:", pass);

    if (admin_user === user && admin_pass === pass) console.log("True");
    else {
        console.log("Error");
    }
}
