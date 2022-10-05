// types
import PropTypes from "prop-types";
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

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  end: PropTypes.bool,
  children: PropTypes.node,
};

export default NavItem;
