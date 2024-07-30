"use server";

import { Student } from "@/models/student-model";
import { readFile, writeFile } from "@/utils/helpers/file-helpers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { STUDENT_FILE_PATH } from "@/utils/constants";
import { STUDENT_GRADE_FILE_PATH } from "@/utils/constants";
import { FormattedStudentGrade, StudentGrade } from "@/models/student-grade-model";
import { fetchGrades } from "@/actions/grade-actions";
import { fetchSubjects } from "@/actions/subject-actions";

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

export async function updateStudent(id: string, formData: FormData): Promise<void> {
  const students = await fetchStudents();
  const student: Student = {
    id: id,
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    major: formData.get("major") as string,
    isEnrolled: (formData.get("isEnrolled") ? true : false) as boolean,
  };
  const index = students.findIndex((student) => student.id === student.id);
  if (index === -1) {
    throw new Error("Student not found");
  }

  students[index] = student;

  writeFile(STUDENT_FILE_PATH, JSON.stringify(students));
  revalidatePath("/students");
  redirect("/students");
}

export async function deleteStudent(id: string): Promise<void> {
  const students = await fetchStudents();
  const index = students.findIndex((student) => student.id === id);
  if (index === -1) {
    throw new Error("Student not found");
  }

  students.splice(index, 1);

  writeFile(STUDENT_FILE_PATH, JSON.stringify(students));
  revalidatePath("/students");
  redirect("/students");
}

export async function fetchStudentGrades(): Promise<StudentGrade[]> {
  const jsonContent = readFile(STUDENT_GRADE_FILE_PATH);
  if (!jsonContent) return [];
  const studentGrades: StudentGrade[] = JSON.parse(jsonContent);
  return studentGrades;
}

export async function fetchFormattedGradesByStudentId(
  studentId: string
): Promise<FormattedStudentGrade[]> {
  //Return following data for each grades
  //Student Name, Subject Name, Grade Name and Grade GPA
  const studentGrades = await fetchStudentGrades();
  const students = await fetchStudents();
  const grades = await fetchGrades();
  const subjects = await fetchSubjects();

  const currentStudentGrades = studentGrades.filter(
    (studentGrade) => studentGrade.studentId === studentId
  );

  const result: FormattedStudentGrade[] = [];

  currentStudentGrades.map((studentGrade) => {
    const student = students.find((student) => student.id === studentGrade.studentId);
    const grade = grades.find((grade) => grade.id === studentGrade.gradeId);
    const subject = subjects.find((subject) => subject.id === studentGrade.subjectId);

    const gradeResult: FormattedStudentGrade = {
      studentName: student?.name,
      gradeName: grade?.name,
      gradeGPA: grade?.gpa,
      subjectName: subject?.name,
    };
    result.push(gradeResult);
  });

  return result;
}
