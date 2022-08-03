import styles from "../../../styles/Home.module.css";
import BG from "../../components/image/nathan.png";
import teamwork from "../../components/image/teamwork.png";
import checklist from "../../components/image/checklist.png";
import PR from "../../components/image/image 22.png";
import CK from "../../components/image/Vector.svg";
import MAP from "../../components/image/map.svg";
import NF from "../../components/image/netflix.png";
import DC from "../../components/image/discord.png";
import SP from "../../components/image/spotify.png";
import ICON1 from "../../components/image/user.svg";
import ICON2 from "../../components/image/location.svg";
import ICON3 from "../../components/image/server.svg";
import AVATAR from "../../components/image/Ellipse 175.png";
import AVATAR1 from "../../components/image/Ellipse 175 (1).png";
import AVATAR2 from "../../components/image/Ellipse 175 (2).png";
import star from "../../components/image/star.svg";
import P3 from "../../components/image/SUMMER.png";
import P4 from "../../components/image/CREAMY.png"


import Image from "next/image";

const Landing = () => {
  return (
    <div className={styles}>
      <div className="flex flex-col bg-white font-['Rubik']">
        <Image className="w-full relative" src={BG} alt="" />
        <div className="absolute ml-28 text-5xl  mt-28 text-white invisible md:visible ">
          Start Your Day with <br /> Coffee and Good Meals
          <p className="mt-5 mb-7 text-xl">
            We provide high quality beans, good taste, and healthy <br /> meals
            made by love just for you.Start your day with us <br /> for a
            bigger smile!.
          </p>
          <div>
            <button className=" w-44 h-12 py-1 px-1 text-[#6A4029] font-normal text-xl hover:text-black leading-tight  rounded-md shadow-md hover:bg-[#b59047] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#FFBA33] active:shadow-lg transition duration-150 ease-in-out ">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* card mt- */}
      <div className="bg-white">
        <div className=" flex flex-wrap justify-center mt-[-50px] ">
          <div className="card w-2/3 bg-white shadow-xl ">
            <div className="flex flex-wrap justify-around my-5 ">
              <div className="flex flex-wrap">
                <Image src={ICON1} alt="" />
                <div className='pl-2 text-center text-black'>
                  <p className="font-bold">90+</p>
                  <p>Staff</p>
                </div>
                <div className="divider divider-horizontal"/>
              </div>
              <div className="flex flex-wrap ">
                <Image src={ICON2} alt="" />
                <div className='pl-2 text-center text-black '>
                  <p className="font-bold">30+</p>
                  <p>Stores</p>
                </div>
                <div className="divider divider-horizontal text-center first-letter:"/>
              </div>
              <div className="flex flex-wrap">
                <Image src={ICON3} alt="" />
                <div className='pl-2 text-center text-black'>
                  <p className="font-bold">999+</p>
                  <p>Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section-2 */}
      <div className="grid grid-col-2 md:grid-flow-col font-['Rubik']">
        <div className="bg-white text-center">
          <div className="my-10 text-center">
            <Image src={teamwork} alt="teamwork" />
          </div>
        </div>
        <div className="bg-white text-black ">
          <div className="mx-5 my-24">
            <div className="mb-5 font-bold text-3xl">
              <h1>
                We Provide Good Coffee <br />
                and Healthy Meals{" "}
              </h1>
            </div>
            <div>
              <p>
                You can explore the menu that we provide with fun and have{" "}
                <br />
                their own taste and make your day better.
              </p>
            </div>
            <div className="flex mt-2">
              <Image src={checklist} alt="checklist" />
              <p className="pl-2">High quality beans</p>
            </div>
            <div className="flex mt-2">
              <Image src={checklist} alt="checklist" />
              <p className="pl-2">
                Healthy meals, you can request the ingredients{" "}
              </p>
            </div>
            <div className="flex mt-2">
              <Image src={checklist} alt="checklist" />
              <p className="pl-2">
                Chat with our staff to get better experience for ordering
              </p>
            </div>
            <div className="flex mt-2">
              <Image src={checklist} alt="checklist" />
              <p className="pl-2">
                Free member card with a minimum purchase of IDR 200.000.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* section card */}
      <div className="bg-[#ececec] text-[#0B132A]">
        {/* tanya  */}
        <div className="text-center ">
          <h1 className="text-3xl text-[#ececec]">Here is People’s Favorite</h1>
          <p className="text-xl text-[#ececec]">
            Let’s choose and have a bit taste of poeple’s favorite. It might be
            yours too!
          </p>
        </div>
        <div className="text-center mt-5 ">
          <h1 className="text-3xl">Here is People’s Favorite</h1>
          <p className="text-xl">
            Let’s choose and have a bit taste of poeple’s favorite. It might be
            yours too!
          </p>
        </div>
        {/* card */}
        <div className=" flex flex-wrap justify-center  ">
          <div className="card w-96 bg-white shadow-xl my-10 mx-5">
            <figure className="px-10 pt-10">
              <Image src={PR} alt="PR" className="rounded-full" />
            </figure>
            <div className="card-body items-center ">
              <h2 className="card-title text-center my-5">Hazelnut Latte</h2>
              <div>
                <div className="flex my-5">
                  <Image src={CK} alt="CK" />
                  <p className="ml-2">HazelnutSyrup </p>
                </div>
                <div className="flex my-5">
                  <Image src={CK} alt="CK" />
                  <p className="ml-2"> Wanilla Whipped Cream</p>
                </div>
                <div className="flex my-5">
                  <Image src={CK} alt="CK" />
                  <p className="ml-2">Ice / Hot</p>
                </div>
                <div className="flex my-5">
                  <Image src={CK} alt="CK" />
                  <p className="ml-2">Sliced Banana on Top </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-center my-5">
                    IDR 25.000
                  </h2>
                </div>
              </div>
              <div className="card-actions">
                <button className="btn rounded-full hover:bg-[#FFBA33] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#ffff] active:shadow-lg transition duration-150 ease-in-out">
                  Order Now
                </button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-white shadow-xl my-10 mx-5">
            <figure className="px-10 pt-10">
              <Image src={P4} alt="P4" className="rounded-full" />
            </figure>
            <div className="card-body items-center ">
              <h2 className="card-title text-center my-5">Pinky Promise</h2>
              <div>
                <div className="flex my-5">
                  <Image src={CK} alt="CK" />
                  <p className="ml-2">HazelnutSyrup </p>
                </div>
                <div className="flex my-5">
                  <Image src={CK} alt="CK" />
                  <p className="ml-2"> Wanilla Whipped Cream</p>
                </div>
                <div className="flex my-5">
                  <Image src={CK} alt="CK" />
                  <p className="ml-2">Ice / Hot</p>
                </div>
                <div className="flex my-5">
                  <Image src={CK} alt="CK" />
                  <p className="ml-2">Sliced Banana on Top </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-center my-5">
                    IDR 30.000
                  </h2>
                </div>
              </div>
              <div className="card-actions">
                <button className="btn rounded-full hover:bg-[#FFBA33] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#ffff] active:shadow-lg transition duration-150 ease-in-out">
                  Order Now
                </button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-white shadow-xl my-10 mx-5">
            <figure className="px-10 pt-10">
              <Image src={P3} alt="P3" className="rounded-full" />
            </figure>
            <div className="card-body items-center ">
              <h2 className="card-title text-center my-5">Rice</h2>
              <div>
                <div className="flex my-5">
                  <Image src={CK} alt="CK" />
                  <p className="ml-2">HazelnutSyrup </p>
                </div>
                <div className="flex my-5">
                  <Image src={CK} alt="CK" />
                  <p className="ml-2"> Wanilla Whipped Cream</p>
                </div>
                <div className="flex my-5">
                  <Image src={CK} alt="CK" />
                  <p className="ml-2">Ice / Hot</p>
                </div>
                <div className="flex my-5">
                  <Image src={CK} alt="CK" />
                  <p className="ml-2">Sliced Banana on Top </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-center my-5">
                    IDR 25.000
                  </h2>
                </div>
              </div>
              <div className="card-actions">
                <button className="btn rounded-full hover:bg-[#FFBA33] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#ffff] active:shadow-lg transition duration-150 ease-in-out">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* map */}
        <div>
          <div className="mt-10 text-center text-black font-bold text-3xl ">
            <h3>
              Visit Our Store in the <br /> Spot on the Map Below{" "}
            </h3>
          </div>
          <div className="mt-10 text-center text-[#4F5665]  text-lg ">
            <p>
              See our store in every city on the spot and spen your good day
              there.See <br /> you soon!{" "}
            </p>
          </div>
          <div className=" text-center mt-10">
            <Image src={MAP} alt="map" />
          </div>
        </div>
      </div>
      {/* our partner */}
      <div className="bg-[#ececec] font-['Rubik']">
        <div className="text-center text-black font-bold text-4xl">
          <h2>Our Partner</h2>
        </div>
        <div className="flex flex-wrap justify-center mt-10 ">
        <div className="mx-2 item-center">
            <Image src={DC} alt="" />
          </div>
          <div className="mx-2 item-center">
            <Image src={SP} alt="" />
          </div>
          <div className="mx-2 item-center">
            <Image src={DC} alt="" />
          </div>
          <div className="mx-2 item-center">
            <Image src={SP} alt="" />
          </div>
        </div>
      </div>
      {/* card slide */}
      <div className="bg-[#ececec] text-[#0B132A] "> 
      <div className="text-center text-[#ececec] font-bold text-4xl">
          <h2>Loved by Thousands of <br /> Happy Customer</h2>
        </div>
      <div className="text-center text-black font-bold text-4xl">
          <h2>Loved by Thousands of <br /> Happy Customer</h2>
        </div>
        <div className="text-lg text-center mt-4">
          <p clasName=''>These are the stories of our customers who have visited us with great <br /> pleasure</p>
        </div>
        <div className="container px-4 flex-grow w-full py-4 sm:py-16 mx-auto">
          <div className="mx-auto w-full md:w-4/5 px-4">
            <div className="container my-8">
              <div id="scrollContainer" className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8">

                <div className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg">
                  <div className="card w-96 bg-white text-black">
                    <div className="card-body">
                      <div className='flex justify-between'>
                        <div className='flex'>
                          <Image src={AVATAR} alt='' />
                          <div className='pl-2'>
                            <h1 className="font-bold">Viezh Robert</h1>
                            <h4>Warsaw, Poland</h4>
                          </div>
                        </div>
                        <div className=''>
                          <h4>4.5</h4>
                          <Image src={star} alt='' />
                        </div>
                      </div>
                      <p>Wow...I am very happy to spend my whole <br /> day here.the Wi-fi is good, and <br /> the coffee and meals tho. I like it here!! Very recommended!</p>
                    </div>
                  </div>
                </div>
                <div className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg">
                  <div className="card w-96 bg-white text-black">
                    <div className="card-body">
                      <div className='flex justify-between'>
                        <div className='flex'>
                          <Image src={AVATAR1} alt='' />
                          <div className='pl-2'>
                            <h1 className="font-bold">Yessica Christy</h1>
                            <h4>Shanxi, China</h4>
                          </div>
                        </div>
                        <div className=''>
                          <h4>4.5</h4>
                          <Image src={star} alt='' />
                        </div>
                      </div>
                      <p>I like it because I like to travel far and still can <br /> make my day better just by drinking their <br /> Hazelnut Latte</p>
                    </div>
                  </div>
                </div>
                <div className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg">
                  <div className="card w-96 bg-white text-black">
                    <div className="card-body">
                      <div className='flex justify-between'>
                        <div className='flex'>
                          <Image src={AVATAR2} alt='' />
                          <div className='pl-2'>
                            <h1 className="font-bold">Kim Young Jou </h1>
                            <h4>Seoul, South Korea</h4>
                          </div>
                        </div>
                        <div className=''>
                          <h4>4.5</h4>
                          <Image src={star} alt='' />
                        </div>
                      </div>
                      <p> “This is very unusual for my taste, I haven’t <br /> liked coffee before but their coffee is the <br /> best! and yup, you have to order the chicken wings, the best in town!</p>
                    </div>
                  </div>

                </div>
                <div className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg">
                  <div className="card w-96 bg-white text-black">
                    <div className="card-body">
                      <div className='flex justify-between'>
                        <div className='flex'>
                          <Image src={AVATAR} alt='' />
                          <div className='pl-2'>
                            <h1 className="font-bold">Viezh Robert</h1>
                            <h4>Warsaw, Poland</h4>
                          </div>
                        </div>
                        <div className=''>
                          <h4>4.5</h4>
                          <Image src={star} alt='' />
                        </div>
                      </div>
                      <p>Wow...I am very happy to spend my whole <br /> day here.the Wi-fi is good, and <br /> the coffee and meals tho. I like it here!! Very recommended!</p>
                    </div>
                  </div>
                </div>
                <div className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg">
                  <div className="card w-96 bg-white text-black">
                    <div className="card-body">
                      <div className='flex justify-between'>
                        <div className='flex'>
                          <Image src={AVATAR1} alt='' />
                          <div className='pl-2'>
                            <h1 className="font-bold">Yessica Christy</h1>
                            <h4>Shanxi, China</h4>
                          </div>
                        </div>
                        <div className=''>
                          <h4>4.5</h4>
                          <Image src={star} alt='' />
                        </div>
                      </div>
                      <p>I like it because I like to travel far and still can <br /> make my day better just by drinking their <br /> Hazelnut Latte</p>
                    </div>
                  </div>
                </div>
                <div className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg">
                  <div className="card w-96 bg-white text-black">
                    <div className="card-body">
                      <div className='flex justify-between'>
                        <div className='flex'>
                          <Image src={AVATAR2} alt='' />
                          <div className='pl-2'>
                            <h1 className="font-bold">Kim Young Jou </h1>
                            <h4>Seoul, South Korea</h4>
                          </div>
                        </div>
                        <div className=''>
                          <h4>4.5</h4>
                          <Image src={star} alt='' />
                        </div>
                      </div>
                      <p> “This is very unusual for my taste, I haven’t <br /> liked coffee before but their coffee is the <br /> best! and yup, you have to order the chicken wings, the best in town!</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="bg-[#ececec]">
        <div className=" flex flex-wrap justify-center mb-[-30px] ">
          <div className="card w-2/3 bg-white shadow-xl ">
            <div className="flex flex-wrap justify-around my-5 ">
              <div className="flex flex-wrap">
                <Image src={ICON1} alt="" />
                <div className='pl-2 text-center text-black'>
                  <p className="font-bold">90+</p>
                  <p>Staff</p>
                </div>
              </div>
              <div className="flex flex-wrap ">
                <Image src={ICON2} alt="" />
                <div className='pl-2 text-center text-black '>
                  <p className="font-bold">30+</p>
                  <p>Stores</p>
                </div>
              </div>
              <div className="flex flex-wrap">
                <Image src={ICON3} alt="" />
                <div className='pl-2 text-center text-black'>
                  <p className="font-bold">999+</p>
                  <p>Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
