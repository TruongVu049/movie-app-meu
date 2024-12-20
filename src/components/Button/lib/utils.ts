// Hàm xác định các class cho kích thước (size)
export const getSizeClasses = (size: "lg" | "sm"): string => {
  const sizeMap = {
    lg: "py-2 md:px-8 px-4 md:text-2xl text-base",
    sm: "md:px-8 px-4 md:text-lg text-sm",
  };
  return sizeMap[size];
};

// Hàm xác định các class cho loại nút (variant)
export const getVariantClasses = (variant: "primary" | "secondary"): string => {
  const variantMap = {
    primary:
      "bg-color-primary shadow-[0_0_7px_8px_rgba(255,0,0,.4)] hover:shadow-[0_0_12px_14px_rgba(255,0,0,.4)]",
    secondary:
      "bg-transparent border border-white text-white hover:bg-white hover:text-color-primary",
  };
  return variantMap[variant];
};
