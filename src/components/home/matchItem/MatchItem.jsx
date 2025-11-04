import React from "react";
import { useSelector } from "react-redux";

const MatchItem = (props) => {
  const { title, summary } = props?.data?.heighlight || props?.data || {};

  const insertHeighlightContent = (content) => {
    return content;
  };

  const { activeId } = useSelector((store) => store.doc);

  return (
    <div
      className={`my-4 border-1 border-gray-400 rounded-lg ${
        activeId == props?.data?.id ? "bg-blue text-white" : ""
      }`}
    >
      <div>
        {title && (
          <div
            className={`p-4 rounded-lg ${
              activeId == props?.data?.id ? "" : "bg-white text-primary"
            }`}
            dangerouslySetInnerHTML={{ __html: insertHeighlightContent(title) }}
          ></div>
        )}
        {summary && (
          <div
            className={` px-4 pb-4 font-poppins text-sm ${
              activeId == props?.data?.id ? "text-white" : "text-description"
            }`}
            dangerouslySetInnerHTML={{
              __html: insertHeighlightContent(summary),
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default MatchItem;
