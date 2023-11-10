import { IconContext } from "react-icons";
import {
  BsFillFileZipFill,
  BsFiletypeTxt,
  BsFiletypePdf,
  BsLink45Deg,
} from "react-icons/bs";

import { FiDownload, FiArrowUpRight } from "react-icons/fi";

interface DownloadData {
  name: string;
  description?: string;
  icon: string;
  size?: string;
  url: string;
}

interface Props {
  data: DownloadData;
}

export const DownloadFile = ({ data }: Props) => {
  return (
    <div className="flex flex-grow flex-col space-y-2 bg-black bg-opacity-50 rounded-lg p-4 h-full">
      {/* First row: icon, name and button */}
      <div className="flex gap-2 justify-between items-center border-b border-white pb-2">
        <div className="flex items-center space-x-2">
          <div>
            {data.icon === "pdf" && <BsFiletypePdf size={35} />}
            {data.icon === "link" && <BsLink45Deg size={35} />}
            {data.icon === "zip" && <BsFillFileZipFill size={35} />}
            {data.icon === "txt" && <BsFiletypeTxt size={35} />}
          </div>
          <div className="font-bold text-md lg:text-lg lg:pt-1 pt-2">
            {data.name}
          </div>
        </div>
        <div className="py-2 text-base ">
          <IconContext.Provider
            value={{
              className:
                "border-2 px-2 rounded border-primary text-primary bg-primary bg-opacity-20",
            }}
          >
            <a href={data.url} target="_blank" download>
              <div>
                {data.icon === "link" ? (
                  <>
                    <FiArrowUpRight size={40} />
                  </>
                ) : (
                  <FiDownload size={40} />
                )}
              </div>
            </a>
          </IconContext.Provider>
        </div>
      </div>

      <div className="space-y-2 flex-1">
        {data.size && <div className="text-xs">{data.size}</div>}
        {data.description && <div>{data.description}</div>}
      </div>
    </div>
  );
};
