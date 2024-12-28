import React from "react";
import { ButtonProps } from "./lib/types";
import { buttonVariants } from "./lib/utils";
import { cn } from "@/utils";

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {children}
    </button>
  );
};

export default Button;
