import { fetchStudents } from "@/actions/student-actions";
import StudentTable from "@/components/students/students-table";
import { Button } from "@/components/ui/button";

import Link from "next/link";

async function StudentsPage() {
  const students = await fetchStudents();
  return (
    <div className="w-full px-10 md:px-60 dark:bg-neutral-900 h-screen pt-16">
      <div className="flex flex-col md:flex-row w-full items-center justify-between md:gap-2">
        <h1 className="text-2xl">Students</h1>
        <Link href="/students/add">
          <Button>Add student</Button>
        </Link>
      </div>
      <div className="mt-4">
        <StudentTable students={students} />
      </div>
    </div>
  );
}

export default StudentsPage;
