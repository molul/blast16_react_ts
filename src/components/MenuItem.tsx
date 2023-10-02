interface Props {
  text: string;
  url: string;
}

const MenuItem = ({ text, url }: Props) => {
  return (
    <>
      <div className="uppercase font-bold text-lg">
        <a href={url} className="text-white hover:text-primary">
          {text}
        </a>
      </div>
    </>
  );
};

export default MenuItem;
