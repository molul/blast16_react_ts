import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../../slideStyles.css";
import Title from "../Title";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { IconContext } from "react-icons";

const properties = {
  prevArrow: (
    <button className="-ml-8 md:-ml-16 flex items-center justify-center bg-primary rounded-full opacity-80">
      <IconContext.Provider
        value={{ className: "w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12" }}
      >
        <RiArrowLeftSLine />
      </IconContext.Provider>
    </button>
  ),
  nextArrow: (
    <button className="-mr-8 md:-mr-16 flex items-center justify-center bg-primary rounded-full opacity-80">
      <IconContext.Provider
        value={{ className: "w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12" }}
      >
        <RiArrowRightSLine />
      </IconContext.Provider>
    </button>
  ),
  duration: 3000,
  transitionDuration: 500,
  easing: "ease-out",
  indicators: true,
};

const numbersList = Array.from(Array(9).keys());

const slideImages = numbersList.map(
  (num) => "/img/screenshots/" + (num + 1) + ".webp"
);

const Screenshots = () => {
  return (
    <div className="">
      <Title text="Screenshots" />

      <div className="slide-container w-full px-8 md:px-16">
        <Slide {...properties}>
          {slideImages.map((slideImage, index) => (
            <div key={index} className="flex">
              <div className="flex items-center justify-center bg-cover w-full">
                <img src={slideImage} />
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Screenshots;
