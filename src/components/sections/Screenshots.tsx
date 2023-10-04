import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ImageGallery from "react-image-gallery";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "auto",
  width: "100%",
};

const Screenshots = () => {
  const slideshowPath = "/img/screenshots/";
  const slideImages = [];
  for (let i = 0; i < 9; i++) {
    slideImages.push({
      original: slideshowPath + (i + 1) + ".webp",
      thumbnail: slideshowPath + (i + 1) + ".webp",
    });
  }

  return (
    <div className="slide-container">
      {slideImages.map((slideImage, index) => (
        <div key={index}>
          <ImageGallery items={slideImage} />
        </div>
      ))}
    </div>
  );
};

export default Screenshots;
