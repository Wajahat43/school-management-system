"use client";
import React from "react";
import { Button } from "../../../components/button/button";
import { Subject } from "@/app/(subjects)/_utils/types";
import { Student } from "@/app/(students)/_utils/types";
import { Grade } from "@/app/(grades)/_utils/types";
import { assignGrade } from "@/app/(teachers)/_actions/teacher-actions";
import withAuth from "@/utils/hoc/withAuth";

interface AssignGradeFormProps {
  grades: Grade[];
  students: Student[];
  subjects: Subject[];
}

function AssignGradeForm({ grades, students, subjects }: AssignGradeFormProps) {
  const instanceId = React.useId();

  return (
    <form
      className="w-full max-w-2xl rounded-lg p-8 dark:bg-neutral-800"
      action={assignGrade}
    >
      <div className="mb-4 flex flex-col">
        <label htmlFor={`${instanceId}-student`} className="mb-2 font-semibold">
          Student
        </label>
        <select
          name="student"
          id={`${instanceId}-student`}
          className="rounded-lg p-3 text-lg text-black dark:bg-white"
          required={true}
        >
          <option value="">Select Student</option>
          {students.map((student) => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor={`${instanceId}-subject`} className="mb-2 font-semibold">
          Subject
        </label>

        <select
          name="subject"
          id={`${instanceId}-subject`}
          className="rounded-lg p-3 text-lg text-black dark:bg-white"
          required={true}
        >
          <option value="">Select Subject</option>
          {subjects.map((subject) => (
            <option key={subject.id} value={subject.id}>
              {subject.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor={`${instanceId}-grade`} className="mb-2 font-semibold">
          Grade
        </label>
        <select
          name="grade"
          id={`${instanceId}-grade`}
          className="rounded-lg p-3 text-lg text-black dark:bg-white"
          required={true}
        >
          <option value="">Select Grade</option>
          {grades.map((grade) => (
            <option key={grade.id} value={grade.id}>
              {grade.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-center">
        <Button type="submit">Assign Grade</Button>
      </div>
    </form>
  );
}

export default withAuth(AssignGradeForm);
