import AddTeacherForm from "@/app/(teachers)/_components/add-teacher-form";

function AddTeacherPage() {
  return (
    <div className="w-full bg-slate-500 dark:bg-neutral-900 h-screen flex items-center justify-center">
      <div className="flex flex-col w-full max-w-lg items-center">
        <div className="w-full mb-4 px-6">
          <span className="text-2xl text-left block ">Add Teacher</span>
        </div>
        <AddTeacherForm />
      </div>
    </div>
  );
}

export default AddTeacherPage;
