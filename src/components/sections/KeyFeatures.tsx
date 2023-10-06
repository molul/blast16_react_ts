import { features } from "../../assets/data/features";
import Title from "../Title";

const KeyFeatures = () => {
  return (
    <section className="space-y-8 ">
      <Title text="Key features" />

      <div className="	pl-8 break-words bg-black bg-opacity-50 p-4 rounded-lg divide-y divide-white">
        <ul className="list-disc">
          {features.key.map((feat, index) => (
            <li key={index}>{feat}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default KeyFeatures;
