import { features } from "../../assets/data/features";
import Title from "../Title";

const OtherFeatures = () => {
  return (
    <section className="space-y-8 ">
      <Title text="Other features" />
      <div className="	pl-8 break-words bg-black bg-opacity-40 p-4 rounded-lg">
        <ul className="list-disc">
          {features.other.map((feat, index) => (
            <li key={index}>{feat}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OtherFeatures;
