import { menuItems } from "../assets/data/menuItems";
import MenuItem from "./MenuItem";

const NavBar = () => {
  return (
    <div className="flex justify-center space-x-4 py-6 w-full">
      {menuItems.map((menuItem, index) => {
        if (menuItem.type === "text") {
          return <MenuItem key={index} data={menuItem} />;
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default NavBar;
