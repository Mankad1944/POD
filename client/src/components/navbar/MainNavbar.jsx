import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const MainNavbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinksL = [
    { id: 1, to: "/", icon: "home", label: "Home" },
    { id: 2, to: "/about", icon: "contact_page", label: "About" },
    { id: 3, to: "/design", icon: "design_services", label: "Design" },
  ];

  const navLinksR = [
    { id: 1, to: "/cart", icon: "shopping_cart", label: "Cart" },
    { id: 2, to: "/profile", icon: "person", label: "Profile" }
  ];

  const iconClass = ({ isActive }) =>
    `material-symbols-outlined p-2 rounded-full mr-3 transition-all ${
      isActive
        ? "bg-amber-500 text-white"
        : "text-amber-500 hover:text-white hover:bg-amber-500"
    }`;

  const mobileIconClass = ({ isActive }) =>
    `material-symbols-outlined p-2 rounded-full transition-all ${
      isActive
        ? "bg-amber-500 text-white"
        : "text-amber-500 hover:text-white hover:bg-amber-500"
    }`;

  return (
    <nav className="w-full fixed top-0 left-0 z-50 border-b-2 border-amber-500 rounded-b-3xl">
      <div className="w-full h-16 px-5 flex items-center justify-between bg-white rounded-b-3xl">
        {/* logo */}
        <Link to="/" className="font-extrabold text-2xl flex items-center text-amber-600">
          <img src={logo} alt="Canvitch" className="w-10 h-10 rounded-full mr-5 border-2 border-amber-600" />
          <span>Canvitch</span>
        </Link>

        {/* center nav */}
        <div className="flex items-center">
          {/* mobile hamburger */}
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <div className="bg-black h-1 w-6 mb-1 rounded-full"></div>
            <div className="bg-black h-1 w-6 mb-1 rounded-full"></div>
            <div className="bg-black h-1 w-6 rounded-full"></div>
          </button>

          {/* desktop menu */}
          <ul className="hidden md:flex text-amber-500 px-3 py-2">
            {navLinksL.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={iconClass}
                >
                  {item.icon}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* right side */}
        <div className="hidden md:flex items-center">
          {navLinksR.map((items)=>{
            return (
              <Link key={items.id} to={items.to}>
                <span className="material-symbols-outlined mr-4 text-amber-500 hover:bg-amber-500 p-2 hover:text-white rounded-full transition-all">
                  {items.icon}
                </span>
              </Link>
            )
          })}
          
          <a href="/login" type="button" className="bg-amber-50 hover:bg-amber-500 transition-all duration-300 hover:text-white border-2 border-amber-500 rounded-full px-5 py-1.5 text-amber-500">
            Create
          </a>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`md:hidden overflow-hidden bg-white rounded-b-3xl transition-all duration-300 ${
          mobileMenu ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-5 gap-4 items-center text-amber-500">
          {navLinksL.map((item) => (
            <div key={item.id} className="flex gap-3 items-center">
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={mobileIconClass}
                onClick={() => setMobileMenu(false)}
              >
                {item.icon}
              </NavLink>
              <span>{item.label}</span>
            </div>
          ))}

          {navLinksR.map((items)=>{
            return (
              <div key={items.id} className="flex gap-3 items-center">
                <Link
                  to={items.to}
                  className="material-symbols-outlined"
                  onClick={() => setMobileMenu(false)}
                >
                  {items.icon}
                </Link>
                <span>{items.label}</span>
              </div>
            )
          })}

          <a href="/register" type="button" className="bg-amber-50 border-2 border-amber-500 rounded-full px-5 py-1.5 text-amber-500">
            Create
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;