import React from "react";
import { updateGrade, addGrade } from "@/actions/grade-actions"; // Assuming you have these actions
import { Button } from "../ui/button";
import { Grade } from "@/models/grades-model";

function GradeForm({ grade }: { grade?: Grade }) {
  const instanceId = React.useId();
  const submitAction = grade ? updateGrade.bind(null, grade.id) : addGrade;

  return (
    <form className="w-full max-w-2xl dark:bg-neutral-800 p-8 rounded-lg" action={submitAction}>
      <div className="flex flex-col mb-4">
        <label htmlFor={`${instanceId}-name`} className="mb-2 font-semibold">
          Grade Name
        </label>
        <input
          type="text"
          id={`${instanceId}-name`}
          name="name"
          placeholder="Enter grade name (e.g., A, B, C)"
          className="p-3 rounded-lg dark:bg-white text-black lg"
          required={true}
          defaultValue={grade?.name}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor={`${instanceId}-minimumMarks`} className="mb-2 font-semibold">
          Minimum Marks
        </label>
        <input
          type="number"
          name="minimumMarks"
          id={`${instanceId}-minimumMarks`}
          placeholder="Enter minimum marks for this grade"
          className="p-3 rounded-lg dark:bg-white text-black text-lg"
          required={true}
          defaultValue={grade?.minimumMarks}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor={`${instanceId}-gpa`} className="mb-2 font-semibold">
          GPA
        </label>
        <input
          type="number"
          step="0.1"
          name="gpa"
          id={`${instanceId}-gpa`}
          placeholder="Enter GPA value (e.g., 4.0)"
          className="p-3 rounded-lg dark:bg-white text-black text-lg"
          required={true}
          defaultValue={grade?.gpa}
        />
      </div>
      <div className="flex justify-center">
        <Button>{grade ? "Update" : "Add"} Grade</Button>
      </div>
    </form>
  );
}

export default GradeForm;
