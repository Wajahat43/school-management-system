import Link from "next/link";
import { Button } from "@/components/ui/button";
import SubjectTable from "@/components/subjects/subject-table";
import SubjectTableSkeleton from "@/components/subjects/subject-table-skeleton";
import { Suspense } from "react";
import Search from "@/components/search/search";
import { SearchParams } from "@/models/search-params";

async function Subjects({ searchParams }: { searchParams: SearchParams }) {
  const query = searchParams?.query || "";
  const offset = searchParams?.offset || 0;
  const limit = searchParams?.limit || 10;

  return (
    <div className="w-full px-10 md:px-60 dark:bg-neutral-900 h-screen pt-16">
      <div className="flex flex-col md:flex-row w-full items-center justify-between md:gap-2">
        <h1 className="text-2xl">Subjects</h1>
        <Link href="/subjects/add">
          <Button variant={"link"}>Add Subject</Button>
        </Link>
      </div>

      <Search placeholder="Search Subjects" />
      <div className="mt-4">
        <Suspense key={`${query}${offset}${limit}`} fallback={<SubjectTableSkeleton />}>
          <SubjectTable searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}

export default Subjects;
