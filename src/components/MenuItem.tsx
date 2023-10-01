interface Props {
  type: string;
  text?: string;
  icon?: string;
  url: string;
}

const MenuItem = ({ type, text, icon, url }: Props) => {
  return (
    <>
      {type === "text" ? (
        <div className="uppercase">
          <a href={url} className="text-white hover:text-primary">
            {text}
          </a>
        </div>
      ) : (
        <div className="uppercase">
          <a href={url} className="text-white hover:text-primary">
            {icon}
          </a>
        </div>
      )}
    </>
  );
};

export default MenuItem;
