import { Teacher } from "@/models/teacher-model";
import Link from "next/link";
import { deleteTeacher } from "@/actions/teacher-actions";
import ConfirmedAction from "@/components/ui/confirmed-action/confirmed-action";
import { fetchTeachers } from "@/actions/teacher-actions";

async function TeacherTable() {
  const teachers = await fetchTeachers();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full min-h-full border-collapse borde">
        <thead className="dark:bg-neutral-950">
          <tr>
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border px-4 py-2 text-left">Email</th>
            <th className="border px-4 py-2 text-left">Designation</th>
            <th className="border px-4 py-2 text-left">Is Tenured</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.length === 0 && (
            <tr className="text-center text-lg">
              <td colSpan={5} className="border px-4 py-2 text-center">
                No teachers found
              </td>
            </tr>
          )}
          {teachers.length > 0 &&
            teachers.map((teacher) => (
              <tr key={teacher.id} className="even:dark:bg-neutral-800">
                <td className="border px-4 py-2">{teacher.name}</td>
                <td className="border px-4 py-2">{teacher.email}</td>
                <td className="border px-4 py-2">{teacher.designation}</td>
                <td className="border px-4 py-2">{teacher.isTenured ? "Yes" : "No"}</td>
                <td className="border px-4 py-2">
                  <div className="flex">
                    <Link
                      className="text-blue-500 hover:underline mr-2"
                      href={`/teachers/edit/${teacher.id}`}
                    >
                      Edit
                    </Link>

                    <ConfirmedAction action={deleteTeacher.bind(null, teacher.id)}>
                      <div className="text-red-500 hover:underline">Delete</div>
                    </ConfirmedAction>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherTable;
