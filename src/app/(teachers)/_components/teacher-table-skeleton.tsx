import Skeleton from "@/components/skeleton/Skeleton";

const TeacherTableSkeleton = () => (
  <>
    <table className="min-w-full min-h-full border-collapse">
      <thead>
        <tr>
          <th className="border px-4 py-2 text-left">
            <Skeleton className="w-[96px] max-w-full" />
          </th>
          <th className="border px-4 py-2 text-left">
            <Skeleton className="w-[96px] max-w-full" />
          </th>
          <th className="border px-4 py-2 text-left">
            <Skeleton className="w-[40px] max-w-full" />
          </th>
          <th className="border px-4 py-2 text-left">
            <Skeleton className="w-[24px] max-w-full" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">
            <Skeleton className="w-[40px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[88px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[14px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[24px] max-w-full" />
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2">
            <Skeleton className="w-[40px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[88px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[14px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[24px] max-w-full" />
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2">
            <Skeleton className="w-[40px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[128px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[14px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[24px] max-w-full" />
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2">
            <Skeleton className="w-[40px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[56px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[14px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[24px] max-w-full" />
          </td>
        </tr>
      </tbody>
    </table>
  </>
);

export default TeacherTableSkeleton;
