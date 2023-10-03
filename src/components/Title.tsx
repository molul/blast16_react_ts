interface Props {
  text: string;
}

const Title = ({ text }: Props) => {
  return <div className="font-bold text-3xl uppercase text-center">{text}</div>;
};

export default Title;
