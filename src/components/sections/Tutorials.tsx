import { tutorials } from "../../assets/data/tutorials";
import Title from "../Title";
import Tutorial from "../Tutorial";

const Tutorials = () => {
  return (
    <div>
      <Title text="Tutorials" />
      <div className="space-y-6">
        {tutorials.map((tutorial, index) => {
          return (
            <div key={index}>
              <Tutorial language={tutorial.language} data={tutorial.data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tutorials;
