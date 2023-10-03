import { IconContext } from "react-icons";
import { FaSquareXTwitter } from "react-icons/fa6";

interface Props {
  menu?: string;
}

const TwitterIconLink = ({ menu }: Props) => {
  return (
    <div
      className={` flex ${
        menu === "footer" ? "justify-center" : "justify-end pr-6 lg:pr-0"
      } -mt-1 uppercase font-bold text-lg `}
    >
      <a
        href="https://twitter.com/tripware_dev"
        target="_blank"
        className="text-white hover:text-primary"
      >
        <IconContext.Provider value={{ className: "" }}>
          <FaSquareXTwitter size={30} />
        </IconContext.Provider>
      </a>
    </div>
  );
};

export default TwitterIconLink;
