"use client";
import { Suspense } from "react";
import StudentListComponent from "@/components/studentList";

export default function StudentList() {
  return (
    <Suspense>
      <StudentListComponent />
    </Suspense>
  );
}
