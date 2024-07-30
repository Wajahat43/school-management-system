import { Subject } from "@/models/subject-model";
import Link from "next/link";
import ConfirmedAction from "@/components/ui/confirmed-action/confirmed-action";
import { deleteSubject } from "@/actions/subject-actions";

function SubjectTable({ subjects }: { subjects: Subject[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full min-h-full border-collapse borde">
        <thead className="dark:bg-neutral-950">
          <tr>
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border  px-4 py-2 text-left">Description</th>
            <th className="border px-4 py-2 text-left">Credit Hours</th>
            <th className="border  px-4 py-2 text-left">Is Core</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {subjects.length === 0 && (
            <tr className="text-center text-lg">
              <td colSpan={5} className="border px-4 py-2 text-center">
                No Subjects found
              </td>
            </tr>
          )}
          {subjects.length > 0 &&
            subjects.map((subject) => (
              <tr key={subject.id} className="even:dark:bg-neutral-800">
                <td className="border px-4 py-2">{subject.name}</td>
                <td className="border px-4 py-2">{subject.description}</td>
                <td className="border px-4 py-2">{subject.creditHours}</td>
                <td className="border px-4 py-2">{subject.isCore ? "Yes" : "No"}</td>
                <td className="border px-4 py-2">
                  <div className="flex">
                    <Link
                      className="text-blue-500 hover:underline mr-2"
                      href={`/subjects/edit/${subject.id}`}
                    >
                      Edit
                    </Link>

                    <ConfirmedAction action={deleteSubject.bind(null, subject.id)}>
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

export default SubjectTable;
