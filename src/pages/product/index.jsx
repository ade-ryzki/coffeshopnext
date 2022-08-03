import Image from "next/image";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import teamwork from "../../components/image/teamwork.png";

const Product = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="grid grid-col-3 md:grid-flow-col font-['Rubik']">
          <div className="bg-white text-center">
            <div className="col-span-2 my-10 text-center">
                test1
            </div>
          </div>

          <div className=" bg-white text-center ">
            <div className="my-10 text-center">
            test2
            </div>
            </div>
        </div>
      </div>
      <div className="grid grid-col-3 md:grid-flow-col font-['Rubik']">
  <div className="col-span-2 bg-white">04</div>
  <div className="bg-blue-500">05</div>
</div>
      <Footer />
    </>
  );
};

export default Product;
