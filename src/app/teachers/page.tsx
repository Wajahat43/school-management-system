import TeacherTable from "@/components/teacher/teacher-table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TeacherTableSkeleton from "@/components/teacher/teacher-table-skeleton";
import { Suspense } from "react";

async function Teachers() {
  return (
    <div className="w-full px-10 md:px-60 dark:bg-neutral-900 h-screen pt-16">
      <div className="flex flex-col md:flex-row w-full items-center justify-between md:gap-2">
        <h1 className="text-2xl">Teachers</h1>
        <div className="flex gap-2">
          <Link href="/teachers/grades/assign">
            <Button>Assign Grade</Button>
          </Link>
          <Link href="/teachers/add">
            <Button>Add Teacher</Button>
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <Suspense fallback={<TeacherTableSkeleton />}>
          <TeacherTable />
        </Suspense>
      </div>
    </div>
  );
}

export default Teachers;
