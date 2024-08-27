'use client'

import Link from "next/link";
import ConfirmedAction from "@/components/confirmed-action/confirmed-action";
import { SearchParams } from "@/utils/types";
import Pagination from "@/components/pagination/Pagination";
import { useDeleteTeacherMutation, useGetPaginatedTeachersQuery } from "@/redux/teachers/service";
import { Button } from "@/components/button/button";
import TeacherTableSkeleton from "./teacher-table-skeleton";


function TeacherTable({ searchParams }: { searchParams: SearchParams }) {
  const {data, isLoading} = useGetPaginatedTeachersQuery(searchParams);
  const [deleteTeacher, {isLoading: deleteLoading}] = useDeleteTeacherMutation();
  const teachers = data?.teachers || [];
  const maxRecords = data?.maxRecords

  if(isLoading){
    return <TeacherTableSkeleton />
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full min-h-full border-collapse borde">
        <thead className="dark:bg-neutral-950">
          <tr>
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border px-4 py-2 text-left">Email</th>
            <th className="border px-4 py-2 text-left">Designation</th>
            <th className="border px-4 py-2 text-left">Is Tenured</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.length === 0 && (
            <tr className="text-center text-lg">
              <td colSpan={5} className="border px-4 py-2 text-center">
                No teachers found
              </td>
            </tr>
          )}
          {teachers.length > 0 &&
            teachers.map((teacher) => (
              <tr key={teacher.id} className="even:dark:bg-neutral-800">
                <td className="border px-4 py-2">{teacher.name}</td>
                <td className="border px-4 py-2">{teacher.email}</td>
                <td className="border px-4 py-2">{teacher.designation}</td>
                <td className="border px-4 py-2">{teacher.isTenured ? "Yes" : "No"}</td>
                <td className="border px-4 py-2">
                  <div className="flex justify-centere items-center">
                    <Link
                      className="text-blue-500 hover:underline"
                      href={`/teachers/edit/${teacher.id}`}
                    >
                      <Button size="sm" variant={"link"} className="bg-transparent color-[#FF0000] hover:underline" >
                      Edit
                      </Button>
              
                    </Link>

                    <ConfirmedAction action={()=> deleteTeacher(teacher.id)}>
                      <Button size={"sm"} variant={"link"} className="bg-transparent color-[#FF0000] hover:underline m-0" style={{color: "red"}} disabled={deleteLoading}>Delete</Button>
                    </ConfirmedAction>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <Pagination maxRecords={maxRecords} />
      </div>
    </div>
  );
}

export default TeacherTable;
