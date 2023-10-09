import { AiFillCheckSquare } from "react-icons/ai";
import { ReactElement } from "react";

interface Props {
  text: ReactElement | string;
}
const Feature = ({ text }: Props) => {
  return (
    <div className="flex  justify-start items-start gap-3 py-2">
      <div className="pt-0.5">
        <AiFillCheckSquare />
      </div>
      <div>{text}</div>
    </div>
  );
};

export default Feature;
