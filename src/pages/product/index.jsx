import Image from "next/image";
import Navbarlogin from "../../components/navbarlogin";
import Footer from "../../components/footer";
import ICON1 from "../../components/image/image 46.png";
import ICON2 from "../../components/image/image 43.png";
import PR from "../../components/image/image 22.png";
import P2 from "../../components/image/VEGGIE.png";
import P3 from "../../components/image/SUMMER.png";
import P4 from "../../components/image/CREAMY.png";
import ICON3 from "../../components/image/image 45.png";

const Product = () => {
  return (
    <div>
      <Navbarlogin />
      <div className="grid md:grid-flow-col h-[580px] font-['Rubik'] divide-x">
        <div className=" bg-white ">
          <div className=" text-center">
            <div className="text-2xl text-[#6A4029] font-bold my-5">
              <h1>Promo for you</h1>
            </div>
            <div className="mb-5">
              <p>
                Coupons will be updated every weeks.
                <br /> Check them out!
              </p>
            </div>
          </div>
          {/* card */}
          <div className="card w-96 bg-[#88B788] shadow-xl my-3 ml-20 w- text-black">
            <div className="card-body">
              <div className="flex">
                <Image src={ICON1} alt="" />
                <div className="text-left ">
                  <h2 className="font-bold text-xl">HAPPY MOTHER’S DAY!</h2>
                  <p>Get one of our favorite menu for free?</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-[#F5C361] shadow-xl my-3 ml-20 w- text-black">
            <div className="card-body">
              <div className="flex">
                <Image src={ICON2} alt="" />
                <div className="text-left ">
                  <h2 className="font-bold text-xl">Get a cup of coffee for free on sunday morning </h2>
                  <p>Only at 7 to 9 AM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-[#88B788] shadow-xl my-3 ml-20 w- text-black">
            <div className="card-body">
              <div className="flex">
                <Image src={ICON1} alt="" />
                <div className="text-left ">
                  <h2 className="font-bold text-xl">HAPPY MOTHER’S DAY!</h2>
                  <p>Get one of our favorite menu for free?</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-[#C59378] shadow-xl my-3 ml-20 w- text-black">
            <div className="card-body">
              <div className="flex">
                <Image src={ICON3} alt="" />
                <div className="text-left ">
                  <h2 className="font-bold text-xl">HAPPY HALLOWEEN!</h2>
                  <p>Do you like chicken wings? Get 1 free only if you buy pinky promise</p>
                </div>
              </div>
            </div>
          </div>
          {/* btn */}
          <button className="btn btn- bg-[#6A4029] w-96 ml-20">
            Apply Coupon
          </button>
          {/* Terms and Condition  */}
         <div className="ml-20">
         <div className="mx-2 text-black mt-5 mb-96">
            <h1>Terms and Condition </h1>
            <p> 1. You can only apply 1 coupon per day </p>
            <p>2. It only for dine in </p>
            <p>3. Buy 1 get 1 only for new user</p>
            <p> 4. Should make member card to apply coupon</p>
          </div>
         </div>
        </div>

        {/* side */}
        <div className=" bg-white ">
          <div className="flex justify-around text-[#6A4029] my-5">
            <div>
              <h3>Favorite & Promo </h3>
            </div>
            <div>
              <h3>Coffee </h3>
            </div>
            <div>
              <h3>Non Coffee </h3>
            </div>
            <div>
              <h3>Food </h3>
            </div>
            <div>
              <h3>Add-on </h3>
            </div>
          </div>
          {/* card */}
          <div className="">
            <div className=" flex flex-wrap justify-center  ">
              <div className="card w-30 bg-white shadow-xl my-10 mx-5 text-black">
                <figure className="mt-2">
                  <Image src={P2} alt="PR" className="rounded-full" />
                </figure>
                <div className="card-body items-center ">
                  <h2 className="card-title text-center mt-1">Veggie tomato mix</h2>
                  <div>
                    <h2 className="text-2xl font-bold text-center my-1">
                      IDR 34.000
                    </h2>
                  </div>
                </div>
              </div>
              <div className="card w-30 bg-white shadow-xl my-10 mx-5 text-black">
                <figure className="mt-2">
                  <Image src={P4} alt="PR" className="rounded-full" />
                </figure>
                <div className="card-body items-center ">
                  <h2 className="card-title text-center mt-1">Hazelnut Latte</h2>
                  <div>
                    <h2 className="text-2xl font-bold text-center my-1">
                      IDR 25.000
                    </h2>
                  </div>
                </div>
              </div>
              <div className="card w-30 bg-white shadow-xl my-10 mx-5 text-black">
                <figure className="mt-2">
                  <Image src={P3} alt="PR" className="rounded-full" />
                </figure>
                <div className="card-body items-center ">
                  <h2 className="card-title text-center mt-1">Summer fried rice</h2>
                  <div>
                    <h2 className="text-2xl font-bold text-center my-1">
                      IDR 32.000
                    </h2>
                  </div>
                </div>
              </div>
              <div className="card w-30 bg-white shadow-xl my-10 mx-5 text-black">
                <figure className="mt-2">
                  <Image src={PR} alt="PR" className="rounded-full" />
                </figure>
                <div className="card-body items-center ">
                  <h2 className="card-title text-center mt-1">Creamy Ice Latte</h2>
                  <div>
                    <h2 className="text-2xl font-bold text-center my-1">
                      IDR 27.000
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" flex flex-wrap justify-center  ">
              <div className="card w-30 bg-white shadow-xl my-10 mx-5 text-black">
                <figure className="mt-2">
                  <Image src={P2} alt="PR" className="rounded-full" />
                </figure>
                <div className="card-body items-center ">
                  <h2 className="card-title text-center mt-1">Veggie tomato mix</h2>
                  <div>
                    <h2 className="text-2xl font-bold text-center my-1">
                      IDR 34.000
                    </h2>
                  </div>
                </div>
              </div>
              <div className="card w-30 bg-white shadow-xl my-10 mx-5 text-black">
                <figure className="mt-2">
                  <Image src={P4} alt="PR" className="rounded-full" />
                </figure>
                <div className="card-body items-center ">
                  <h2 className="card-title text-center mt-1">Hazelnut Latte</h2>
                  <div>
                    <h2 className="text-2xl font-bold text-center my-1">
                      IDR 25.000
                    </h2>
                  </div>
                </div>
              </div>
              <div className="card w-30 bg-white shadow-xl my-10 mx-5 text-black">
                <figure className="mt-2">
                  <Image src={P3} alt="PR" className="rounded-full" />
                </figure>
                <div className="card-body items-center ">
                  <h2 className="card-title text-center mt-1">Summer fried rice</h2>
                  <div>
                    <h2 className="text-2xl font-bold text-center my-1">
                      IDR 32.000
                    </h2>
                  </div>
                </div>
              </div>
              <div className="card w-30 bg-white shadow-xl my-10 mx-5 text-black">
                <figure className="mt-2">
                  <Image src={PR} alt="PR" className="rounded-full" />
                </figure>
                <div className="card-body items-center ">
                  <h2 className="card-title text-center mt-1">Creamy Ice Latte</h2>
                  <div>
                    <h2 className="text-2xl font-bold text-center my-1">
                      IDR 27.000
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
     {/* <Footer /> */}
    </div>
      
  );
};

export default Product;
