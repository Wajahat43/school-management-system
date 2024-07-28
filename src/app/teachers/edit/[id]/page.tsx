import { fetchTeacherById } from "@/actions/teacher-actions";
import { notFound } from "next/navigation";
import EditTeacherForm from "@/components/teacher/edit-teacher-form";

async function EditTeacher({ params }: { params: { id: string } }) {
  const teacher = await fetchTeacherById(params.id);

  if (!teacher) {
    notFound();
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-2xl dark:bg-neutral-800 p-8 rounded-lg">
        <h1 className="text-2xl">Edit Teacher</h1>
        <EditTeacherForm teacher={teacher} />
      </div>
    </div>
  );
}

export default EditTeacher;
