import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToTop = (options: { duration?: number } = {}) => {
  const location = useLocation();

  useEffect(() => {
    const { duration = 300 } = options;
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const timeoutId = setTimeout(() => {
      scrollToTop();
    }, duration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [location.pathname, options]);
};
