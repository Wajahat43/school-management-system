import { fetchGrades } from "@/actions/grade-actions";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import GradesTable from "@/components/grades/grades-table";

async function Grades() {
  const grades = await fetchGrades();
  return (
    <div className="w-full px-10 md:px-60 dark:bg-neutral-900 h-screen pt-16">
      <div className="flex flex-col md:flex-row w-full items-center justify-between md:gap-2">
        <h1 className="text-2xl">Grades</h1>
        <Link href="/grades/add">
          <Button>Add Grade</Button>
        </Link>
      </div>
      <div className="mt-4">
        <GradesTable grades={grades} />
      </div>
    </div>
  );
}

export default Grades;
