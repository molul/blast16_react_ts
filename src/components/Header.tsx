import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="bg-black bg-opacity-70 flex flex-col items-center justify-between">
      <div>
        <img src="/img/logo.webp" alt="logo" />
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
