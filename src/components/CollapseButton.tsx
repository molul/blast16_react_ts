import { AiFillCaretDown } from "react-icons/ai";

interface Props {
  text: string;
  expanded: boolean;
  toggleFunc: () => void;
}

const CollapseButton = ({ text, expanded, toggleFunc }: Props) => {
  return (
    <div className="">
      <button
        type="button"
        className={`
					block
					text-white
					text-left
					w-full
					${!expanded ? " rounded " : " mb-2 rounded-t"}
					font-bold
					hover:no-underline
					transition duration-gDuration 
				`}
        onClick={() => toggleFunc()}
      >
        <div className="flex items-center gap-2">
          <AiFillCaretDown
            className={`transition-transform ${
              expanded ? "rotate-0" : "-rotate-90"
            }`}
          />
          {text}
        </div>
      </button>
    </div>
  );
};

export default CollapseButton;
