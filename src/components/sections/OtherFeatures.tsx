import { features } from "../../assets/data/features";
import Title from "../Title";
import { AiFillCheckSquare } from "react-icons/ai";

const OtherFeatures = () => {
  return (
    <section className="space-y-8 ">
      <Title text="Other features" />
      <div className=" break-words bg-black bg-opacity-50 p-4 rounded-lg">
        <div className="space-y-2">
          {features.other.map((feat, index) => (
                        <div key={index} className="flex  justify-start items-start gap-3 py-2"> 
   <div className="pt-0.5"> 
 <AiFillCheckSquare/> 
 </div> 
 <div> 
 {feat} 
 </div> 
  
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherFeatures;
