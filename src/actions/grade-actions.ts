"use server";

import { Grade } from "@/models/grades-model";
import { readFile, writeFile } from "@/utils/helpers/file-helpers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { GRADE_FILE_PATH } from "@/utils/constants";

export async function fetchGrades(): Promise<Grade[]> {
  const jsonContent = readFile(GRADE_FILE_PATH);
  if (!jsonContent) return [];
  const grades: Grade[] = JSON.parse(jsonContent);
  return grades;
}

export async function fetchGradeById(id: string): Promise<Grade | undefined> {
  const grades = await fetchGrades();
  return grades.find((grade) => grade.id === id);
}

export async function addGrade(formData: FormData): Promise<void> {
  const grades = await fetchGrades();
  const grade: Grade = {
    id: crypto.randomUUID(),
    name: formData.get("name") as string,
    gpa: parseFloat(formData.get("gpa") as string),
    minimumMarks: parseInt(formData.get("minimumMarks") as string),
  };
  grades.push(grade);

  writeFile(GRADE_FILE_PATH, JSON.stringify(grades));
  revalidatePath("/grades");
  redirect("/grades");
}

export async function updateGrade(id: string, formData: FormData): Promise<void> {
  const grades = await fetchGrades();
  const grade: Grade = {
    id: id,
    name: formData.get("name") as string,
    gpa: parseFloat(formData.get("gpa") as string),
    minimumMarks: parseInt(formData.get("minimumMarks") as string),
  };
  const index = grades.findIndex((grade) => grade.id === id);
  if (index === -1) {
    throw new Error("Grade not found");
  }

  grades[index] = grade;

  writeFile(GRADE_FILE_PATH, JSON.stringify(grades));
  revalidatePath("/grades");
  redirect("/grades");
}

export async function deleteGrade(id: string): Promise<void> {
  const grades = await fetchGrades();
  const index = grades.findIndex((grade) => grade.id === id);
  if (index === -1) {
    throw new Error("Grade not found");
  }

  grades.splice(index, 1);

  writeFile(GRADE_FILE_PATH, JSON.stringify(grades));
  revalidatePath("/grades");
  redirect("/grades");
}
