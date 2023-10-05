import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../../slideStyles.css";
import Title from "../Title";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  width: "1280px",
};

const properties = {
  prevArrow: (
    <button className=" ml-4 flex items-center justify-center bg-primary rounded-full opacity-80">
      <RiArrowLeftSLine size={50} />
    </button>
  ),
  nextArrow: (
    <button className="mr-4 flex items-center justify-center bg-primary rounded-full opacity-80">
      <RiArrowRightSLine size={50} />
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

      <div className="slide-container w-full">
        <Slide {...properties}>
          {slideImages.map((slideImage, index) => (
            <div key={index} className="flex">
              <div style={{ ...divStyle }}>
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
