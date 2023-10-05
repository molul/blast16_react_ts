import { downloads } from "../../assets/data/downloads";
import { DownloadFile } from "./DownloadFile";

export const DownloadsContent = () => {
  return (
    <div className="space-y-4">
      {downloads.map((item, index) => {
        return (
          <div className="" key={index}>
            <h2 className="font-bold text-2xl uppercase">{item.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {item.files.map((file, index2) => {
                return (
                  <div key={index2}>
                    <DownloadFile data={file} />
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
