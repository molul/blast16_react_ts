import { IconContext } from "react-icons";
import { BsYoutube } from "react-icons/bs";

interface Props {
  menu: string;
}
const YoutubeIconLink = ({ menu }: Props) => {
  return (
    <div
      className={` flex ${
        menu === "footer" ? "justify-center" : "justify-end pr-6 lg:pr-0"
      } -mt-0.5 uppercase font-bold text-lg `}
    >
      <a
        href="https://www.youtube.com/c/Tripware"
        target="_blank"
        className="text-white hover:text-primary"
      >
        <IconContext.Provider value={{ className: "" }}>
          <BsYoutube size={35} />
        </IconContext.Provider>
      </a>
    </div>
  );
};

export default YoutubeIconLink;
