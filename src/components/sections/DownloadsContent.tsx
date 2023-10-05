import { downloads } from "../../assets/data/downloads";
import { DownloadFile } from "./DownloadFile";

export const DownloadsContent = () => {
  return (
    <div className="space-y-4">
      {downloads.map((item, index) => {
        return (
          <div className="" key={index}>
            <h2 className="font-bold text-2xl uppercase">{item.title}</h2>
            <div className="space-y-2 grid grid-columns-2">
              {item.files.map((file, index2) => {
                return (
                  <div
                    key={index2}
                    className="bg-black bg-opacity-40 rounded p-4"
                  >
                    <div>
                      <DownloadFile data={file} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
