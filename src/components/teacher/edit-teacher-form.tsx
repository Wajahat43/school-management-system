import React from "react";
import { editTeacher } from "@/actions/teacher-actions";
import { Teacher } from "@/models/teacher-model";

export default function EditTeacherForm({ teacher }: { teacher: Teacher }) {
  const instanceId = React.useId();
  const editTeacherWithId = editTeacher.bind(null, teacher.id);

  return (
    <form
      className="w-full max-w-2xl dark:bg-neutral-800 p-8 rounded-lg"
      action={editTeacherWithId}
    >
      <div className="flex flex-col mb-4">
        <label htmlFor={`${instanceId}-name`} className="mb-2 font-semibold">
          Name
        </label>
        <input
          type="text"
          id={`${instanceId}-name`}
          name="name"
          placeholder="Enter teacher's name"
          className="p-3 rounded-lg text-black lg"
          defaultValue={teacher.name}
          required={true}
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
          placeholder="Enter teacher's email"
          className="p-3 border rounded-lg text-black text-lg"
          defaultValue={teacher.email}
          required={true}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor={`${instanceId}-designation`} className="mb-2 font-semibold">
          Designation
        </label>
        <input
          type="text"
          name="designation"
          id={`${instanceId}-designation`}
          placeholder="Enter teacher's designation"
          className="p-3 rounded-lg text-black text-lg"
          defaultValue={teacher.designation}
          required={true}
        />
      </div>
      <div className="flex items-center mb-4">
        <label htmlFor={`${instanceId}-istenured`} className="font-semibold">
          Is Tenured
        </label>
        <input
          type="checkbox"
          name="isTenured"
          id={`${instanceId}-istenured`}
          className="ml-4 size-8"
          defaultChecked={teacher.isTenured}
        />
      </div>
      <div className="flex justify-center">
        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600">
          Edit Teacher
        </button>
      </div>
    </form>
  );
}
