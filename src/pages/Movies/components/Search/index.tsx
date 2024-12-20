import React from "react";
import Button from "@/components/Button";
import { SearchProps } from "./lib/types";

export default function Search({ searchParams, setSearchParams }: SearchProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const keyword = new FormData(e.currentTarget as HTMLFormElement).get(
      "keyword"
    ) as string;
    searchParams.set("keyword", keyword);
    setSearchParams(searchParams);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center rounded-full w-full md:w-fit md:h-fit"
    >
      <input
        type="text"
        placeholder="Enter keyword"
        name="keyword"
        defaultValue={searchParams.get("keyword") ?? ""}
        className="outline-none border-none rounded-full flex-1 bg-black py-2 px-6 w-full text-white md:w-80"
      />

      <Button
        tagName="button"
        variant="primary"
        type="submit"
        size="sm"
        className="text-white py-1 ml-2"
      >
        Search
      </Button>
    </form>
  );
}
