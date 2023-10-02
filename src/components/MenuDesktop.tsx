import MenuSticky from "./MenuSticky";
import NavBar from "./NavBar";

const MenuDesktop = () => {
  return (
    <>
      <div className="bg-black bg-opacity-70 flex flex-col items-center justify-between">
        <div>
          <img src="/img/logo.webp" alt="logo" />
        </div>
        <NavBar type="normal" />
        <MenuSticky />
      </div>
    </>
  );
};

export default MenuDesktop;
