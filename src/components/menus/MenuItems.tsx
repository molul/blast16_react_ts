import { menuItems } from "../../assets/data/menuItems";
import MenuItem from "./MenuItem";
import TwitterIconLink from "./TwitterIconLink";
import YoutubeIconLink from "./YoutubeIconLink";

interface Props {
  toggleMenu: () => void;
}

const MenuItems = ({ toggleMenu }: Props) => {
  return (
    <>
      {" "}
      {menuItems.map((menuItem, index) => {
        return (
          <MenuItem
            key={index}
            text={menuItem.text}
            url={menuItem.url}
            target={menuItem.target}
            toggleMenu={toggleMenu}
          />
        );
      })}
      <TwitterIconLink />
      <YoutubeIconLink />
    </>
  );
};

export default MenuItems;
