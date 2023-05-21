"use client";

import { useState } from "react";
import Card from "./Card";

function ShortenedUrlCard({
  search,
}: {
  search: (search: string) => Promise<string>;
}) {
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [searchString, setSearchString] = useState("");
  const [searchedUrl, setSearchedUrl] = useState("");

  const handleSearch = async () => {
    setShortenedUrl(await search(searchString));
    setSearchedUrl(searchString);
  };

  return (
    <div>
      <div className="bg-violet-950 w-96 mx-auto p-10 mt-20 rounded-xl md:w-3/4">
        <div className="flex flex-col space-y-8 md:flex-row md:justify-between md:items-center md:space-y-0 md:space-x-10">
          <input
            type="text"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            className="rounded-md p-3 md:flex-1"
            placeholder="Shorten a link here..."
          />
          <button
            onClick={handleSearch}
            className="bg-teal-400 text-white font-bold p-3 rounded-md hover:bg-teal-200 disabled:bg-teal-800 md:px-10"
          >
            Shorten It!
          </button>
        </div>
      </div>

      {!searchedUrl ? null : (
        <Card shortenedUrl={shortenedUrl} searchString={searchedUrl} />
      )}
    </div>
  );
}

export default ShortenedUrlCard;