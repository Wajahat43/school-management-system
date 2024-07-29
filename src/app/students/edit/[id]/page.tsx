import { fetchStudentById } from "@/actions/student-actions";
import StudentForm from "@/components/students/student-form";
import { notFound } from "next/navigation";

async function AddStudentPage({ params }: { params: { id: string } }) {
  const student = await fetchStudentById(params.id);

  if (!student) {
    notFound();
  }

  return (
    <div className="w-full bg-slate-500 dark:bg-neutral-900 h-screen flex items-center justify-center">
      <div className="flex flex-col w-full max-w-lg items-center">
        <div className="w-full mb-4 px-6">
          <span className="text-2xl text-left block ">Edit Student</span>
        </div>
        <StudentForm student={student} />
      </div>
    </div>
  );
}

export default AddStudentPage;
