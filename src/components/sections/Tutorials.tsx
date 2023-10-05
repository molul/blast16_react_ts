import { tutorials } from "../../assets/data/tutorials";
import Title from "../Title";
import { FaFilePdf } from "react-icons/fa6";
import { HiDocumentText } from "react-icons/hi";
import { FaYoutube } from "react-icons/fa";

const Tutorials = () => {
  return (
    <div>
      <Title text="Tutorials" />
      <div className="space-y-6">
        {tutorials.map((tutorial, index) => {
          return (
            <div key={index}>
              <div className="pb-2"> {tutorial.language}</div>
              <div className="break-words ">
                <div className="space-y-1">
                  {tutorial.content.map((content, index2) => {
                    return (
                      <div key={index2} className="flex space-x-3 items-center">
                        <div>
                          {content.type === "pdf" && <FaFilePdf size={25} />}
                          {content.type === "video" && <FaYoutube size={25} />}
                          {content.type === "post" && (
                            <HiDocumentText size={25} />
                          )}
                        </div>
                        <div>
                          <a href={content.url} target="_blank">
                            {content.text}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tutorials;
