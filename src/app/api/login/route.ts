import { NextResponse } from "next/server";

import { redirect } from "next/navigation";

export const login = async (formData: FormData) => {
    console.log("GET REQUEST");
    const user = formData.get("user");
    const pass = formData.get("pass");

    const admin_user = "123";
    const admin_pass = "12345";

    const student_user = "121212";
    const student_pass = "121212";


    if (admin_user === user && admin_pass === pass) {
        console.log("True");
        redirect("/dashboard");
    } else if (student_user === user && student_pass === pass) {
        console.log("True Student Dashboard");
        redirect("/administrator");
    } else {
        console.log("Error");
    }

    return NextResponse.json({ response: "Excellent Connection", status: 201 });
};
