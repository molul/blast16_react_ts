import { faq } from "../../assets/data/faq";
import Title from "../Title";

const FAQ = () => {
  return (
    <div>
      <section id="faq" />

      <Title text="FAQ" />

      <div className="break-words space-y-6">
        {faq.map((item, index) => (
          <div
            key={index}
            className="bg-black bg-opacity-50 p-4 rounded-lg space-y-2"
          >
            <div className="font-bold border-b pb-2 ">Q: {item.q}</div>
            <div>A: {item.a}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
