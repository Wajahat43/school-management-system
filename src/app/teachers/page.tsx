import { fetchTeachers } from "@/actions/teacher-actions";
import TeacherTable from "@/components/teacher/teacher-table";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function Teachers() {
  const teachers = await fetchTeachers();
  return (
    <div className="w-full px-10 md:px-60 dark:bg-neutral-900 h-screen pt-16">
      <div className="flex flex-col md:flex-row w-full items-center justify-between md:gap-2">
        <h1 className="text-2xl">Teachers</h1>
        <Link href="/teachers/add">
          <Button>Add Teacher</Button>
        </Link>
      </div>
      <div className="mt-4">
        <TeacherTable teachers={teachers} />
      </div>
    </div>
  );
}

export default Teachers;
