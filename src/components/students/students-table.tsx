import { Student } from "@/models/student-model";
import Link from "next/link";
import ConfirmedAction from "../confirmed-action/confirmed-action";
import { deleteStudent } from "@/actions/student-actions";

function StudentTable({ students }: { students: Student[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full min-h-full border-collapse borde">
        <thead className="dark:bg-neutral-950">
          <tr>
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border px-4 py-2 text-left">Email</th>
            <th className="border px-4 py-2 text-left">Major</th>
            <th className="border px-4 py-2 text-left">Enrolled</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center py-4">
                No students found.
              </td>
            </tr>
          )}
          {students.length > 0 &&
            students.map((student) => (
              <tr key={student.id} className="even:dark:bg-neutral-800">
                <td className="border px-4 py-2">{student.name}</td>
                <td className="border px-4 py-2">{student.email}</td>
                <td className="border px-4 py-2">{student.major}</td>
                <td className="border px-4 py-2">{student.isEnrolled ? "Yes" : "No"}</td>
                <td className="border px-4 py-2 flex">
                  <Link
                    className="text-blue-500 hover:underline mr-2"
                    href={`/students/edit/${student.id}`}
                  >
                    Edit
                  </Link>

                  <ConfirmedAction action={deleteStudent.bind(null, student.id)}>
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

export default StudentTable;
