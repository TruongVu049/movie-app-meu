import React, { useState } from "react";
import { SetURLSearchParams } from "react-router-dom";
import Button from "./Button";

export default function Search({
  searchParams,
  setSearchParams,
}: {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}) {
  const [keyword, setKeyword] = useState(searchParams.get("keyword") ?? "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword !== "") {
      searchParams.set("keyword", keyword);
    } else {
      searchParams.delete("keyword");
    }
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
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="outline-none border-none rounded-full flex-1 bg-black py-2 px-6 w-full text-white md:w-80"
      />
      <Button
        tagName="button"
        variant="primary"
        type="submit"
        size="sm"
        className="text-white py-1"
      >
        Search
      </Button>
    </form>
  );
}
