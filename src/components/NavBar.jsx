import { Link, NavLink } from "react-router";
import logoImage from "../assets/Logo/logo.svg";
import HambarIcon from "../assets/Mobile/Vector.svg";

const NavBar = () => {
  const link = [
    <li key="1" className="h-3.5">
      <NavLink to="/" className="">
        Find Jobs
      </NavLink>
    </li>,
    <li key="2" className="h-3.5">
      <NavLink to="/about" className="">
        Browse Companies
      </NavLink>
    </li>,
    <li key="3">
      <NavLink
        to="/Login"
        className="md:hidden btn btn-ghost text-blue-600 font-semibold hover:bg-blue-50"
      >
        Login
      </NavLink>
    </li>,
    <li key="4">
      <NavLink
        to="/signup"
        className="md:hidden btn bg-[#4C3EE8] hover:bg-[#3b2fc9] text-white bordernone px-6"
      >
        signup
      </NavLink>
    </li>,
  ];

  return (
    <div className="navbar md:bg-transparent">
      <div className="navbar-start  gap-5">
        <Link to="/" className="">
          <img
            src={logoImage}
            alt="QuickHire logo - job search and recruitment platform home"
            className=""
          />
        </Link>

        <div className="hidden lg:flex">
          <ul className="flex flex-row padding-[0px] gap-5">{link}</ul>
        </div>
      </div>

      <div className="navbar-end">
        <div className="flex flex-row justify-center items-center gap-4">
          <Link
            to="/login"
            className="hidden md:flex btn btn-ghost rounded-none text-blue-600 font-semibold hover:bg-blue-50"
          >
            Login
          </Link>
          <div className="hidden md:block w-px h-12 bg-gray-300"></div>
          <Link
            to="/signup"
            className="hidden md:flex btn rounded-none bg-[#4C3EE8] hover:bg-[#3b2fc9] text-white bordernone px-6"
          >
            Sign Up
          </Link>
        </div>

        <div className="dropdown dropdown-bottom dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost bg- lg:hidden bg-white"
          >
            <img
              src={HambarIcon}
              alt="Hamburger menu icon"
              className="h-5 w-5"
            />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
