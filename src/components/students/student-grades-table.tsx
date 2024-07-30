import { FormattedStudentGrade } from "@/models/student-grade-model";

function StudentGradesTable({ formattedGrades }: { formattedGrades: FormattedStudentGrade[] }) {
  const formattedGradesWithId = formattedGrades.map((grade) => {
    return { id: crypto.randomUUID(), ...grade };
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full min-h-full border-collapse borde">
        <thead className="dark:bg-neutral-950">
          <tr>
            <th className="border px-4 py-2 text-left">Student Name</th>
            <th className="border px-4 py-2 text-left">Subject Name</th>
            <th className="border px-4 py-2 text-left">Grade</th>
            <th className="border px-4 py-2 text-left">GPA</th>
          </tr>
        </thead>
        <tbody>
          {formattedGradesWithId.length === 0 && (
            <tr className="text-center text-lg">
              <td colSpan={5} className="border px-4 py-2 text-center">
                No grades have been assigned to you yet.
              </td>
            </tr>
          )}
          {formattedGradesWithId.length > 0 &&
            formattedGradesWithId.map((grade) => (
              <tr key={grade.id} className="even:dark:bg-neutral-800">
                <td className="border px-4 py-2">{grade.studentName}</td>
                <td className="border px-4 py-2">{grade.subjectName}</td>
                <td className="border px-4 py-2">{grade.gradeName}</td>
                <td className="border px-4 py-2">{grade.gradeGPA}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentGradesTable;
