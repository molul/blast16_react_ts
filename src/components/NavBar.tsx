import { menuItems } from "../assets/data/menuItems";
import MenuItem from "./MenuItem";

const NavBar = () => {
  return (
    <div className="flex justify-center space-x-4 py-6 w-full">
      {menuItems.map((menuItem, index) => {
        return (
          <MenuItem
            key={index}
            type={menuItem.type}
            text={menuItem.text}
            icon={menuItem.icon}
            url={menuItem.url}
          />
        );
      })}
    </div>
  );
};

export default NavBar;
