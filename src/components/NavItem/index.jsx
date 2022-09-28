// components
import { NavLink } from "react-router-dom";
// style
import style from "./NavItem.module.css";

function NavItem({ to, end, children }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `${style.navItem} ${isActive ? style.active : ""}`
      }
      to={to}
      end={end}
    >
      {children}
      <div className={style.underLine} />
    </NavLink>
  );
}

export default NavItem;
