import MenuItems from "./MenuItems";

interface Props {
  open: boolean;
  toggleMenu: () => void;
}

const MenuMobileContent = ({ open, toggleMenu }: Props) => {
  return (
    <div
      className={`
				text-right
				absolute
				top-20
				w-full
				h-screen
				left-0
				transform ${open ? "-translate-x-0" : "translate-x-full"} 
				transition-transform 
				duration-300 
				ease-in-out 
				bg-secondary
				bg-opacity-70
				backdrop-blur-sm
				py-6
				text-base
				space-y-6
			`}
    >
      <MenuItems toggleMenu={toggleMenu} />
    </div>
  );
};

export default MenuMobileContent;
