import Navbar from "@/components/Navbar";
import SearchInput from "@/components/SearchInput";
import SearchItem from "@/components/SearchItem";
import Sidebar from "@/components/Sidebar";
import React from "react";

export default function Search() {
  return (
    <div
      className=" bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto  "
    >
      <Navbar className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Search</h1>
          <SearchInput />
        </div>
      </Navbar>

      <div>
        <SearchItem />
      </div>
    </div>
  );
}
