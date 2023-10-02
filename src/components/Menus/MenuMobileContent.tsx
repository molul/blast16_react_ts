interface Props {
  mobileNavOpen: boolean;
}

const MenuMobileContent = ({ mobileNavOpen }: Props) => {
  return (
    <div
      className={`
				absolute
				top-20
				w-full
				h-screen
				left-0
				transform ${mobileNavOpen ? "-translate-x-0" : "translate-x-full"} 
				transition-transform duration-menuDuration 
				ease-in-out 
				bg-sky-800
				bg-opacity-90
				backdrop-blur-sm
				py-6
				text-base
				space-y-6
			`}
    >
      MenuMobileContent
    </div>
  );
};

export default MenuMobileContent;
