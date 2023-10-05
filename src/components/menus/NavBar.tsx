import MenuItems from "./MenuItems";

interface Props {
  type: string;
}

const NavBar = ({ type }: Props) => {
  return (
    <div
      className={`flex flex-col items-center lg:flex-row space-x-0 lg:space-x-8 py-4 w-full
			${type === "sticky" ? " justify-end px-4 " : " justify-center px-8"}`}
    >
      <MenuItems />
    </div>
  );
};

export default NavBar;
