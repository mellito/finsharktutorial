import React from "react";
import { CommentGet } from "../../Models/Comment";

type Props = {
  comment: CommentGet;
};

const StockCommentListItem = ({ comment }: Props) => {
  return (
    <div className="relative ml-4 p-4  w-full border rounded-lg bg-white shadow-lg overflow-auto flex-auto">
      <div className="relative flex gap-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
              {comment.title}
            </p>
          </div>
          <p className="text-dark text-sm">{comment.createdBy}</p>
        </div>
      </div>
      <p className="mt-4 pr-2 text-gray-500 overflow-auto">{comment.content}</p>
    </div>
  );
};

export default StockCommentListItem;
