import { fetchStudents } from "@/actions/student-actions";
import StudentTable from "@/components/students/students-table";

import Link from "next/link";

async function StudentsPage() {
  const students = await fetchStudents();
  return (
    <div className="w-full px-10 md:px-60 dark:bg-neutral-900 h-screen pt-16">
      <div className="flex flex-col md:flex-row w-full items-center justify-between md:gap-2">
        <h1 className="text-2xl">Students</h1>
        <Link
          href="/students/add"
          className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <span>Create Students</span>{" "}
        </Link>
      </div>
      <div className="mt-4">
        <StudentTable students={students} />
      </div>
    </div>
  );
}

export default StudentsPage;
