import React, { useContext, useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useStores } from "../../store";
import { DataContext } from "../context/dataProvider";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Observer } from "mobx-react-lite";

const UpdatePost = () => {
  const { PostStore } = useStores();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      await PostStore.getPost(id);
    };
    fetchData();
  }, []);
  const [post, setPost] = useState({
    title: PostStore?.post?.title,
    description: PostStore?.post?.description,
    image: PostStore?.post?.image,
    username: PostStore?.post?.username,
    categories: PostStore?.post?.categories,
    createdAt: new Date(),
  });
  const navigate = useNavigate();
  const location = useLocation();
  const [file, setFile] = useState("");
  const onInputChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const { account } = useContext(DataContext);

  useEffect(() => {
    const uploadImage = async () => {
      if (file) {
        const storageRef = ref(storage, `images/${file.name}`);

        await uploadBytes(storageRef, file);

        const url = await getDownloadURL(storageRef);

        setPost((prevPost) => ({
          ...prevPost,
          image: url,
        }));
      }
    };

    if (file) {
      uploadImage();
    }

    setPost((prevPost) => ({
      ...prevPost,
      categories: location.search?.split("=")[1] || "All",
      username: account?.username || "",
    }));
  }, [file, location.search, account]);

  const updateBlogPost = async (e) => {
    e.preventDefault();
    const resp = await PostStore.updatePost(id, post);
    if (resp) {
      navigate(`/details/${id}`);
    }
  };

  const url =
    post?.image ??
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  return (
    <Observer>
      {() => (
        <div className="mx-auto w-[100%] md:w-[90%] ">
          <form onSubmit={updateBlogPost} className="flex flex-col gap-4 mb-6">
            <img
              src={url}
              alt="post"
              className="w-full h-72 object-cover mb-6 rounded"
            />
            <div className="flex flex-col md:flex-row items-start w-[90%] md:w-full mx-auto justify-between gap-4">
              <label
                htmlFor="fileInput"
                className="cursor-pointer flex flex-col md:ml-[1%] ml-[3%] w-[90%]  md:w-[10%]">
                <AiFillPlusCircle className="text-blue-500 text-3xl ml-[4%] md:ml-[12%] lg:ml-[17%]" />
                <p className="text-gray-500 text-sm">Edit image</p>
              </label>
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />

              <input
                type="text"
                placeholder="Title"
                name="title"
                required
                className="px-4 py-2 text-lg border-b border-gray-300 focus:outline-none w-[100%] mx-auto md:w-full"
                value={post.title}
                onChange={(e) => onInputChange(e)}
              />

              
            </div>

            <textarea
              rows="6"
              name="description"
              placeholder="Tell your story..."
              required
              className="w-[90%] mx-auto md:w-full p-4 text-lg border border-gray-300 rounded resize-none focus:outline-none"
              value={post.description}
              onChange={(e) => onInputChange(e)}
            />

<div className="md:w-[10%] ml-auto md:mr-0 mr-[5%]">
          <button
            type="submit"
            className="w-full px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
            Update
          </button>
        </div>
          </form>
        </div>
      )}
    </Observer>
  );
};

export default UpdatePost;
