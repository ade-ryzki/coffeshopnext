import styles from "../../../styles/Home.module.css";
import logo from "../../components/image/coffee 1.svg";
import Image from "next/image";
import Link from "next/link";

const Navbarlogin = () => {
  // const { data, error, loading, isLogin } = useSelector((state) => state.auth);

  return (
    <div className={styles}>
      <div className="navbar bg-white text-black">
        <div className="flex-1">
        <Image src={logo} alt="logo" />
          <a className="btn btn-ghost normal-case text-xl">Coffee Shop</a>
        </div>
        <div className="  navbar-center ">
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
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered bg-white"
            />
          </div>
          
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbarlogin;
