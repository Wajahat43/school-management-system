import Request from  "next/client"
import { NextRequest, NextResponse } from "next/server"
import { Teacher } from "@/app/(teachers)/_utils/types";
import { readFile, writeFile } from "@/utils/file-helpers";
import { TEACHER_FILE_PATH } from "@/utils/constants";

export async function GET (request: Request) {
    // Delay to simulate network request
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const jsonContent = readFile(TEACHER_FILE_PATH);
  if (!jsonContent) return [];
  const teachers: Teacher[] = JSON.parse(jsonContent);
  
    return NextResponse.json(teachers)
}

export async function POST (request: Request) {
    // Delay to simulate network request
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const formData = await request.formData();
    const newTeacher: Teacher = {
        id: crypto.randomUUID(),
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        designation: formData.get("designation") as string,
        isTenured: formData.get("isTenured") === "on",
    }

    const jsonContent = readFile(TEACHER_FILE_PATH);
    const teachers: Teacher[] = jsonContent ? JSON.parse(jsonContent) : [];
    const updatedTeachers = [...teachers, newTeacher];
    writeFile(TEACHER_FILE_PATH, JSON.stringify(updatedTeachers));
    return NextResponse.json(newTeacher)
}