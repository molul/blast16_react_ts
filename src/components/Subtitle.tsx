interface Props {
  text: string;
}

const Subitle = ({ text }: Props) => {
  return (
    <h2 className="font-bold text-xl md:text-2xl uppercase text-center">
      {text}
    </h2>
  );
};

export default Subitle;
