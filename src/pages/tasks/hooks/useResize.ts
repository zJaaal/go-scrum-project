import { useEffect, useState } from "react";

const useResize = () => {
  const [isPhone, setIsPhone] = useState(window.innerWidth < 900);

  const resizeHandler = () => {
    setIsPhone(window.innerWidth < 900);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return { isPhone };
};

export default useResize;
