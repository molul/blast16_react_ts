interface Props {
  text: string;
  url: string;
  target?: string;
}

const MenuItem = ({ text, url, target = "_self" }: Props) => {
  return (
    <>
      <div className="uppercase font-bold text-lg pr-6 lg:pr-0">
        <a href={url} target={target} className="text-white hover:text-primary">
          {text}
        </a>
      </div>
    </>
  );
};

export default MenuItem;
