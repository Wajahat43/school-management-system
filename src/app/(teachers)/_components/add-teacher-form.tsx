'use client';
import React from "react";
import { Button } from "@/components/button/button";
import { useAddTeacherMutation } from "@/redux/teachers/service";
import { useRouter } from "next/navigation";


export default function AddTeacherForm() {
  const instanceId = React.useId();
  const router = useRouter();
  const [addTeacher, {isLoading}] = useAddTeacherMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    await addTeacher(formData);
    const query = formData.get("name") as string;
    router.push(`/teachers?query=${query}`);
    }
    
  

  return (
    <form className="w-full max-w-2xl dark:bg-neutral-800 p-8 rounded-lg" onSubmit={handleSubmit}>
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
        />
      </div>
      <div className="flex justify-center">
        <Button disabled={isLoading}>Add Teacher</Button>
      </div>
    </form>
  );
}
