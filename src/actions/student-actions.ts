"use server";

import { Student } from "@/models/student-model";
import { readFile, writeFile } from "@/utils/helpers/file-helpers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { STUDENT_FILE_PATH } from "@/utils/constants";

export async function fetchStudents(): Promise<Student[]> {
  const jsonContent = readFile(STUDENT_FILE_PATH);
  if (!jsonContent) return [];
  const students: Student[] = JSON.parse(jsonContent);
  return students;
}

export async function fetchStudentById(id: string): Promise<Student | undefined> {
  const students = await fetchStudents();
  return students.find((student) => student.id === id);
}

export async function addStudent(formData: FormData): Promise<void> {
  const students = await fetchStudents();
  const student: Student = {
    id: crypto.randomUUID(),
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    major: formData.get("major") as string,
    isEnrolled: (formData.get("isEnrolled") ? true : false) as boolean,
  };
  students.push(student);

  writeFile(STUDENT_FILE_PATH, JSON.stringify(students));
  revalidatePath("/students");
  redirect("/students");
}
