import { menuItems } from "../assets/data/menuItems";
import MenuItem from "./MenuItem";

const NavBar = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center space-x-0 lg:space-x-8 py-6 w-full">
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
