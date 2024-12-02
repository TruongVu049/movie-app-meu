import React from "react";
import { Link } from "react-router-dom";

type ButtonSize = "lg" | "sm";

type ButtonProps = {
  tagName?: "button" | "a";
  type?: "button" | "submit" | "reset";
  href?: string;
  disable?: boolean;
  size?: ButtonSize;
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  tagName = "button",
  type = "button",
  href,
  size = "lg",
  variant = "primary",
  className,
  children,
  onClick,
  disable = false,
}) => {
  const sizeClasses = {
    lg: "py-2 md:px-8 px-4 md:text-2xl text-base ",
    sm: "md:px-8 px-4 md:text-lg text-sm",
  };

  // Các class cho loại nút (primary, secondary, etc.)
  const variantClasses = {
    primary:
      "bg-color-primary shadow-[0_0_7px_8px_rgba(255,0,0,.4)] hover:shadow-[0_0_12px_14px_rgba(255,0,0,.4)]",
    secondary:
      "bg-transparent border border-white text-white hover:bg-white hover:text-color-primary",
  };
  if (tagName === "button") {
    return (
      <button
        onClick={onClick}
        type={type}
        disabled={disable}
        className={`rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-offset-2
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${className}
        `}
      >
        {children}
      </button>
    );
  }
  return (
    <Link
      to={href ?? "#"}
      className={`rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-offset-2
      ${sizeClasses[size]}
      ${variantClasses[variant]}
      ${className}
    `}
    >
      {children}
    </Link>
  );
};

export default Button;
