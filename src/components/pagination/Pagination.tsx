"use client";
import React from "react";
import { Button } from "@/components/button/button";
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
          className=" h-10 bg-neutral-900 bg-neutral-90 dark:bg-neutral-50 dark:text-neutral-900 text-white text-lg rounded-lg w-32 text-center hover:cursor-pointer"
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
      
      onClick={() => setOffset(offset - limit)} disabled={offset - limit < 0 }>
        Previous Page
      </Button>
      <Button
        onClick={() => setOffset(offset + limit)}
        disabled={maxRecords != undefined && offset + limit >= maxRecords}
        
      >
        Next Page
      </Button>
    </div>
  );
}

export default Pagination;
