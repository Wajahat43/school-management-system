import Link from "next/link";
import { Button } from "@/components/ui/button";
import SubjectTable from "@/components/subjects/subject-table";
import SubjectTableSkeleton from "@/components/subjects/subject-table-skeleton";
import { Suspense } from "react";

async function Subjects() {
  return (
    <div className="w-full px-10 md:px-60 dark:bg-neutral-900 h-screen pt-16">
      <div className="flex flex-col md:flex-row w-full items-center justify-between md:gap-2">
        <h1 className="text-2xl">Subjects</h1>
        <Link href="/subjects/add">
          <Button>Add Subject</Button>
        </Link>
      </div>
      <div className="mt-4">
        <Suspense fallback={<SubjectTableSkeleton />}>
          <SubjectTable />
        </Suspense>
      </div>
    </div>
  );
}

export default Subjects;
