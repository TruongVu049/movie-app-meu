import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-color-primary shadow-[0_0_7px_8px_rgba(255,0,0,.4)] hover:shadow-[0_0_12px_14px_rgba(255,0,0,.4)]",
        secondary:
          "bg-transparent border border-white  hover:bg-white hover:text-color-primary",
      },
      size: {
        sm: "md:px-8 px-4 md:text-lg text-sm",
        lg: "py-2 md:px-8 px-4 md:text-2xl text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);
