import TeacherTable from "@/app/(teachers)/_components/teacher-table";
import Link from "next/link";
import { Button } from "@/components/button/button";
import TeacherTableSkeleton from "@/app/(teachers)/_components/teacher-table-skeleton";
import { Suspense } from "react";
import Search from "@/components/search/search";
import { SearchParams } from "@/utils/types";

async function Teachers({ searchParams }: { searchParams: SearchParams }) {
  const query = searchParams?.query || "";
  const offset = searchParams?.offset || 0;
  const limit = searchParams?.limit || 10;
  return (
    <div className="w-full px-10 md:px-60 dark:bg-neutral-900 h-screen pt-16">
      <div className="flex flex-col md:flex-row w-full items-center justify-between md:gap-2">
        <h1 className="text-2xl mb-4">Teachers</h1>
        <div className="flex flex-col md:flex-row md:gap-2">
          <Link href="/teachers/grades/assign">
            <Button variant={"link"}>Assign Grade</Button>
          </Link>
          <Link href="/teachers/add">
            <Button variant="link">Add Teacher</Button>
          </Link>
        </div>
      </div>
      <Search placeholder="Search Teachers" />
      <div className="mt-4">
        <Suspense key={`${query}${offset}${limit}`} fallback={<TeacherTableSkeleton />}>
          <TeacherTable searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}

export default Teachers;
