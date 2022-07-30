import styles from "../../../styles/Home.module.css";
import BG from "../../components/image/nathan.png";
import Image from "next/image";

const Landing = () => {
  return (
    <div className={styles}>
      <div className="flex flex-col  hover:bg-transparent hover:bg-black">
        <Image className="" src={BG} alt="" />
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered justify-end"
          />
        </div>
      </div>
    </div>
  );
};
export default Landing;
