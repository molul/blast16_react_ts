import { faq } from "../../assets/data/faq";
import FAQItem from "../FAQItem";
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
            <FAQItem q={item.q} a={item.a} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
