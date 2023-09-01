"use client";

import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  shortenedUrl: string;
  searchString: string;
  toggleCopy: boolean;
  setToggleCopy: Dispatch<SetStateAction<boolean>>;
};

function Card({
  shortenedUrl,
  searchString,
  toggleCopy,
  setToggleCopy,
}: Props) {
  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(shortenedUrl)
      .then(() => console.log(shortenedUrl))
      .catch((error) => console.error(error))
      .finally(() => {
        setToggleCopy(true);
      });
  };

  return (
    <div className="bg-white flex justify-center flex-col items-center mx-auto mt-10 rounded-xl space-y-4 p-6 md:flex-row md:items-center md:space-y-0 md:space-x-10 shadow-sm">
      <div className="flex flex-col space-y-2 w-full font-bold text-xl md:flex-row md:items-center md:space-y-0 md:justify-between md:space-x-0 md:flex-wrap">
        <h1 className="truncate">{searchString}</h1>
        <a
          href={`https://${shortenedUrl}`}
          className="text-teal-400"
          target="_blank"
        >
          https://{shortenedUrl}
        </a>
      </div>
      <button
        onClick={handleCopyLink}
        className={
          !toggleCopy
            ? "bg-teal-400 text-white font-bold p-3 rounded-md hover:bg-teal-200 disabled:bg-teal-800 w-full md:w-auto md:px-10"
            : "bg-violet-900 text-white font-bold p-3 rounded-md w-full md:w-auto md:px-10"
        }
      >
        {!toggleCopy ? "Copy" : "Copied!"}
      </button>
    </div>
  );
}

export default Card;
