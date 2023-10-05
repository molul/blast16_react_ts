import { useState } from "react";
import MenuMobileContent from "./MenuMobileContent";
import MenuButton from "./MenuButton";

const MenuMobile = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMenu = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <>
      <div className="bg-black bg-opacity-90 flex  items-center justify-between w-full fixed top-0 left-0 z-50 h-16 py-10	text-white">
        <div>
          <img className="h-14" src="/img/logoMobile.webp" alt="logo" />
        </div>

        {/* hamburger button */}
        <div className=" px-4">
          <MenuButton toggleMenu={toggleMenu} open={mobileNavOpen} />
        </div>

        <MenuMobileContent open={mobileNavOpen} />
      </div>
    </>
  );
};

export default MenuMobile;
