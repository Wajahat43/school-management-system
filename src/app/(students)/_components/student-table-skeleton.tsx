import Skeleton from "@/components/skeleton/Skeleton";

const StudentTableSkeleton = () => (
  <>
    <table className="min-w-full min-h-full border-collapse">
      <thead>
        <tr>
          <th className="border px-4 py-2 text-left">
            <Skeleton className="w-[32px] max-w-full" />
          </th>
          <th className="border px-4 py-2 text-left">
            <Skeleton className="w-[40px] max-w-full" />
          </th>
          <th className="border px-4 py-2 text-left">
            <Skeleton className="w-[40px] max-w-full" />
          </th>
          <th className="border px-4 py-2 text-left">
            <Skeleton className="w-[64px] max-w-full" />
          </th>
          <th className="border px-4 py-2 text-left">
            <Skeleton className="w-[48px] max-w-full" />
          </th>
          <th className="border px-4 py-2 text-left">
            <Skeleton className="w-[56px] max-w-full" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">
            <Skeleton className="w-[48px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[184px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[56px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[16px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <a>
              <div>
                <Skeleton className="w-[88px] max-w-full" />
              </div>
            </a>
          </td>
          <td className="border px-4 py-2">
            <div className="flex gap-2">
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
        <tr>
          <td className="border px-4 py-2">
            <Skeleton className="w-[40px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[184px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[56px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[24px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <a>
              <div>
                <Skeleton className="w-[88px] max-w-full" />
              </div>
            </a>
          </td>
          <td className="border px-4 py-2">
            <div className="flex gap-2">
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
        <tr>
          <td className="border px-4 py-2">
            <Skeleton className="w-[48px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[176px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[48px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[16px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <a>
              <div>
                <Skeleton className="w-[88px] max-w-full" />
              </div>
            </a>
          </td>
          <td className="border px-4 py-2">
            <div className="flex gap-2">
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
        <tr>
          <td className="border px-4 py-2">
            <Skeleton className="w-[56px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[120px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[128px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <Skeleton className="w-[24px] max-w-full" />
          </td>
          <td className="border px-4 py-2">
            <a>
              <div>
                <Skeleton className="w-[88px] max-w-full" />
              </div>
            </a>
          </td>
          <td className="border px-4 py-2">
            <div className="flex gap-2">
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

export default StudentTableSkeleton;
