import { VariantProps } from "class-variance-authority";
import React from "react";
import { buttonVariants } from "./utils";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;
