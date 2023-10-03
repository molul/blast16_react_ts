import MenuDesktop from "./Menus/MenuDesktop";
import MenuMobile from "./Menus/MenuMobile";

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
