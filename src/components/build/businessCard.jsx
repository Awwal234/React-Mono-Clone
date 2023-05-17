import React from "react";
import phoneFrame from '../../assets/image/phoneFrame.svg'

const businessCard = () => {
  return (
    <div className="mt-[50px] mb-[90px] px-[45px] pt-[44px] bg-[#F5F5F5] w-full h-fit rounded-[8px]">
        {/* tab selections */}
            <div className="flex w-fit items-center space-x-[16px]">
                <div className="bg-[#000] cursor-pointer text-[13px] leading-[18px] font-[500] font-inter text-center rounded-[26px] text-[#fff] py-[10px] px-[15px]">
                    Leading
                </div>
                <div className="bg-[transparent] cursor-pointer text-[13px] leading-[18px] font-[500] font-inter text-center rounded-[26px] text-[#000] py-[10px] px-[15px]">
                    Financial Management
                </div>
                <div className="bg-[transparent] cursor-pointer text-[13px] leading-[18px] font-[500] font-inter text-center rounded-[26px] text-[#000] py-[10px] px-[15px]">
                    Account Verification
                </div>
                <div className="bg-[transparent] cursor-pointer text-[13px] leading-[18px] font-[500] font-inter text-center rounded-[26px] text-[#000] py-[10px] px-[15px]">
                    Payments
                </div>
            </div>
        {/* end tab selections */}
        {/* flex section */}
            <div className="flex mt-[76px] justify-between">
                <div className="w-[40%]">
                    <div className="font-inter text-[#000] leading-[39.91px] text-[30px] font-[700]">
                        Carbon&apos;s personalized loan offers
                    </div>
                    <div className="font-inter mt-[24px] mb-[12px] leading-[18px] text-[13px] text-[#606060] font-[500]">
                        Carbon wanted to make their risk assessment and borrower qualification 
                        better with high-quality data
                    </div>
                    <div className="font-inter leading-[18px] text-[13px] text-[#606060] font-[500]">
                        Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes. They get cash 
                        flow on the accounts for up to 12 months, all seamlessly without writing a single line
                    </div>
                    <div className="font-inter cursor-pointer leading-[20.75px] text-[#2254B4] text-[13px] font-[700] mt-[24.63px]">
                        Read more about Statement Pages &#8594;
                    </div>
                </div>
                {/* end flex one */}
                <div className="w-fit">
                    <img src={phoneFrame} loading="lazy" class="" alt=""/>
                </div>
            </div>
        {/* end flex section */}
    </div>
  );
};

export default businessCard;
