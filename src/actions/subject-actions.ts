"use server";

import { Subject } from "@/models/subject-model";
import { readFile, writeFile } from "@/utils/helpers/file-helpers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { SUBJECT_FILE_PATH } from "@/utils/constants";

export async function fetchSubjects(): Promise<Subject[]> {
  const jsonContent = readFile(SUBJECT_FILE_PATH);
  if (!jsonContent) return [];
  const subjects: Subject[] = JSON.parse(jsonContent);
  return subjects;
}

export async function fetchSubjectById(id: string): Promise<Subject | undefined> {
  const subjects = await fetchSubjects();
  return subjects.find((subject) => subject.id === id);
}

export async function addSubject(formData: FormData): Promise<void> {
  const subjects = await fetchSubjects();
  const subject: Subject = {
    id: crypto.randomUUID(),
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    creditHours: parseInt(formData.get("creditHours") as string),
    isCore: (formData.get("isActive") ? true : false) as boolean,
  };
  subjects.push(subject);

  writeFile(SUBJECT_FILE_PATH, JSON.stringify(subjects));
  revalidatePath("/subjects");
  redirect("/subjects");
}

export async function updateSubject(id: string, formData: FormData): Promise<void> {
  const subjects = await fetchSubjects();
  const subject: Subject = {
    id: crypto.randomUUID(),
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    creditHours: parseInt(formData.get("creditHours") as string),
    isCore: (formData.get("isActive") ? true : false) as boolean,
  };
  const index = subjects.findIndex((subj) => subj.id === id);
  if (index !== -1) {
    subjects[index] = subject;
    writeFile(SUBJECT_FILE_PATH, JSON.stringify(subjects));
    revalidatePath("/subjects");
    redirect("/subjects");
  }
}
