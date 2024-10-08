"use server";

import { Subject } from "@/app/(subjects)/_utils/types";
import { readFile, writeFile } from "@/utils/file-helpers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { SUBJECT_FILE_PATH } from "@/utils/constants";

export async function fetchSubjects(): Promise<Subject[]> {
  // Delay to simulate network request
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const jsonContent = readFile(SUBJECT_FILE_PATH);
  if (!jsonContent) return [];
  const subjects: Subject[] = JSON.parse(jsonContent);
  return subjects;
}

export async function fetchPaginatedSubjects(
  query: string = "",
  offset: number = 0,
  limit: number = 10
): Promise<{ subjects: Subject[]; maxRecords: number }> {
  const subjects = await fetchSubjects();
  const filteredSubjects = subjects.filter((subject) => {
    return subject.name.toLowerCase().includes(query.toLowerCase());
  });

  const maxRecords = filteredSubjects.length;
  const adjustedOffset = Math.min(offset, maxRecords - 1);
  const adjustedLimit = Math.min(limit, maxRecords - adjustedOffset);

  const paginatedSubjects = filteredSubjects.slice(adjustedOffset, adjustedLimit + adjustedOffset);

  return { subjects: paginatedSubjects, maxRecords };
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
    isCore: (formData.get("isCore") ? true : false) as boolean,
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
    isCore: (formData.get("isCore") ? true : false) as boolean,
  };
  const index = subjects.findIndex((subj) => subj.id === id);
  if (index !== -1) {
    subjects[index] = subject;
    writeFile(SUBJECT_FILE_PATH, JSON.stringify(subjects));
    revalidatePath("/subjects");
    redirect("/subjects");
  }
}

export async function deleteSubject(id: string): Promise<void> {
  const subjects = await fetchSubjects();
  const index = subjects.findIndex((subj) => subj.id === id);

  if (index === -1) {
    return;
  }
  subjects.splice(index, 1);
  writeFile(SUBJECT_FILE_PATH, JSON.stringify(subjects));
  revalidatePath("/subjects");
  redirect("/subjects");
}
