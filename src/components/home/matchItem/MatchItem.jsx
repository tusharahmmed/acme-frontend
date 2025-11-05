import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDoc } from "../../../rtk/features/doc/docSlice";

const MatchItem = (props) => {
  const { title, summary } = props?.data?.heighlight || props?.data || {};

  const dispatch = useDispatch();

  const { activeId } = useSelector((store) => store.doc);

  return (
    <div
      className={`my-4 border-1 border-gray-500 rounded-lg cursor-pointer ${
        activeId == props?.data?.id ? "bg-blue text-white" : ""
      }`}
      onClick={() => {
        dispatch(setSelectedDoc(props?.data));
      }}
    >
      <div>
        {title && (
          <div
            className={`p-4 rounded-lg font-medium ${
              activeId == props?.data?.id ? "" : "bg-white text-primary"
            }`}
            dangerouslySetInnerHTML={{ __html: title }}
          ></div>
        )}
        {summary && (
          <div
            className={` px-4 pb-4 font-poppins text-sm ${
              activeId == props?.data?.id ? "text-white" : "text-gray-600"
            }`}
            dangerouslySetInnerHTML={{
              __html: summary,
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default MatchItem;
