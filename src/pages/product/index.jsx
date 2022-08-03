import Image from "next/image";
import Footer from "../../components/footer";
import Navbarlogin from "../../components/navbarlogin";
import ICON1 from "../../components/image/image 46.png";
import PR from "../../components/image/image 22.png";

const Product = () => {
  return (
    <>
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
          <div className="card w-96 bg-[#88B788] shadow-xl my-3 mx-2 w- text-black">
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
          <div className="card w-96 bg-[#88B788] shadow-xl my-3 mx-2 w- text-black">
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
          <div className="card w-96 bg-[#88B788] shadow-xl my-3 mx-2 w- text-black">
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
          <div className="card w-96 bg-[#88B788] shadow-xl my-3 mx-2 w- text-black">
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

          {/* btn */}
          <button className="btn btn- bg-[#6A4029] w-96 mx-2 m-5">
            Apply Coupon
          </button>
          {/* Terms and Condition  */}
          <div className="mx-2 text-black mt-5">
            <h1>Terms and Condition </h1>
            <p> 1. You can only apply 1 coupon per day </p>
            <p>2. It only for dine in </p>
            <p>3. Buy 1 get 1 only for new user</p>
            <p> 4. Should make member card to apply coupon</p>
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
          <div>
            <div className=" flex flex-wrap justify-center  ">
              <div className="card w-30 bg-blue-500 shadow-xl my-10 mx-5 text-black">
                <figure className="mt-2">
                  <Image src={PR} alt="PR" className="rounded-full" />
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
              <div className="card w-30 bg-blue-500 shadow-xl my-10 mx-5 text-black">
                <figure className="mt-2">
                  <Image src={PR} alt="PR" className="rounded-full" />
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
              <div className="card w-30 bg-blue-500 shadow-xl my-10 mx-5 text-black">
                <figure className="mt-2">
                  <Image src={PR} alt="PR" className="rounded-full" />
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
              <div className="card w-30 bg-blue-500 shadow-xl my-10 mx-5 text-black">
                <figure className="mt-2">
                  <Image src={PR} alt="PR" className="rounded-full" />
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
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Product;
