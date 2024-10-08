import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white text-black shadow-md">
      <nav className="flex justify-center gap-3 py-4">
        <Link
          to="/home"
          className="px-4 py-2 text-base hover:text-blue-500 transition-colors duration-300">
          HOME
        </Link>
        <Link
          to="/about"
          className="px-5 py-2 text-base hover:text-blue-500 transition-colors duration-300">
          ABOUT
        </Link>
        <Link
          to="/contact"
          className="px-5 py-2 text-base hover:text-blue-500 transition-colors duration-300">
          CONTACT
        </Link>
        <Link
          to="/"
          className="px-5 py-2 text-base hover:text-red-500 transition-colors duration-300">
          LOGOUT
        </Link>
      </nav>
    </header>
  );
}
