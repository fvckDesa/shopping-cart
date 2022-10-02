// components
import LinkButton from "@components/LinkButton";
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
        <LinkButton className={style.shopBtn} to="/shop" size="xl">
          Shop now <IoIosArrowDropright />
        </LinkButton>
      </div>
      <img
        className={style.illustration}
        src="/illustration.png"
        alt="products image"
      />
    </div>
  );
}

export default Home;
