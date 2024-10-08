const Post = ({ post }) => {
  const url =
    post?.image ??
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";

  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  return (
    <div className="border border-gray-300 rounded-lg m-2 flex flex-col items-center h-80">
      <img
        className="w-full h-36 object-cover rounded-t-lg"
        src={url}
        alt="post"
      />
      <p className="text-gray-500 text-sm p-2">{post?.categories}</p>
      <h2 className="text-lg font-semibold p-2">
        {addEllipsis(post?.title, 20)}
      </h2>
      <p className="text-gray-500 text-sm p-2">Author: {post?.username}</p>
      <p className="text-base p-2 break-words w-full text-center">
        {addEllipsis(post?.description, 100)}
      </p>
    </div>
  );
};

export default Post;
