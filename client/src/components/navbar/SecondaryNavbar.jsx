import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const SecondaryNavbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white border-b border-gray-200">
      <div className="h-16 px-5 flex items-center justify-between">
        <Link
          to="/"
          className="font-bold text-xl flex items-center text-amber-600"
        >
          <img
            src={logo}
            alt="Canvitch"
            className="w-9 h-9 rounded-full mr-3 border border-amber-600"
          />
          Canvitch
        </Link>

        <Link
          to="/"
          className="text-sm px-4 py-2 rounded-full border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white transition"
        >
          Back Home
        </Link>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;