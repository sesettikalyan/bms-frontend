import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiFillEdit,
  AiFillDelete,
} from "react-icons/ai";
import { useStores } from "../../store";
import { Observer } from "mobx-react-lite";
import { DataContext } from "../context/dataProvider";
import Comment from "./comments/comment";

const DetailView = () => {
  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  const { account } = useContext(DataContext);
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const { PostStore } = useStores();

  useEffect(() => {
    const fetchData = async () => {
      await PostStore.getPost(id);
    };
    fetchData();
  }, [id]);

  const deleteBlog = async () => {
    await PostStore.deletePost(id);
    navigate("/home");
  };

  return (
    <Observer>
      {() => (
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 ">
          <img
            className="w-full h-[50vh] object-cover rounded-md"
            src={PostStore?.post?.image || url}
            alt="post"
          />
          <div className="flex justify-end mt-[1%]">
            {account.username === PostStore?.post?.username && (
              <>
                <Link to={`/update/${PostStore?.post?._id}`}>
                  <AiFillEdit className="text-blue-500 hover:bg-blue-100 p-1 rounded-md border border-gray-400 mx-2 text-3xl cursor-pointer" />
                </Link>
                <AiFillDelete
                  onClick={deleteBlog}
                  className="text-red-500 hover:bg-red-100 p-1 rounded-md border border-gray-400 mx-2 text-3xl cursor-pointer"
                />
              </>
            )}
          </div>
          <h1 className="text-3xl font-bold text-center  mb-4 break-words w-full mx-auto">
            {PostStore?.post?.title}
          </h1>

          <div className="flex flex-col sm:flex-row text-gray-500 mb-4">
            <Link
              to={`/?username=${PostStore?.post?.username}`}
              className="text-blue-500 hover:underline">
              Author:{" "}
              <span className="font-semibold text-black">
                {PostStore?.post?.username}
              </span>
            </Link>
            <span className="sm:ml-auto text-sm">
              {new Date(PostStore?.post?.createdAt).toDateString()}
            </span>
          </div>

          <p className="text-lg leading-relaxed">
            {PostStore?.post?.description}
          </p>

          <Comment post={PostStore?.post} />
        </div>
      )}
    </Observer>
  );
};

export default DetailView;
