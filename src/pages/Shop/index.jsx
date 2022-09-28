import { useState } from "react";
// components
import { Outlet } from "react-router-dom";
import NavItem from "@components/NavItem";
// style
import style from "./Shop.module.css";

function Shop() {
  const [scroll, setScroll] = useState(0);

  return (
    <div className={style.shop} onScroll={(e) => setScroll(e.target.scrollTop)}>
      <nav className={`${style.shopNavbar} ${scroll > 0 ? style.scroll : ""}`}>
        <NavItem to="trending" end>
          Trending
        </NavItem>
        <NavItem to="streetwear" end>
          Streetwear
        </NavItem>
        <NavItem to="drops" end>
          Drops
        </NavItem>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Shop;
