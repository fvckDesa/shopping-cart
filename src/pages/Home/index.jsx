// components
import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";
// style
import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.homePage}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>
          All Streetwear <br /> do you need
        </h1>
        <h2 className={style.subtitle}>
          Hundreds of streetwear items for create your personal style
        </h2>
        <button type="button" className={style.shopBtn}>
          <Link className={style.shopLink} to="/shop">
            Shop now <IoIosArrowDropright />
          </Link>
        </button>
      </div>
      <img
        className={style.illustration}
        src="/shoes-illustration.png"
        alt="shoes illustration"
      />
    </div>
  );
}

export default Home;
