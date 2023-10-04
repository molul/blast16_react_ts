import { faq } from "../../assets/data/faq";
import Title from "../Title";

const FAQ = () => {
  return (
    <section className="space-y-8 ">
      <Title text="FAQ" />

      <div className="break-words space-y-6">
        {faq.map((item, index) => (
          <div key={index} className="bg-black bg-opacity-40 p-4 rounded">
            <div className="font-bold">Q: {item.q}</div>
            <div>A: {item.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
