import React from "react";
import heroImage from '../assets/image/heroImage.svg'
import trustedImage from '../assets/image/trustedImage.png'

const heroSection = () => {
  return (
    <>
        <div className="flex mt-[91px] items-center px-[182px] w-full">
            <div className="w-[50%]">
                <div className="bg-[#F5F5F5] space-x-[5px] flex items-center rounded-[35px] w-fit py-[7px] px-[8px]">
                    <div className="bg-[#2254B4] font-inter leading-[18px] font-[700] text-[#fff] text-[10px] px-[7px] rounded-[31px]">
                        New
                    </div>
                    <div className="font-[500] text-[#000] font-inter text-[10px] leading-[18px]">
                        Mono Dashboard 3.0 is live! &#8594;
                    </div>
                </div>
                <div className="mt-[44px] text-[#000] leading-[78.13px] font-inter font-[700] text-[56px]">
                    Reliably access bank accounts
                </div>
                <div className="mt-[24px] w-[446px] text-[#000] leading-[25px] font-inter font-[400] text-[19px]">
                    Mono helps businesses to access high-quality financial data and direct bank payments.
                </div>
                {/* buttons */}
                <div className="flex mt-[31px] space-x-[14px]">
                    <button className="bg-[#2254B4] text-[#fff] leading-[18px] text-[11px] font-[700] font-inter text-center rounded-[4px] py-[10px] px-[15px]">
                        Get started for free &#8594;
                    </button>
                    <button className="bg-[#F5F5F5] text-[#000] leading-[18px] text-[11px] font-[500] font-inter text-center rounded-[4px] py-[10px] px-[15px]">
                        Contact sales &#8594;
                    </button>
                </div>
                {/* end button */}
            </div>
            {/* second flex layer */}
            <div className="w-[50%]">
                <img src={heroImage} className="" loading="lazy" alt=""/>
            </div>
            {/* end second layer */}
        </div>
        
        {/* trusted section */}
        <div className="px-[182px] mt-[109px]">
            <div className="font-inter text-[#000] font-[400] text-[12px] leading-[25px]">
                Trusted by
            </div>
            <div className="mt-[28px]">
                <img src={trustedImage} className="" alt="" loading="lazy"/>
            </div>
        </div>
        {/* end trusted section */}
    </>
  );
};

export default heroSection;
