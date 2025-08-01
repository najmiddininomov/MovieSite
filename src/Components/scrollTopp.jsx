import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Sahifani yuqoriga chiqaradi
  }, [pathname]);

  return null; // Bu komponent ekranga hech narsa chiqarmaydi
};

export default ScrollToTop;
