interface Props {
  text: string;
}

const Title = ({ text }: Props) => {
  return <h1 className="font-bold text-3xl uppercase text-center">{text}</h1>;
};

export default Title;
