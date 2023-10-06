import { useState, useEffect } from "react";
import NavBar from "./NavBar";

const MenuSticky = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowMenu(true) : setShowMenu(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  });

  return (
    <div
      className={`
				z-50
				fixed
				w-full
				h-24
				bg-black bg-opacity-90 
				transition-transform
				${!showMenu ? "-translate-y-24 " : "translate-y-0"}
				flex
				flex-row
				items-center justify-between
			`}
    >
      <div>
        <img src="/img/logoMobile.webp" alt="logo" />
      </div>
      <NavBar type="sticky" />
    </div>
  );
};

export default MenuSticky;
