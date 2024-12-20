import React from "react";
import { Link } from "react-router-dom";
import { ButtonProps } from "./lib/types";
import { getSizeClasses, getVariantClasses } from "./lib/utils";

const Button: React.FC<ButtonProps> = ({
  tagName = "button",
  type = "button",
  href,
  size = "lg",
  variant = "primary",
  className = "",
  children,
  onClick,
  disable = false,
}) => {
  const commonClasses = `
    rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 
    ${getSizeClasses(size)} 
    ${getVariantClasses(variant)} 
    ${className}
  `;

  if (tagName === "button") {
    return (
      <button
        onClick={onClick}
        type={type}
        disabled={disable}
        className={commonClasses}
      >
        {children}
      </button>
    );
  }

  return (
    <Link to={href ?? "#"} className={commonClasses}>
      {children}
    </Link>
  );
};

export default Button;
