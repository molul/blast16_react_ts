import { tutorials } from "../../assets/data/tutorials";
import Title from "../Title";

const Tutorials = () => {
  return (
    <div>
      <Title text="Tutorials" />
      <div className="space-y-4">
        {tutorials.map((tutorial, index) => {
          return (
            <div key={index}>
              <div> {tutorial.language}</div>
              <div className="px-6 break-words">
                <ul className="list-disc">
                  {tutorial.content.map((content, index2) => {
                    return (
                      <li key={index2}>
                        [{content.type.toUpperCase()}]{" "}
                        <a href={content.url} target="_blank">
                          {content.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tutorials;
