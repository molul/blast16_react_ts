interface Props {
  text: string;
}

const Title = ({ text }: Props) => {
  return (
    <h1 className="font-bold text-3xl md:text-4xl uppercase text-center mb-8">
      {text}
    </h1>
  );
};

export default Title;
