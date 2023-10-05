import { footerItems } from "../assets/data/footerItems";
import TwitterIconLink from "./menus2/TwitterIconLink";
import YoutubeIconLink from "./menus2/YoutubeIconLink";

const Footer = () => {
  return (
    <div className="bg-black bg-opacity-80 p-8 flex flex-col items-center lg:flex-row justify-center space-x-0 lg:space-x-8 space-y-6 lg:space-y-0">
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
      <TwitterIconLink menu="footer" />
      <YoutubeIconLink menu="footer" />
    </div>
  );
};

export default Footer;
