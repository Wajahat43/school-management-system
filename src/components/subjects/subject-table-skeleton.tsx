import Skeleton from "@/components/ui/skeleton/Skeleton";

const SubjectTableSkeleton = () => (
  <>
    <table className="min-w-full min-h-full border-collapse">
      <thead>
        <tr>
          <th className="border px-4 py-2 text-left">
            <Skeleton className="w-[32px] max-w-full" />
          </th>
          <th className="border px-4 py-2 text-left">
            <Skeleton className="w-[200px] max-w-full" />
          </th>
          <th className="border px-4 py-2 text-left">
            <Skeleton className="w-[32px] max-w-full" />
          </th>
          <th className="border px-4 py-2 text-left">
            <Skeleton className="w-[32px] max-w-full" />
          </th>
          <th className="border px-4 py-2 text-left">
            <Skeleton className="w-[32px] max-w-full" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">
            <Skeleton className="w-[32px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[200px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[32px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[32px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <div className="flex">
              <a className="mr-2">
                <Skeleton className="w-[32px] max-w-full" />
              </a>
              <div>
                <div>
                  <Skeleton className="w-[32px] max-w-full" />
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2">
            <Skeleton className="w-[32px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[200px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[32px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[32px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <div className="flex">
              <a className="mr-2">
                <Skeleton className="w-[32px] max-w-full" />
              </a>
              <div>
                <div>
                  <Skeleton className="w-[48px] max-w-full" />
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);

export default SubjectTableSkeleton;
