import { fetchSubjectById } from "@/actions/subject-actions";
import { notFound } from "next/navigation";
import SubjectForm from "@/components/subjects/subject-form";

async function EditSubject({ params }: { params: { id: string } }) {
  const subject = await fetchSubjectById(params.id);

  if (!subject) {
    notFound();
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-2xl bg-slate-500 dark:bg-neutral-800 p-8 rounded-lg">
        <h1 className="text-2xl">Edit Subject</h1>
        <SubjectForm subject={subject} />
      </div>
    </div>
  );
}

export default EditSubject;
