import React from "react";
import { useDispatch } from "react-redux";
import { clearSelectedDoc } from "../../../rtk/features/doc/docSlice";

const Details = ({ data }) => {
  const { title, content, summary, jurisdiction, year } = data || {};

  const dispatch = useDispatch();
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0, 0, 0, .3)] backdrop-saturate-[saturate(180%) blur(10px)] font-roboto ">
      <div className="max-w-3xl h-[90vh] bg-white m-auto mt-8 rounded-lg relative p-8 overflow-y-scroll">
        <span
          className="absolute top-3 right-3 text-gray-500 cursor-pointer"
          onClick={() => {
            dispatch(clearSelectedDoc());
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </span>
        <div className="flex items-center justify-center gap-2 mb-4 text-title">
          <h1 className="text-2xl">{title}</h1>
          <h5 className="mt-1">
            - {jurisdiction}, {year}
          </h5>
        </div>
        <div className="text-sm text-gray-700 whitespace-pre-line">
          <p className="mb-4 text-pretty">{content}</p>
          <p>
            <span className="font-roboto font-medium underline">Summary:</span>{" "}
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
