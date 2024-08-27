'use client'

import React from "react";

import { Button } from "@/components/button/button";
import {useGetTeacherByIdQuery, useUpdateTeacherMutation} from "@/redux/teachers/service";
import { useRouter } from "next/navigation";

export default function EditTeacherForm({ teacherId }: { teacherId: string }) {
  const instanceId = React.useId();
  const router = useRouter();
  const { data: teacher, error,isLoading } = useGetTeacherByIdQuery(teacherId);
  const [updateTeacher, {isLoading: updateLoading}] = useUpdateTeacherMutation();

  if(isLoading){
    return <h1>Loading teacher data...</h1>
  }
 
  if (error  || !teacher) {
    return <h1> Data  notf ound</h1>;
  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    await updateTeacher({id: teacherId, formData});
    router.push(`/teachers/?query=${formData.get("name")}`);
  
  }

  return (
    <form className="w-full max-w-2x p-8 rounded-lg" onSubmit={handleSubmit}>
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
        <Button disabled={updateLoading}>Edit Teacher</Button>
      </div>
    </form>
  );
}
