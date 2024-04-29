import { CommentGet } from "../../Models/Comment";
import StockCommentListItem from "./StockCommentListItem";

type Props = { comments: CommentGet[] | null | undefined };

const StockCommentList = ({ comments }: Props) => {
  return (
    <div>
      {comments &&
        comments.map((comment) => <StockCommentListItem comment={comment} />)}
    </div>
  );
};

export default StockCommentList;
