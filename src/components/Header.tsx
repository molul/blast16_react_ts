import MenuDesktop from "./menus2/MenuDesktop";
import MenuMobile from "./menus2/MenuMobile";

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
