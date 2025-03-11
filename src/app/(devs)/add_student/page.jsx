"use client";

import AddStudent from "@/components/addStudent";
// import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function StudentIncrement() {
    return (
        <Suspense>
            <AddStudent />
        </Suspense>
    );
}
