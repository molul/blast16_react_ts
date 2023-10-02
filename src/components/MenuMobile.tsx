import NavBar from "./NavBar";

const MenuMobile = () => {
  return (
    <>
      <div className="bg-black bg-opacity-70 flex flex-row items-center justify-between">
        <img src="/img/logoMobile.webp" alt="logo" />
        <NavBar type="mobile" />
      </div>
    </>
  );
};

export default MenuMobile;
