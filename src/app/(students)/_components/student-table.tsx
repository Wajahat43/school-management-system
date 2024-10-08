import Link from "next/link";
import ConfirmedAction from "@/components/confirmed-action/confirmed-action";
import { deleteStudent, fetchPaginatedStudents } from "@/app/(students)/_actions/student-actions";
import { SearchParams } from "@/utils/types";
import Pagination from "@/components/pagination/Pagination";

async function StudentTable({ searchParams }: { searchParams: SearchParams }) {
  const { students, maxRecords } = await fetchPaginatedStudents(
    searchParams.query,
    searchParams.offset,
    searchParams.limit
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full min-h-full border-collapse borde">
        <thead className="dark:bg-neutral-950">
          <tr>
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border px-4 py-2 text-left">Email</th>
            <th className="border px-4 py-2 text-left">Major</th>
            <th className="border px-4 py-2 text-left">Enrolled</th>
            <th className="border px-4 py-2 text-left">Grades</th>
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
                <td className="border px-4 py-2">
                  <Link href={`/students/${student.id}/grades`}>
                    <div className="text-blue-500 hover:underline">View grades</div>
                  </Link>
                </td>
                <td className="border px-4 py-2">
                  <div className="flex gap-2">
                    <Link
                      className="text-blue-500 hover:underline mr-2"
                      href={`/students/edit/${student.id}`}
                    >
                      Edit
                    </Link>

                    <ConfirmedAction action={deleteStudent.bind(null, student.id)}>
                      <div className="text-red-500 hover:underline">Delete</div>
                    </ConfirmedAction>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <Pagination maxRecords={maxRecords} />
      </div>
    </div>
  );
}

export default StudentTable;
