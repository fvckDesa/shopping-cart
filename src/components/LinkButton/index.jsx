// types
import PropTypes from "prop-types";
// components
import { Link } from "react-router-dom";
// style
import style from "./LinkButton.module.css";

function LinkButton({
  children,
  to,
  className,
  size = "lg",
  disabled = false,
  ...props
}) {
  return (
    <button
      type="button"
      className={`${style.linkButton} ${className ?? ""}`}
      disabled={disabled}
      {...props}
    >
      {disabled ? (
        <div className={`${style.link} ${style[size]}`}>{children}</div>
      ) : (
        <Link className={`${style.link} ${style[size]}`} to={to}>
          {children}
        </Link>
      )}
    </button>
  );
}

LinkButton.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg", "xl"]),
  disabled: PropTypes.bool,
  props: PropTypes.object,
};

LinkButton.defaultProps = {
  size: "lg",
  disabled: false,
};

export default LinkButton;
