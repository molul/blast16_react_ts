interface Props {
  mobileNavOpen: boolean;
  toggleMenu: () => void;
}

const MenuButton = ({ toggleMenu, mobileNavOpen }: Props) => {
  return (
    <>
      <div
        className=" mx-auto z-50 flex w-10 h-10 flex-col justify-between items-center py-1 "
        onClick={toggleMenu}
      >
        <span
          className={`h-1 w-8 bg-white rounded-lg transform transition duration-300 ease-in-out ${
            mobileNavOpen ? "rotate-45 translate-y-3.5" : ""
          }`}
        />
        <span
          className={`h-1 w-8 bg-white rounded-lg transition-all duration-300 ease-in-out ${
            mobileNavOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`h-1 w-8 bg-white rounded-lg transform transition duration-300 ease-in-out ${
            mobileNavOpen ? "-rotate-45 -translate-y-3.5" : ""
          }`}
        />
      </div>
    </>
  );
};

export default MenuButton;
