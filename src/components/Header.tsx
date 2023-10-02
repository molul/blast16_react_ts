import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

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
