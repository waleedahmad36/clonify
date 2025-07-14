"use client";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { CommandMenu } from "./CommadMenu";

const Search = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-stone-900 mb-4 relative rounded flex items-center px-2 py-1.5 text-sm">
        <SearchIcon className="mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent placeholder:text-stone-400 focus:outline-none"
          onFocus={(e) => {
            e.target.blur();
            setOpen(true);
          }}
        />
        <span className="p-1 text-xs flex gap-0.5 items-center shadow bg-stone-700 rounded absolute right-1.5 top-1/2 -translate-y-1/2">
          ⌘K
        </span>
      </div>

      <CommandMenu open={open} setOpen={setOpen} />
    </>
  );
};
export default Search;
