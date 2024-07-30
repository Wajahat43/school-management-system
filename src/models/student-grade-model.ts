export type StudentGrade = {
  id: string;
  studentId: string;
  subjectId: string;
  gradeId: string;
};

export type FormattedStudentGrade = {
  studentName: string | undefined;
  gradeName: string | undefined;
  gradeGPA: number | undefined;
  subjectName: string | undefined;
};
