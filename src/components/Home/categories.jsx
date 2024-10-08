import { Link, useSearchParams } from "react-router-dom";
import { categories } from "../../constants/data";

const Categories = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <>
      <Link
        to={`/create?category=${category || ""}`}
        className="text-white no-underline">
        <button className="bg-blue-500 text-white px-4 py-2 w-[85%] mt-5 mx-auto block rounded hover:bg-blue-600">
          Create Blog
        </button>
      </Link>

      <div className="border-2  border-gray-200 mt-5 overflow-x-auto w-full">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <td className="border-b-2 border-gray-300 py-2 text-left px-4">
                <Link to="/home" className="no-underline text-black">
                  All Categories
                </Link>
              </td>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="border-b-2 border-gray-200 py-2 px-4">
                  <Link
                    to={`/home?category=${category.type}`}
                    className="no-underline text-black">
                    {category.type}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Categories;
