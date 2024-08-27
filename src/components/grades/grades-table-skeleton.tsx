import Skeleton from "../ui/skeleton/Skeleton";

function GradesTableSkeleton() {
  return (
    <table className="min-w-full min-h-full border-collapse">
      <thead>
        <tr>
          <th className="border px-4 py-2 text-left">
            <Skeleton className="w-[32px] max-w-full" />
          </th>
          <th className="border px-4 py-2 text-left">
            <Skeleton className="w-[24px] max-w-full" />
          </th>
          <th className="border px-4 py-2 text-left">
            <Skeleton className="w-[176px] max-w-full" />
          </th>
          <th className="border px-4 py-2 text-left">
            <Skeleton className="w-[56px] max-w-full" />
          </th>
        </tr>
      </thead>

      <tbody>
        {Array.from({ length: 7 }).map((_, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">
              <Skeleton className="w-[14px] max-w-full" />
            </td>
            <td className="border px-4 py-2">
              <Skeleton className="w-[14px] max-w-full" />
            </td>
            <td className="border px-4 py-2">
              <Skeleton className="w-[16px] max-w-full" />
            </td>
            <td className="border px-4 py-2 flex">
              <a className="mr-2">
                <Skeleton className="w-[32px] max-w-full" />
              </a>
              <div>
                <div>
                  <Skeleton className="w-[48px] max-w-full" />
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GradesTableSkeleton;
