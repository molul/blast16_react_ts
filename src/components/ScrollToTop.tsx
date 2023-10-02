import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { IconContext } from "react-icons";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  });

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <div className="">
          <button
            aria-label="Subir al principio de la página"
            className={`
							fixed 
							bottom-3
							right-3
							z-50 
							cursor-pointer 
							w-10
							h-10
							rounded
							border-2
							text-text5
							border-primary
							bg-primary
							text-primary
							bg-opacity-0
							hover:bg-opacity-100
							hover:text-white
							transition duration-300
							flex
							items-center
							justify-center
						`}
            onClick={handleScrollToTop}
          >
            <IconContext.Provider value={{ className: "" }}>
              <FaArrowUp />
            </IconContext.Provider>
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
