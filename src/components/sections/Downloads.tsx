import Title from "../Title";
import DonateButton from "../DonateButton";
import { DownloadsContent } from "./DownloadsContent";

const Downloads = () => {
  return (
    <>
      <section id="downloads" />
      <div>
        <Title text="Downloads" />
        <div className="text-center mb-16">
          <div className="mb-4">
            If you would like to support Blast16 development with a donation,
            please click here:
          </div>
          <DonateButton />
        </div>
        <DownloadsContent />
      </div>
    </>
  );
};

export default Downloads;
