/* eslint-disable no-extra-boolean-cast */
import React, { useCallback, useEffect, useState } from "react";
import { useDebounce } from "../../../hooks";
import { useGetDocsQuery } from "../../../rtk/features/doc/docApi";
import MatchItem from "../matchItem/MatchItem";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveId,
  setSelectedDoc,
} from "../../../rtk/features/doc/docSlice";

const SearchBox = () => {
  const query = {};
  const [searchInput, setSearchInput] = useState("");
  const { activeId } = useSelector((state) => state.doc);
  const dispatch = useDispatch();

  const debouncedSearchTerm = useDebounce({
    searchQuery: searchInput,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["q"] = debouncedSearchTerm;
  }

  // fetching data
  const { data, isLoading, isError, error } = useGetDocsQuery(
    { ...query },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const { docs } = data || {};

  // key down handler
  const handleKeyDown = useCallback(
    (e) => {
      let activeIndex = docs?.findIndex((item) => item.id == activeId);
      if (e.keyCode === 38) {
        if (activeIndex === 0) {
          dispatch(setActiveId(docs[docs?.length - 1]?.id));
        } else {
          dispatch(setActiveId(docs[activeIndex - 1]?.id));
        }
      }
      if (e.keyCode === 40) {
        if (activeIndex === docs?.length - 1) {
          dispatch(setActiveId(docs[0]?.id));
        } else {
          dispatch(setActiveId(docs[activeIndex + 1]?.id));
        }
      }
      if (e.keyCode == 13) {
        dispatch(setSelectedDoc(docs[activeIndex]));
      }
    },
    [docs, activeId]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  let content = (
    <div className="flex items-center justify-center h-[100px]">
      <p className="text-description">No recent searches</p>
    </div>
  );

  if (isLoading) {
    content = (
      <div className="h-[100px] px-8 overflow-x-auto">
        <div className="my-4 border-1 border-gray-400 rounded-lg animate-pulse">
          <div className="text-primary  m-4 rounded-lg bg-gray-200 h-2"></div>
          <div className="rounded mx-4 mb-4 font-poppins bg-gray-200 h-2 "></div>
        </div>
      </div>
    );
  }
  if (!isLoading && !isError && docs?.length === 0) {
    content = (
      <div className="flex items-center justify-center h-[100px]">
        <p className="text-description">No Document Found!</p>
      </div>
    );
  }
  if (!isLoading && !isError && docs?.length > 0) {
    content = (
      <div className="h-[410px] tiny:h-[70vh] sm:h-[70vh] px-8 overflow-x-auto ">
        {docs.map((item) => (
          <MatchItem key={item?.id} data={item} />
        ))}
      </div>
    );
  }
  if (!isLoading && isError) {
    content = content = (
      <div className="flex items-center justify-center gap-2 h-[100px] text-orange-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          />
        </svg>

        <p className="text-description">{error?.message}</p>
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0, 0, 0, .3)] backdrop-saturate-[saturate(180%) blur(10px)]">
      <div className="max-w-2xl bg-white m-auto mt-16 rounded-lg relative">
        {/* header */}
        <div className="border-b-1 border-gray-200 h-12 relative text-gray-700">
          <span className="absolute top-[11px] left-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
          <input
            className="w-full h-12 pl-14 outline-none font-poppins py-3"
            type="text"
            name="search"
            placeholder="Search docs.."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        {/* content */}
        {content}
        {/* bottom  */}
        <div className="bg-white border-t-1 border-gray-200 h-12 text-gray-700 flex items-center px-6 gap-4 rounded-bl-lg rounded-br-lg">
          <div className="flex items-center justify-center gap-2">
            <div className="border-1 border-gray-300 p-1 h-6 w-6 flex items-center justify-center text-[8px] font-semibold font-roboto rounded">
              Ent
            </div>
            <small>to select</small>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="border-1 border-gray-300 p-1 h-6 w-6 flex items-center justify-center text-[8px] font-semibold font-roboto rounded">
              <svg width="15" height="15" aria-label="Arrow up" role="img">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.2"
                >
                  <path d="M7.5 11.5v-8M10.5 6.5l-3-3-3 3"></path>
                </g>
              </svg>
            </div>
            <div className="border-1 border-gray-300 p-1 h-6 w-6 flex items-center justify-center text-[8px] font-semibold font-roboto rounded">
              <svg width="15" height="15" aria-label="Arrow down" role="img">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.2"
                >
                  <path d="M7.5 3.5v8M10.5 8.5l-3 3-3-3"></path>
                </g>
              </svg>
            </div>
            <small>to navigate</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
