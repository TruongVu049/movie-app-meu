export type ButtonProps = {
  tagName?: "button" | "a";
  type?: "button" | "submit" | "reset";
  href?: string;
  disable?: boolean;
  size?: "lg" | "sm";
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};
