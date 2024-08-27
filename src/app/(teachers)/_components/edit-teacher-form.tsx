import React from "react";
import { editTeacher } from "@/app/(teachers)/_actions/teacher-actions";
import { Teacher } from "@/app/(teachers)/_utils/types";
import { Button } from "@/components/button/button";

export default function EditTeacherForm({ teacher }: { teacher: Teacher }) {
  const instanceId = React.useId();
  const editTeacherWithId = editTeacher.bind(null, teacher.id);

  return (
    <form className="w-full max-w-2x p-8 rounded-lg" action={editTeacherWithId}>
      <div className="flex flex-col mb-4">
        <label htmlFor={`${instanceId}-name`} className="mb-2 font-semibold">
          Name
        </label>
        <input
          type="text"
          id={`${instanceId}-name`}
          name="name"
          placeholder="Enter teacher's name"
          className="p-3 rounded-lg dark:bg-white text-black lg"
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
          className="p-3 border rounded-lg dark:bg-white text-black text-lg"
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
          className="p-3 rounded-lg dark:bg-white text-black text-lg"
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
        <Button>Edit Teacher</Button>
      </div>
    </form>
  );
}
