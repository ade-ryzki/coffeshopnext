import BG from "../../components/image/robert.png";
import logo from "../../components/image/coffee 1.svg";
import google from "../../components/image/google.svg";
import Image from "next/image";
import Link from "next/link";

const Login = () => (
  <div>
    <div className="grid grid-col-3 md:grid-flow-col text-black font-[Rubik]">
      <Image className="" src={BG} alt="" />
      <div className="bg-white ">
        <div className="flex justify-between mx-8 mt-20">
          <div className="h-40 flex ">
            <div>
              <Image src={logo} alt="logo" />
            </div>
            <div>
              <a className="ml-2 normal-case text-xl font-extrabold">
                Coffee Shop
              </a>
            </div>
          </div>
          <div>
            <a className="normal-case text-3xl font-extrabold text-[#6A4029]">
              Login
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <form className="object-center">
            <div>
              <p className=" font-[Rubik] text-xl font-semibold text-[#4E4B66] leading-6 mb-3">
                Email Address :
              </p>
              <input
                type="text"
                className="form-control block w-[500px] px-3 py-2 text-sm font-normal text-[#388087]-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out mb-5 focus:text-gray-700 focus:bg-white focus:border-[#388087]-600 focus:outline-none"
                id="exampleFormControlInput2"
                placeholder="Enter your email address" />
            </div>
            <div>
              <p className="font-[Rubik] text-xl font-semibold text-[#4E4B66] leading-6 mb-3">
                Password :
              </p>
              <input
                type="password"
                className="form-control block w-[500px] px-3 py-2 text-sm font-normal text-[#388087]-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out mb-5 focus:text-gray-700 focus:bg-white focus:border-[#388087]-600 focus:outline-none"
                id="exampleFormControlInput2"
                placeholder="Enter your password" />
            </div>
            <div>
              <Link href={"/forgot"}>
                <p className=" font-[Rubik] text-xl font-semibold text-[#6A4029] hover:text-black leading-6 mb-3">
                  Forgot password?
                </p>
              </Link>
            </div>
          </form>
        </div>
        <div className="flex justify-center mt-10">
          <button className="btn w-[500px] hover:bg-[#b59047] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#FFBA33] active:shadow-lg transition duration-150 ease-in-out  text-black">
            Login
          </button>
        </div>
        <div className="flex justify-center mt-10">
          <button className="btn w-[500px] font-[Poppins]  hover:bg-[#c7c1c1] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#ffff] active:shadow-lg transition duration-150 ease-in-out  text-black">
            <Image src={google} alt="google" />
            <a className="m-2 ">Login with Google</a>
          </button>
        </div>
        <div className="text-center my-10 font-bold">
          <h1>Don’t have an account?</h1>
        </div>
        <div className="flex justify-center mt-10">
          <Link href={"/signup"}>
            <button className="btn w-[500px] hover:bg-[#6c5425] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#6A4029] active:shadow-lg transition duration-150 ease-in-out  text-black">
              Sign up Here
            </button>
          </Link>
        </div>
        {/* footer */}
        <footer className="footer p-10 bg-[#F8F8F8] text-black justify-between font-[Rubik] mt-28">
          <div>
            <div>
              <Image src={logo} alt="logo" />
              <a className="btn btn-ghost normal-case text-xl">Coffee Shop</a>
            </div>
            <p>
              Coffee Shop is a store that sells some good
              <br />
              meals, and especially coffee. We provide
              <br />
              high quality beans
            </p>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current bg-[#FFBA33] rounded-full p-1"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current bg-[#FFBA33] rounded-full p-1"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current bg-[#FFBA33] rounded-full p-1"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col mx-4">
              <span className="footer-title">Product</span>
              <a className="link link-hover text-">Download</a>
              <a className="link link-hover text-">Pricing</a>
              <a className="link link-hover text-">Location</a>
              <a className="link link-hover text-">LoCountries</a>
              <a className="link link-hover text-">Blog</a>
            </div>
            <div className="flex flex-col mx-4">
              <span className="footer-title">Engage</span>
              <a className="link link-hover text-">Coffe Shop</a>
              <a className="link link-hover text-">FAQ</a>
              <a className="link link-hover text-">About Us</a>
              <a className="link link-hover text-">Privacy Policy</a>
              <a className="link link-hover text-">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
);
export default Login;
