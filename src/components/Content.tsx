import Cover from "./sections/Cover";
import KeyFeatures from "./sections/KeyFeatures";
import OtherFeatures from "./sections/OtherFeatures";
import Tutorials from "./sections/Tutorials";
// import Screenshots from "./sections/Screenshots";

const Content = () => {
  return (
    <div className="flex flex-1 justify-center w-full p-4 lg:p-12 mt-20 lg:mt-0">
      <div className="w-full max-w-6xl space-y-16 py-4">
        <Cover />

        <KeyFeatures />

        {/* <Screenshots /> */}

        <OtherFeatures />

        <Tutorials />
      </div>
    </div>
  );
};

export default Content;
