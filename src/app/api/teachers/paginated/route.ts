import { NextRequest, NextResponse } from "next/server";
import { readFile } from "@/utils/file-helpers";
import { TEACHER_FILE_PATH } from "@/utils/constants";
import { Teacher } from "@/app/(teachers)/_utils/types";

interface SearchParams {
  query ?: string;
  offset?: number;
  limit?: number;
}


export async function GET(
  request: NextRequest,
) {

  //  Temporary delay 
  await new Promise((resolve) => setTimeout(resolve, 2000));


  const searchParams = request.nextUrl.searchParams
  const { query="", offset=0, limit=10 }: SearchParams
   = Object.fromEntries(searchParams.entries());


  console.log("Receeived Paginated Request", query, offset, limit);
  try {
    const jsonContent = readFile(TEACHER_FILE_PATH);
    if (!jsonContent) {
      return NextResponse.json({ teachers: [], maxRecords: 0 });
    }
    const teachers: Teacher[] = JSON.parse(jsonContent);

    const filteredTeachers = teachers.filter((teacher) => {
      const teacherProperties = Object.values(teacher);
      const stringProperties = teacherProperties.filter(
        (property) => typeof property === "string"
      );

      return stringProperties.some((property) =>
        property.toLowerCase().includes(query.toLowerCase())
      );
    });

    const totalRecords = filteredTeachers.length;
    const adjustedOffset = Math.min(offset, totalRecords - 1);
    const adjustedLimit = Math.min(limit, totalRecords - adjustedOffset);

    const paginatedTeachers = filteredTeachers.slice(
      adjustedOffset,
      adjustedLimit + adjustedOffset
    );

   
    return NextResponse.json({
      maxRecords: filteredTeachers.length,
      teachers: paginatedTeachers,
    });
  } catch (error) {
    console.error("Error fetching teachers:", error);
    return {
      maxRecords: 0,
      teachers: [],
    };
  }
}
