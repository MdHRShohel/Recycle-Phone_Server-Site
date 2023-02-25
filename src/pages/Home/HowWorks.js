import React from "react";
import { steps } from "../../data/steps";

const HowWorks = () => {
  return (
    <div className="p-4">
      <div className="container mx-auto bg-black p-10 lg:p-24 text-white relative z-30 -mt-24 rounded-lg">
        <div>
          <div>
            <h2 className="text-4xl text-center font-bold text-yellow-400 mb-10">
              Get The Best Product in 4 Steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6">
            {steps?.map((step) => (
              <>
                <div className="flex items-center gap-4">
                  <div>
                    <img src={step.img} alt="" className="w-[80px]" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-2xl font-bold">{step.name}</h2>
                    <h2 className="">{step.description}</h2>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
