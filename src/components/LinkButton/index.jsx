import React from "react";
import { Link } from "react-router-dom";

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

export default LinkButton;
