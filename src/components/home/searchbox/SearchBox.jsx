import React from "react";

const SearchBox = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0, 0, 0, .3)] backdrop-saturate-[saturate(180%) blur(10px)]">
      <div className="max-w-2xl bg-white h-[200px] m-auto mt-16 rounded-lg relative">
        {/* header */}
        <div className="border-b-1 border-gray-200 h-12 relative text-description">
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
          />
        </div>
        {/* content */}
        <div className="flex items-center justify-center h-[52%]">
          <p className="text-description">No recent searches</p>
        </div>
        {/* bottom  */}
        <div className="border-t-1 border-gray-200 h-12 absolute left-0 bottom-0 right-0 text-description flex items-center px-6 gap-4">
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.2"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.2"
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
