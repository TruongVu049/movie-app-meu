import { Swiper, SwiperRef } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { SliderProps } from "./lib/type";
import { cn } from "@/utils";
import React from "react";

const Slider = React.forwardRef<SwiperRef, SliderProps>(
  (
    { className, children, modules = [], autoplay, ...props }: SliderProps,
    ref
  ) => {
    return (
      <Swiper
        ref={ref}
        modules={[Autoplay, Pagination, A11y, ...modules]}
        loop={true}
        autoplay={
          typeof autoplay === "object"
            ? {
                delay: 2000,
                disableOnInteraction: false,
                ...autoplay,
              }
            : autoplay
        }
        className={cn("", className)}
        {...props}
      >
        {children}
      </Swiper>
    );
  }
);

export default Slider;
