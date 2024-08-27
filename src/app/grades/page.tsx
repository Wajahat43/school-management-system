import Link from "next/link";
import { Button } from "@/components/ui/button";
import GradesTable from "@/components/grades/grades-table";
import { Suspense } from "react";
import GradesTableSkeleton from "@/components/grades/grades-table-skeleton";

async function Grades() {
  return (
    <div className="w-full px-10 md:px-60 dark:bg-neutral-900 h-screen pt-16">
      <div className="flex flex-col md:flex-row w-full items-center justify-between md:gap-2">
        <h1 className="text-2xl">Grades</h1>
        <Link href="/grades/add">
          <Button variant={"link"}>Add Grade</Button>
        </Link>
      </div>
      <div className="mt-4">
        <Suspense fallback={<GradesTableSkeleton />}>
          <GradesTable />
        </Suspense>
      </div>
    </div>
  );
}

export default Grades;
