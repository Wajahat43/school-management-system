"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface PaginationProps {
  defaultOffset?: number;
  defaultLimit?: number;
  maxRecords?: number;
}

function Pagination({ defaultOffset = 0, defaultLimit = 10, maxRecords }: PaginationProps) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  let offset = searchParams.get("offset")
    ? parseInt(searchParams.get("offset") as string)
    : defaultOffset;

  const limit = searchParams.get("limit")
    ? parseInt(searchParams.get("limit") as string)
    : defaultLimit;

  const setOffset = (offset: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("offset", offset.toString());

    replace(`${pathName}?${params.toString()}`);
  };

  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const limit = parseInt(event.target.value);
    const params = new URLSearchParams(searchParams);
    params.set("limit", limit.toString());

    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-2">
      <div>
        <label htmlFor="limitSelect" className="sr-only">
          Select Limit:{" "}
        </label>
        <select
          id="limitSelect"
          defaultValue={""}
          onChange={handleLimitChange}
          className="h-12 dark:bg-white dark:text-neutral-900 text-md rounded-lg"
        >
          <option value="" disabled>
            Rows
          </option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
      <Button
        className="h-12"
        onClick={() => setOffset(offset - limit)}
        disabled={offset - limit < 0}
      >
        Previous Page
      </Button>
      <Button
        className="h-12"
        onClick={() => setOffset(offset + limit)}
        disabled={maxRecords != undefined && offset + limit >= maxRecords}
      >
        Next Page
      </Button>
    </div>
  );
}

export default Pagination;