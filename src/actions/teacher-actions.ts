"use server";

import { Teacher } from "@/models/teacher-model";
import { readFile, writeFile } from "@/utils/helpers/file-helpers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { STUDENT_GRADE_FILE_PATH } from "@/utils/constants";
import { TEACHER_FILE_PATH } from "@/utils/constants";
import { fetchStudentGrades } from "./student-actions";

export async function fetchTeachers(): Promise<Teacher[]> {
  // Delay to simulate network request
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const jsonContent = readFile(TEACHER_FILE_PATH);
  if (!jsonContent) return [];
  const teachers: Teacher[] = JSON.parse(jsonContent);
  return teachers;
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
