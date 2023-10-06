import Cover from "./sections/Cover";
import Downloads from "./sections/Downloads";
import FAQ from "./sections/FAQ";
import KeyFeatures from "./sections/KeyFeatures";
import OtherFeatures from "./sections/OtherFeatures";
import Tutorials from "./sections/Tutorials";
import Screenshots from "./sections/Screenshots";

const Content = () => {
  return (
    <div className="flex flex-1 justify-center w-full p-4 lg:p-12 mt-20 lg:mt-0">
      <div className="w-full max-w-6xl space-y-24 py-4">
        <Cover />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <KeyFeatures />
          <OtherFeatures />
        </div>

        <Screenshots />

        <Downloads />

        <Tutorials />
        <FAQ />
      </div>
    </div>
  );
};

export default Content;
