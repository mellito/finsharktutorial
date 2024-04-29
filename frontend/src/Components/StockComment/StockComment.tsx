import React, { useEffect, useState } from "react";
import StockCommentForm from "./StockCommentForm";
import { toast } from "react-toastify";
import { commentGetAPI, commentPostAPI } from "../../Services/CommentServices";
import { UseFormReset } from "react-hook-form";
import { CommentGet } from "../../Models/Comment";
import Spinner from "../Spinner/Spinner";
import StockCommentList from "./StockCommentList";

type Props = {
  stockSymbol: string;
};

type commentFormInputs = {
  title: string;
  content: string;
};

const StockComment: React.FC<Props> = ({ stockSymbol }: Props): JSX.Element => {
  const [comments, setComments] = useState<CommentGet[] | null | undefined>(
    null
  );
  const [loading, setLoading] = useState<boolean>();
  const handleComment = (
    e: commentFormInputs,
    reset: UseFormReset<commentFormInputs>
  ) => {
    commentPostAPI(e.title, e.content, stockSymbol)
      .then((res) => {
        if (res) {
          toast.success("Comment created successfully");
          reset();
          getComments();
        }
      })
      .catch((e) => {
        toast.warning(e);
      });
  };

  const getComments = () => {
    setLoading(true);
    commentGetAPI(stockSymbol).then((res) => {
      setLoading(false);
      setComments(res?.data);
    });
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="grid lg:grid-cols-2 p-4 sm:grid-cols-1 sm:gap-2">
      <StockCommentForm handleComment={handleComment} />
      {loading ? <Spinner /> : <StockCommentList comments={comments} />}
    </div>
  );
};

export default StockComment;
