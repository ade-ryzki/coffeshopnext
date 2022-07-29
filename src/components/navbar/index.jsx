import styles from "../../../styles/Home.module.css";
import logo from "../../components/image/coffee 1.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles}>
      <div className="navbar bg-white rounded-t-lg text-black font-[Rubix]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Product</a>
              </li>
              <li>
                <a>Your Cart</a>
              </li>
              <li>
                <a>History</a>
              </li>
            </ul>
          </div>
          <Image src={logo} alt="logo" />
          <a className="btn btn-ghost normal-case text-xl">Coffee Shop</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Product</a>
            </li>
            <li>
              <a>Your Cart</a>
            </li>
            <li>
              <a>History</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="mr-4">Login</a>
          <a className="btn rounded-full hover:bg-[#b59047] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#FFBA33] active:shadow-lg transition duration-150 ease-in-out  text-black">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
