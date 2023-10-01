interface Props {
  type: string;
  text?: string;
  icon?: string;
  url: string;
}

const MenuItem = ({ type, text, icon, url }: Props) => {
  return (
    <div className="uppercase">
      qwe
      <a href={url} className="text-white hover:text-primary">
        {text}
      </a>
    </div>
  );
};

export default MenuItem;
