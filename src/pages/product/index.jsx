import Image from "next/image";
import Footer from "../../components/footer";
import Navbarlogin from "../../components/navbarlogin";
import teamwork from "../../components/image/teamwork.png";


const Product = () => {
  return (
    <>
      <Navbarlogin/>
      <div className="grid grid-col-3 md:grid-flow-col h-[580px] font-['Rubik'] divide-x">
        <div className=" bg-white ">04</div>
        <div className="col-span-2 bg-white">05</div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
