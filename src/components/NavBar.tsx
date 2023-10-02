import { menuItems } from "../assets/data/menuItems";
import MenuItem from "./Menus/MenuItem";
import TwitterIconLink from "./TwitterIconLink";

interface Props {
  type: string;
}

const NavBar = ({ type }: Props) => {
  return (
    <div
      className={`flex flex-col items-center lg:flex-row  px-8 space-x-0 lg:space-x-8 py-6 w-full
			${type === "sticky" ? "justify-end" : "justify-center"}`}
    >
      {menuItems.map((menuItem, index) => {
        return <MenuItem key={index} text={menuItem.text} url={menuItem.url} />;
      })}
      <TwitterIconLink />
    </div>
  );
};

export default NavBar;
