import { fetchTeachers } from "@/actions/teacher-actions";
import TeacherTable from "@/components/teacher/teacher-table";
import Link from "next/link";

async function Teachers() {
  const teachers = await fetchTeachers();
  return (
    <div className="w-full px-10 md:px-60 dark:bg-neutral-900 h-screen pt-16">
      <div className="flex flex-col md:flex-row w-full items-center justify-between md:gap-2">
        <h1 className="text-2xl">Teachers</h1>
        <Link
          href="/teachers/add"
          className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <span>Create Teacher</span>{" "}
        </Link>
      </div>
      <div className="mt-4">
        <TeacherTable teachers={teachers} />
      </div>
    </div>
  );
}

export default Teachers;
