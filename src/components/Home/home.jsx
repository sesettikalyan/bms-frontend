import Banner from "../Banner/banner";
import Categories from "./categories";
import Posts from "./posts/posts";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="container mx-auto ">
        <div className="flex flex-row gap-4">
          <div className="w-[15%] lg:w-1/5 mx-auto">
            <Categories />
          </div>

          <div className="w-[80%] lg:w-1/5 mx-auto">
            <Posts />
          </div>
        </div>
      </div>
    </>
  );
}
