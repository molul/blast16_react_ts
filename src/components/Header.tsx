import MenuDesktop from "./menus/MenuDesktop";
import MenuMobile from "./menus/MenuMobile";

const Header = () => {
  return (
    <>
      <div className="hidden lg:block">
        <MenuDesktop />
      </div>

      <div className="lg:hidden">
        <MenuMobile />
      </div>
    </>
  );
};

export default Header;
