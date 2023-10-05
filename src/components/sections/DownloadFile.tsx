import {
  BsFillFileZipFill,
  BsFiletypeTxt,
  BsFiletypePdf,
  BsLink45Deg,
} from "react-icons/bs";

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
    <div className=" space-y-2 bg-black bg-opacity-40 rounded-lg border border-white p-4">
      {/* First row: icon, name and button */}
      <div className="flex gap-2 justify-between items-center border-b border-white pb-2">
        <div className="flex items-center space-x-2">
          <div>
            {data.icon === "pdf" && <BsFiletypePdf size={25} />}
            {data.icon === "link" && <BsLink45Deg size={25} />}
            {data.icon === "zip" && <BsFillFileZipFill size={25} />}
            {data.icon === "txt" && <BsFiletypeTxt size={25} />}
          </div>
          <div className="font-bold text-lg lg:text-xl lg:pt-1">
            {data.name}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {data.size && <div className="text-xs">{data.size}</div>}
        {data.description && <div>{data.description}</div>}
      </div>

      <div className="py-2">
        <a
          href={data.url}
          target="_blank"
          className="bg-primaryHover text-white px-6 py-2 rounded"
        >
          {data.icon === "link" ? "Browse" : "Download"}
        </a>
      </div>
    </div>
  );
};
