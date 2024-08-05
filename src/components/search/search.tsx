"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { FaSearch } from "react-icons/fa";

function Search({ placeholder = "Search" }: { placeholder?: string }, ...rest: any) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value as string;
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 1000);

  return (
    <div className="flex items-center justify-start dark:bg-white rounded-xl border border-gray-30 mt-4">
      <FaSearch className="text-gray-500 text-lg ml-2 max-w-12" />
      <label className="sr-only" htmlFor="search">
        Search
      </label>

      <input
        {...rest}
        className="p-3 md:w-3/4 dark:text-neutral-900 h-12 w-full border-l-0 dark:bg-white flex-1 focus:outline-none rounded-xl"
        name="query"
        placeholder={placeholder}
        defaultValue={searchParams.get("query")?.toString()}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
