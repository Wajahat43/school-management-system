import SubjectForm from "@/components/subjects/subject-form";

async function EditSubject() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-2xl bg-slate-500 dark:bg-neutral-800 p-8 rounded-lg">
        <h1 className="text-2xl">Add Subject</h1>
        <SubjectForm />
      </div>
    </div>
  );
}

export default EditSubject;
