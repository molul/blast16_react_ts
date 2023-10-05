import { FaFilePdf } from "react-icons/fa6";
import { HiDocumentText } from "react-icons/hi";
import { FaYoutube } from "react-icons/fa";

interface TutorialData {
  type: string;
  text: string;
  url: string;
}

interface Props {
  language: string;
  data: TutorialData[];
}

const Tutorial = ({ language, data }: Props) => {
  return (
    <div className="bg-black bg-opacity-50 p-4 rounded-lg ">
      <div className="pb-2 uppercase font-bold text-xl mb-4 border-b border-white">
        {" "}
        {language}
      </div>
      <div className="break-words ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((item, index) => {
            return (
              <div key={index} className="flex space-x-3 items-center">
                <div>
                  {item.type === "pdf" && <FaFilePdf size={25} />}
                  {item.type === "video" && <FaYoutube size={25} />}
                  {item.type === "post" && <HiDocumentText size={25} />}
                </div>
                <div>
                  <a href={item.url} target="_blank">
                    {item.text}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
