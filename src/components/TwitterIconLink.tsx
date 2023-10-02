import { IconContext } from "react-icons";
import { FaSquareXTwitter } from "react-icons/fa6";

const TwitterIconLink = () => {
  return (
    <div className="flex items-center justify-center">
      <a
        href="https://twitter.com/tripware_dev"
        className="text-white hover:text-primary"
      >
        <IconContext.Provider value={{ className: "" }}>
          <FaSquareXTwitter />
        </IconContext.Provider>
      </a>
    </div>
  );
};

export default TwitterIconLink;
