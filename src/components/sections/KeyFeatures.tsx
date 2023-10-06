import { features } from "../../assets/data/features";
import Title from "../Title";

const KeyFeatures = () => {
  return (
    <section className="space-y-8 ">
      <Title text="Key features" />

      <div className="break-words bg-black bg-opacity-50 px-4 py-2 rounded-lg">
        <div className="divide-y divide-white space-y-4 ">
          {features.key.map((feat, index) => (
            <div key={index} className="py-2x>{feat}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
