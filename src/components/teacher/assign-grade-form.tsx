import React from "react";
import { Button } from "../ui/button";
import { Subject } from "@/models/subject-model";
import { Student } from "@/models/student-model";
import { Grade } from "@/models/grades-model";
import { assignGrade } from "@/actions/teacher-actions";

interface AssignGradeFormProps {
  grades: Grade[];
  students: Student[];
  subjects: Subject[];
}

async function AssignGradeForm({ grades, students, subjects }: AssignGradeFormProps) {
  const instanceId = React.useId();

  return (
    <form className="w-full max-w-2xl dark:bg-neutral-800 p-8 rounded-lg" action={assignGrade}>
      <div className="flex flex-col mb-4">
        <label htmlFor={`${instanceId}-student`} className="mb-2 font-semibold">
          Student
        </label>
        <select
          name="student"
          id={`${instanceId}-student`}
          className="p-3 rounded-lg dark:bg-white text-black text-lg"
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
      <div className="flex flex-col mb-4">
        <label htmlFor={`${instanceId}-subject`} className="mb-2 font-semibold">
          Subject
        </label>

        <select
          name="subject"
          id={`${instanceId}-subject`}
          className="p-3 rounded-lg dark:bg-white text-black text-lg"
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
      <div className="flex flex-col mb-4">
        <label htmlFor={`${instanceId}-grade`} className="mb-2 font-semibold">
          Grade
        </label>
        <select
          name="grade"
          id={`${instanceId}-grade`}
          className="p-3 rounded-lg dark:bg-white text-black text-lg"
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

export default AssignGradeForm;
