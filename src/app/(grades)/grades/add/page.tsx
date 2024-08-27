import { fetchGrades } from "@/app/(grades)/_actions/grade-actions";
import GradesForm from "@/app/(grades)/_components/grades-form";

async function AddGrade() {
  const grades = await fetchGrades();

  if (grades.length >= 8) {
    return (
      <div className="flex justify-center items-center min-h-48">
        <p className="text-lg">
          Maximum of 8 grades are allowed. Please delete any grade to add new.
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-2xl bg-slate-500 dark:bg-neutral-800 p-8 rounded-lg">
        <h1 className="text-2xl">Add Grade</h1>
        <GradesForm />
      </div>
    </div>
  );
}

export default AddGrade;
