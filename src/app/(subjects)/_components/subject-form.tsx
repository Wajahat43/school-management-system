import { Subject } from "@/app/(subjects)/_utils/types";
import React from "react";
import { updateSubject, addSubject } from "@/app/(subjects)/_actions/subject-actions";
import { Button } from "@/components/button/button";

function SubjectForm({ subject }: { subject?: Subject }) {
  const instanceId = React.useId();
  const submitAction = subject ? updateSubject.bind(null, subject.id) : addSubject;

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
          placeholder="Enter Subject's name"
          className="p-3 rounded-lg dark:bg-white text-black lg"
          required={true}
          defaultValue={subject?.name}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor={`${instanceId}-description`} className="mb-2 font-semibold">
          Description
        </label>
        <textarea
          name="description"
          id={`${instanceId}-description`}
          placeholder="Enter subject description"
          className="p-3 border rounded-lg dark:bg-white text-black text-lg"
          required={true}
          defaultValue={subject?.description}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor={`${instanceId}-creditHours`} className="mb-2 font-semibold">
          Credit Hours
        </label>
        <input
          type="number"
          name="creditHours"
          id={`${instanceId}-creditHours`}
          placeholder="Enter subject's credit hours"
          className="p-3 rounded-lg dark:bg-white text-black text-lg"
          required={true}
          defaultValue={subject?.creditHours}
        />
      </div>
      <div className="flex items-center mb-4">
        <label htmlFor={`${instanceId}-isCore`} className="font-semibold">
          Is Core
        </label>
        <input
          type="checkbox"
          name="isCore"
          id={`${instanceId}-isCore`}
          className="ml-4 size-8 "
          defaultChecked={subject?.isCore}
        />
      </div>
      <div className="flex justify-center">
        <Button>{subject ? "Update" : "Add"} Subject</Button>
      </div>
    </form>
  );
}

export default SubjectForm;
