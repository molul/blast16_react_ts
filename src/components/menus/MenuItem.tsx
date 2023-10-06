interface Props {
  text: string;
  url: string;
  target?: string;
}

const MenuItem = ({ text, url, target = "_self" }: Props) => {
  // Smooth scroll function
  const scroll2El = (target: string) => {
    const element = document.getElementById(target);
    const headerOffset = 110;
    if (element) {
      console.log(target);
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="uppercase font-bold text-lg pr-6 lg:pr-0">
        {!url.includes("#") ? (
          <a
            href={url}
            target={target}
            className="text-white hover:text-primary"
          >
            {text}
          </a>
        ) : (
          <a
            target={target}
            className="text-white hover:text-primary cursor-pointer"
            onClick={() => {
              scroll2El(url.replace("#", ""));
            }}
          >
            {text}
          </a>
        )}
      </div>
    </>
  );
};

export default MenuItem;
