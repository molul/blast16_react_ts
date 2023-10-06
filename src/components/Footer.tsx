import { footerItems } from "../assets/data/footerItems";
import TwitterIconLink from "./menus/TwitterIconLink";
import YoutubeIconLink from "./menus/YoutubeIconLink";

const Footer = () => {
  return (
    <div className="bg-black bg-opacity-80 p-8 space-y-4">
      <div className="grid grid-cols-2 md:flex gap-4 items-center md:flex-row justify-center space-x-0 md:space-x-8 text-center">
        {footerItems.map((item, index) => {
          return (
            <a
              key={index}
              className="p-2 uppercase text-white hover:text-primary"
              href={item.url}
              target={item.target}
            >
              {item.text}
            </a>
          );
        })}
        <div className="flex items-center gap-6  md:gap-10 justify-center">
          <TwitterIconLink menu="footer" />
          <YoutubeIconLink menu="footer" />
        </div>
      </div>
      <div className="text-sm md:text-base text-white text-center py-2">
        Developed by{" "}
        <a href="https://www.luismorcilloluque.com/en">Luis Morcillo</a> with
        React, Vite, TypeScript and TailwindCSS &copy; 2023{" "}
      </div>
    </div>
  );
};

export default Footer;
