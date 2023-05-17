import React from "react";
import monologo from '../../assets/image/monologo.svg'

const Header = () => {
  return (
    <>
        <div className="px-[184px] w-full py-[24px] flex items-center justify-between">
            <div><img src={monologo} className="" alt="Mono logo"/></div>
            {/* selection tab */}
            <div className="flex font-inter text-[#000] leading-[18px] font-[500] text-[11px] space-x-[27px] items-center">
                <div className="cursor-pointer">Why mono</div>
                <div className="cursor-pointer">Why mono</div>
                <div className="cursor-pointer">Why mono</div>
                <div className="cursor-pointer">Why mono</div>
            </div>
            {/* end selection tab */}
            {/* button sign in */}
            <button className="py-[6px] text-[#fff] leading-[18px] font-inter font-[700] text-[11px] text-center rounded-[6px] px-[11px] bg-[#2254B4]">
                Sign in
            </button>
            {/* end sign in button */}
        </div>
    </>
  );
};

export default Header;
