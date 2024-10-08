import { useEffect } from "react";
import { useStores } from "../../../store";
import { Observer } from "mobx-react-lite";
import Post from "./post";
import { Link, useSearchParams } from "react-router-dom";

export default function Posts() {
  const { PostStore } = useStores();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    PostStore.getPosts(category);
  }, [category]);
  return (
    <Observer>
      {() => (
        <>
          {PostStore.posts?.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {PostStore.posts.map((post) => (
                <div key={post?._id} className="p-2">
                  <Link
                    to={`/details/${post?._id}`}
                    className="block no-underline text-inherit">
                    <Post post={post} />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-500 my-8 mx-auto text-center text-lg">
              No data is available for selected category
            </div>
          )}
        </>
      )}
    </Observer>
  );
}
