import { useState } from "react";
import MenuButton from "./MenuButton";
// import MenuMobileContent from "./MenuMobileContent";

const MenuMobile = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMenu = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <>
      <div className="bg-black bg-opacity-70 flex flex-row items-center justify-between overflow-hidden">
        <div>
          <img className="h-16" src="/img/logoMobile.webp" alt="logo" />
        </div>
        <div className="text-right px-4">
          <MenuButton toggleMenu={toggleMenu} mobileNavOpen={mobileNavOpen} />
        </div>
        {/* <MenuMobileContent mobileNavOpen={mobileNavOpen} /> */}
      </div>
    </>
  );
};

export default MenuMobile;
