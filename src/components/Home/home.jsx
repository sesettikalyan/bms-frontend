import Banner from "../Banner/banner";
import Categories from "./categories";
import Posts from "./posts/posts";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="container mx-auto ">
        <div className="flex md:flex-row flex-col gap-4">
          <div className="w-[90%] md:w-[15%] lg:w-1/5 mx-auto md:mr-auto">
            <Categories />
          </div>

          <div className="w-[100%] lg:w-1/5 mx-auto">
            <Posts />
          </div>
        </div>
      </div>
    </>
  );
}
