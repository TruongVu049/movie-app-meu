import React from "react";
import { SetURLSearchParams } from "react-router-dom";
import Button from "@/components/Button";

export default function Search({
  searchParams,
  setSearchParams,
}: {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Get the form data
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const keyword = formData.get("keyword") as string;
    // Update the URLSearchParams with the new keyword
    const newSearchParams = new URLSearchParams(searchParams);
    if (keyword) {
      newSearchParams.set("keyword", keyword);
    } else {
      newSearchParams.delete("keyword"); // Remove if input is empty
    }
    setSearchParams(newSearchParams);
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
        className="text-white py-1"
      >
        Search
      </Button>
    </form>
  );
}
