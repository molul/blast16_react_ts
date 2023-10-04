import { features } from "../../assets/data/features";
import Title from "../Title";

const KeyFeatures = () => {
  return (
    <section className="space-y-8 ">
      <Title text="Key features" />
      <div className="	px-6 break-words">
        <ul className="list-disc">
          {features.key.map((feat, index) => (
            <li key={index}>{<>{feat}</>}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default KeyFeatures;
