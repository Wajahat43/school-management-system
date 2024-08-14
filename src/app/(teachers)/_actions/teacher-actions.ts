"use server";

import { Teacher } from "@/app/(teachers)/_utils/types";
import { readFile, writeFile } from "@/utils/file-helpers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { STUDENT_GRADE_FILE_PATH } from "@/utils/constants";
import { TEACHER_FILE_PATH } from "@/utils/constants";
import { fetchStudentGrades } from "../../(students)/_actions/student-actions";

interface PaginatedTeachers {
  maxRecords: number;
  teachers: Teacher[];
}

export async function fetchTeachers(): Promise<Teacher[]> {
  // Delay to simulate network request
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const jsonContent = readFile(TEACHER_FILE_PATH);
  if (!jsonContent) return [];
  const teachers: Teacher[] = JSON.parse(jsonContent);
  return teachers;
}

export async function fetchPaginatedTeachers(
  query: string = "",
  offset: number = 0,
  limit: number = 10
): Promise<PaginatedTeachers> {
  try {
    const teachers = await fetchTeachers();
    const filteredTeachers = teachers.filter((teacher) => {
      const teacherProperties = Object.values(teacher);
      const stringProperties = teacherProperties.filter((property) => typeof property === "string");

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
    return {
      maxRecords: filteredTeachers.length,
      teachers: paginatedTeachers,
    };
  } catch (error) {
    console.error("Error fetching teachers:", error);
    return {
      maxRecords: 0,
      teachers: [],
    };
  }
}

export async function fetchTeacherById(id: string): Promise<Teacher | undefined> {
  const teachers = await fetchTeachers();
  return teachers.find((teacher) => teacher.id === id);
}
export async function addTeacher(formData: FormData): Promise<void> {
  const teachers = await fetchTeachers();
  const teacher: Teacher = {
    id: crypto.randomUUID(),
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    designation: formData.get("designation") as string,
    isTenured: (formData.get("isTenured") ? true : false) as boolean,
  };
  teachers.push(teacher);

  writeFile(TEACHER_FILE_PATH, JSON.stringify(teachers));
  revalidatePath("/teachers");

  redirect("/teachers");
}

export async function editTeacher(id: string, formData: FormData): Promise<void> {
  const teachers = await fetchTeachers();
  const teacherIndex = teachers.findIndex((teacher) => teacher.id === id);
  if (teacherIndex === -1) return;

  teachers[teacherIndex] = {
    id,
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    designation: formData.get("designation") as string,
    isTenured: (formData.get("isTenured") ? true : false) as boolean,
  };

  writeFile(TEACHER_FILE_PATH, JSON.stringify(teachers));
  revalidatePath("/teachers");
  redirect("/teachers");
}

export async function deleteTeacher(id: string): Promise<void> {
  const teachers = await fetchTeachers();
  const teacherIndex = teachers.findIndex((teacher) => teacher.id === id);
  if (teacherIndex === -1) return;

  teachers.splice(teacherIndex, 1);

  writeFile("data/teachers-data.json", JSON.stringify(teachers));

  revalidatePath("/teachers");
  redirect("/teachers");
}

export async function assignGrade(formData: FormData): Promise<void> {
  const studentGrades = await fetchStudentGrades();

  const studentGrade = {
    id: crypto.randomUUID(),
    studentId: formData.get("student") as string,
    subjectId: formData.get("subject") as string,
    gradeId: formData.get("grade") as string,
  };

  studentGrades.push(studentGrade);

  writeFile(STUDENT_GRADE_FILE_PATH, JSON.stringify(studentGrades));

  redirect("/teachers");
}
