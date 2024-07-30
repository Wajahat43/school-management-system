import { fetchFormattedGradesByStudentId } from "@/actions/student-actions";
import StudentGradesTable from "@/components/students/student-grades-table";

async function StudentGrades({ params }: { params: { id: string } }) {
  const studentGrades = await fetchFormattedGradesByStudentId(params.id);

  return (
    <div className="w-full px-10 md:px-60 dark:bg-neutral-900 h-screen pt-16">
      <div className="flex flex-col md:flex-row w-full items-center justify-between md:gap-2">
        <h1 className="text-2xl mb-4">Student's grades</h1>
      </div>
      <StudentGradesTable formattedGrades={studentGrades} />
    </div>
  );
}

export default StudentGrades;
