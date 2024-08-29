import AssignGradeForm from "@/app/(teachers)/_components/assign-grade-form";
import { fetchGrades } from "@/app/(grades)/_actions/grade-actions";
import { fetchStudents } from "@/app/(students)/_actions/student-actions";
import { fetchSubjects } from "@/app/(subjects)/_actions/subject-actions";
import withAuth from "@/utils/hoc/withAuth";

async function AddTeacherPage() {
  const [grades, students, subjects] = await Promise.all([
    fetchGrades(),
    fetchStudents(),
    fetchSubjects(),
  ]);
  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-500 dark:bg-neutral-900">
      <div className="flex w-full max-w-lg flex-col items-center">
        <div className="mb-4 w-full px-6">
          <span className="block text-left text-2xl">
            Assign grade to a student
          </span>
        </div>
        <AssignGradeForm
          grades={grades}
          students={students}
          subjects={subjects}
        />
      </div>
    </div>
  );
}

export default AddTeacherPage;
