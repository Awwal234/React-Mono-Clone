import React from "react";
import BusinessCard from "./build/businessCard";

const businessBuilding = () => {
  return (
    <>
        <div className="px-[182px]">
            <div className="font-inter mb-[24px] w-[446px] text-[#000] font-[700] text-[42px] leading-[55.87px]">
                Business building with Mono
            </div>
            <div className="font-inter w-[446px] text-[#000] font-[400] text-[19px] leading-[25px]">
                Here are some of the interesting features and experiences powered by Mono.
            </div>
            {/* card section for this section */}
                <BusinessCard/>
            {/* end card section */}
        </div>
    </>
  );
};

export default businessBuilding;
