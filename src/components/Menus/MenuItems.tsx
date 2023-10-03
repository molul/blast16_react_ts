import { menuItems } from "../../assets/data/menuItems";
import MenuItem from "./MenuItem";
import TwitterIconLink from "./TwitterIconLink";
import YoutubeIconLink from "./YoutubeIconLink";

const MenuItems = () => {
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
          />
        );
      })}
      <TwitterIconLink />
      <YoutubeIconLink />
    </>
  );
};

export default MenuItems;
