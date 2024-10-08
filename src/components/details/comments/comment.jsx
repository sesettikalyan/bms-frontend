import { useState, useEffect, useContext } from "react";
import { DataContext } from "../../context/dataProvider";
import { useStores } from "../../../store";
import { Observer } from "mobx-react-lite";
import CommentView from "./commentview";
import { useParams } from "react-router-dom";
// import Comment from "./Comment";

const initialValue = {
  name: "",
  postId: "",
  date: new Date(),
  comment: "",
};

const Comment = ({ post }) => {
  const url = "https://static.thenounproject.com/png/12017-200.png";
  const { id } = useParams();
  const [comment, setComment] = useState(initialValue);
  const [toggle, setToggle] = useState(false);
  const { PostStore } = useStores();
  const { account } = useContext(DataContext);

  useEffect(() => {
    const getData = async () => {
      await PostStore.getAllComments(id);
    };
    getData();
  }, [toggle, post]);

  const handleChange = (e) => {
    setComment({
      ...comment,
      name: account.username,
      postId: post?._id,
      comment: e.target.value,
    });
  };

  const addComment = async (e) => {
    await PostStore.newComment(comment);
    setComment(initialValue);
    setToggle((prev) => !prev);
  };

  return (
    <Observer>
      {() => (
        <div className="space-y-4">
          <div className="flex items-start mt-8 md:space-x-4 space-x-2">
            <img src={url} alt="dp" className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
            <textarea
              className="flex-grow p-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="What's on your mind?"
              onChange={(e) => handleChange(e)}
              value={comment.comment}
            />
            <button
              className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              onClick={(e) => addComment(e)}>
              Post
            </button>
          </div>
          <div>
            {PostStore?.comments &&
              PostStore?.comments.length > 0 &&
              PostStore?.comments.map((comment) => (
                <CommentView
                  key={comment?._id}
                  comment={comment}
                  setToggle={setToggle}
                />
              ))}
          </div>
        </div>
      )}
    </Observer>
  );
};

export default Comment;
