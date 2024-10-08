import Banner from "../Banner/banner";
import Categories from "./categories";
import Posts from "./posts/posts";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="container ">
        <div className="flex md:flex-row flex-col gap-4">
          <div className="w-[90%] md:w-[20%] mx-auto md:mr-auto">
            <Categories />
          </div>

          <div className="w-[100%]  mx-auto">
            <Posts />
          </div>
        </div>
      </div>
    </>
  );
}
