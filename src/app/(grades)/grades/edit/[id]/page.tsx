import React, { Suspense } from "react";
import { fetchGradeById } from "@/app/(grades)/_actions/grade-actions";
import { notFound } from "next/navigation";
import GradeForm from "@/app/(grades)/_components/grades-form";

async function EditGrade({ params }: { params: { id: string } }) {
  const grade = await fetchGradeById(params.id);

  if (!grade) {
    notFound();
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-2xl bg-slate-500 dark:bg-neutral-800 p-8 rounded-lg">
        <h1 className="text-2xl">Edit Grade</h1>
        <GradeForm grade={grade} />
      </div>
    </div>
  );
}

export default EditGrade;
