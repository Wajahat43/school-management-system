import { Student } from "@/models/student-model";
import React from "react";
import { updateStudent, addStudent } from "@/actions/student-actions";
import { Button } from "../ui/button";

function StudentForm({ student }: { student?: Student }) {
  const instanceId = React.useId();
  const submitAction = student ? updateStudent.bind(null, student.id) : addStudent;

  return (
    <form className="w-full max-w-2xl dark:bg-neutral-800 p-8 rounded-lg" action={submitAction}>
      <div className="flex flex-col mb-4">
        <label htmlFor={`${instanceId}-name`} className="mb-2 font-semibold">
          Name
        </label>
        <input
          type="text"
          id={`${instanceId}-name`}
          name="name"
          placeholder="Enter student's name"
          className="p-3 rounded-lg dark:bg-white text-black lg"
          required={true}
          defaultValue={student?.name}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor={`${instanceId}-email`} className="mb-2 font-semibold">
          Email
        </label>
        <input
          type="email"
          name="email"
          id={`${instanceId}-email`}
          placeholder="Enter student email"
          className="p-3 border rounded-lg dark:bg-white text-black text-lg"
          required={true}
          defaultValue={student?.email}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor={`${instanceId}-designation`} className="mb-2 font-semibold">
          Major
        </label>
        <input
          type="text"
          name="major"
          id={`${instanceId}-designation`}
          placeholder="Enter student's Major"
          className="p-3 rounded-lg dark:bg-white text-black text-lg"
          required={true}
          defaultValue={student?.major}
        />
      </div>
      <div className="flex items-center mb-4">
        <label htmlFor={`${instanceId}-istenured`} className="font-semibold">
          Is Enrolled
        </label>
        <input
          type="checkbox"
          name="isEnrolled"
          id={`${instanceId}-istenured`}
          className="ml-4 size-8 "
          defaultChecked={student?.isEnrolled}
        />
      </div>
      <div className="flex justify-center">
        <Button>{student ? "Update" : "Add"} Student</Button>
      </div>
    </form>
  );
}

export default StudentForm;
