import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Teacher } from "@/app/(teachers)/_utils/types";
import { addTeacher } from "@/app/(teachers)/_actions/teacher-actions";

export const teacherApi = createApi({
  reducerPath: "teacherApi",
  refetchOnFocus: true,
  tagTypes: ["teacher"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/",
  }),
  endpoints: (builder) => ({
    getTeachers: builder.query<Teacher[], void>({
      query: () => "teachers",
      providesTags: (result = []) =>
        result.map(({ id }) => ({ type: "teacher", id }) as const),
    }),

    getTeacherById: builder.query<Teacher, string>({
      query: (id) => {
        return `teachers/${id}`;
      },
      providesTags: (result, error, arg) => [
        { type: "teacher", id: arg } as const,
      ],
    }),

    getPaginatedTeachers: builder.query<
      { teachers: Teacher[]; maxRecords: number },
      { query?: string; offset?: number; limit?: number }
    >({
      query: ({ query = "", offset = 0, limit = 10 }) => ({
        url: `teachers/paginated`,
        params: { query, offset, limit },
      }),
      providesTags: (result, error, arg) => [
        ...(result?.teachers || []).map(
          ({ id }) => ({ type: "teacher", id }) as const
        ),

        { type: "teacher", id: "LIST" },
      ],
    }),

    addTeacher: builder.mutation<Teacher, FormData>({
      query: (formData) => ({
        url: `teachers`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: [{ type: "teacher", id: "LIST" }],
    }),

    updateTeacher: builder.mutation<Teacher, { id: string; formData: FormData }>({
      query: ({ id, formData }) => ({
        url: `teachers/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "teacher", id }],
    }),

    deleteTeacher: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `teachers/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "teacher", id }],
    }),

  }),
});

export const {
  useGetTeachersQuery,
  useGetTeacherByIdQuery,
  useGetPaginatedTeachersQuery,
  useAddTeacherMutation,
  useUpdateTeacherMutation,
  useDeleteTeacherMutation,
} = teacherApi;
