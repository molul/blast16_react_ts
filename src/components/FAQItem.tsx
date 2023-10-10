import { ReactElement, useState } from "react";
import SmoothCollapse from "react-smooth-collapse";
import CollapseButton from "./CollapseButton";

interface Props {
  q: string;
  a: string | ReactElement;
}

const FAQItem = ({ q, a }: Props) => {
  const [itemOpen, setItemOpen] = useState(false);
  const toggleOpen = () => {
    setItemOpen(!itemOpen);
  };

  return (
    <>
      <CollapseButton
        text={`Q: ${q}`}
        expanded={itemOpen}
        toggleFunc={toggleOpen}
      />

      <SmoothCollapse expanded={itemOpen} allowOverflowWhenOpen>
        <div className="border-t pt-2">A: {a}</div>
      </SmoothCollapse>
    </>
  );
};

export default FAQItem;
