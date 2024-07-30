import AssignGradeForm from "@/components/teacher/assign-grade-form";
import { fetchGrades } from "@/actions/grade-actions";
import { fetchStudents } from "@/actions/student-actions";
import { fetchSubjects } from "@/actions/subject-actions";

async function AddTeacherPage() {
  const [grades, students, subjects] = await Promise.all([
    fetchGrades(),
    fetchStudents(),
    fetchSubjects(),
  ]);
  return (
    <div className="w-full bg-slate-500 dark:bg-neutral-900 h-screen flex items-center justify-center">
      <div className="flex flex-col w-full max-w-lg items-center">
        <div className="w-full mb-4 px-6">
          <span className="text-2xl text-left block ">Assign grade to a student</span>
        </div>
        <AssignGradeForm grades={grades} students={students} subjects={subjects} />
      </div>
    </div>
  );
}

export default AddTeacherPage;
