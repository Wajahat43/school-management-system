import { NextResponse } from 'next/server';
import { readFile } from '@/utils/file-helpers';
import { TEACHER_FILE_PATH } from '@/utils/constants';
import { Teacher } from '@/app/(teachers)/_utils/types';


export const GET = async (request: Request) => {
    const jsonContent = readFile(TEACHER_FILE_PATH);
    if (!jsonContent) return [];
    const teachers: Teacher[] = JSON.parse(jsonContent);
    
    return NextResponse.json({teachers});
}