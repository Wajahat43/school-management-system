import { Grade } from "@/models/grades-model";
import Link from "next/link";
import ConfirmedAction from "@/components/ui/confirmed-action/confirmed-action";
import { deleteGrade } from "@/actions/grade-actions";

function GradesTable({ grades }: { grades: Grade[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full min-h-full border-collapse borde">
        <thead className="dark:bg-neutral-950">
          <tr>
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border px-4 py-2 text-left">GPA</th>
            <th className="border px-4 py-2 text-left">Minimum Marks Required</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {grades.length === 0 && (
            <tr className="text-center text-lg">
              <td colSpan={5} className="border px-4 py-2 text-center">
                No Grades found
              </td>
            </tr>
          )}
          {grades.length > 0 &&
            grades.map((grade) => (
              <tr key={grade.id} className="even:dark:bg-neutral-800">
                <td className="border px-4 py-2">{grade.name}</td>
                <td className="border px-4 py-2">{grade.gpa}</td>
                <td className="border px-4 py-2">{grade.minimumMarks}</td>
                <td className="border px-4 py-2 flex">
                  <Link
                    className="text-blue-500 hover:underline mr-2"
                    href={`/grades/edit/${grade.id}`}
                  >
                    Edit
                  </Link>

                  <ConfirmedAction action={deleteGrade.bind(null, grade.id)}>
                    <div className="text-red-500 hover:underline">Delete</div>
                  </ConfirmedAction>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default GradesTable;
