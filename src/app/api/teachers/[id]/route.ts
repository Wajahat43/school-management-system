import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile } from '@/utils/file-helpers';
import { TEACHER_FILE_PATH } from '@/utils/constants';
import { Teacher } from '@/app/(teachers)/_utils/types';


export const GET = async (request: Request,   { params }: { params: { id: string } }) => {
    console.log("Received Request", params);
    const id = params.id;
    const jsonContent = readFile(TEACHER_FILE_PATH);
    if (!jsonContent) return [];
    const teachers: Teacher[] = JSON.parse(jsonContent);
    const teacher = teachers.find((teacher) => teacher.id === id);
    return NextResponse.json({...teacher});
}

export async function PATCH (request: NextRequest, { params }: { params: { id: string } }) {
    // Delay to simulate network request
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const formData = await request.formData();
    const id = params.id;
    
    const jsonContent = readFile(TEACHER_FILE_PATH);
    const teachers: Teacher[] = jsonContent ? JSON.parse(jsonContent) : [];
    const teacherIndex = teachers.findIndex((teacher) => teacher.id === id);
    if (teacherIndex === -1) return NextResponse.json({ message: "Teacher not found" }, { status: 404 });

    const updatedTeacher: Teacher = {
        id,
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        designation: formData.get("designation") as string,
        isTenured: formData.get("isTenured") === "on",
    }

    teachers[teacherIndex] = updatedTeacher;
    writeFile(TEACHER_FILE_PATH, JSON.stringify(teachers));
    return NextResponse.json(updatedTeacher)

}

export async function DELETE (request: NextRequest, { params }: { params: { id: string } }) {
    // Delay to simulate network request
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const id = params.id;
    
    const jsonContent = readFile(TEACHER_FILE_PATH);
    const teachers: Teacher[] = jsonContent ? JSON.parse(jsonContent) : [];
    const teacherIndex = teachers.findIndex((teacher) => teacher.id === id);
    if (teacherIndex === -1) return NextResponse.json({ message: "Teacher not found" }, { status: 404 });

    teachers.splice(teacherIndex, 1);
    writeFile(TEACHER_FILE_PATH, JSON.stringify(teachers));
    return NextResponse.json({ message: "Teacher deleted successfully" });
}