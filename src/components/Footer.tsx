import { footerItems } from "../assets/data/footerItems";

const Footer = () => {
  return (
    <div className="bg-black bg-opacity-80 p-8 flex flex-col items-center lg:flex-row justify-center space-x-0 lg:space-x-8">
      {footerItems.map((item, index) => {
        return (
          <a
            key={index}
            className="p-2 uppercase text-white hover:text-primary"
            href={item.url}
          >
            {item.text}
          </a>
        );
      })}
    </div>
  );
};

export default Footer;
