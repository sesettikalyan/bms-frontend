import { useContext } from "react";
import { DataContext } from "../../context/dataProvider";
import { MdDelete } from "react-icons/md";
import { useStores } from "../../../store";

const CommentView = ({ comment, setToggle }) => {
  const { account } = useContext(DataContext);
  const { PostStore } = useStores();

  const removeComment = async () => {
    await PostStore.deleteComment(comment?._id);
    setToggle((prev) => !prev);
  };

  return (
    <div className="bg-gray-100 p-4 mt-6 rounded-md shadow-md">
      <div className="flex items-center mb-2">
        <span className="font-semibold text-lg mr-4">{comment?.name}</span>
        <span className="text-sm text-gray-500">
          {new Date(comment?.date).toDateString()}
        </span>
        {comment.name === account.username && (
          <MdDelete
            className="ml-auto cursor-pointer text-bold text-xl hover:text-red-500"
            onClick={removeComment}
          />
        )}
      </div>
      <p className="text-gray-800">{comment?.comment}</p>
    </div>
  );
};

export default CommentView;
