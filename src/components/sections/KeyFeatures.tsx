import { features } from "../../assets/data/features";
import Title from "../Title";

const KeyFeatures = () => {
  return (
    <section className="space-y-8 ">
      <Title text="Key features" />

      <div className="	pl-8 break-words bg-black bg-opacity-50 p-4 rounded-lg">
        <div className="divide-y divide-white">
          {features.key.map((feat, index) => (
            <div key={index}>{feat}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
