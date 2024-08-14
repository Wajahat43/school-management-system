import StudentTableSkeleton from "@/app/(students)/_components/student-table-skeleton";
import StudentTable from "@/app/(students)/_components/student-table";
import { Button } from "@/components/button/button";

import Link from "next/link";
import { Suspense } from "react";
import Search from "@/components/search/search";
import { SearchParams } from "@/utils/types";

async function StudentsPage({ searchParams }: { searchParams: SearchParams }) {
  const query = searchParams?.query || "";
  const offset = searchParams?.offset || 0;
  const limit = searchParams?.limit || 10;

  return (
    <div className="w-full px-10 md:px-60 dark:bg-neutral-900 h-screen pt-16">
      <div className="flex flex-col md:flex-row w-full items-center justify-between md:gap-2">
        <h1 className="text-2xl">Students</h1>

        <Link href="/students/add">
          <Button variant={"link"}>Add student</Button>
        </Link>
      </div>
      <Search placeholder="Search Students" />
      <div className="mt-4">
        <Suspense key={`${query}${offset}${limit}`} fallback={<StudentTableSkeleton />}>
          <StudentTable searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}

export default StudentsPage;
