import React from "react";
import './Build.css'
import connectVector from '../assets/image/connectVector.svg'
import directVector from '../assets/image/directVector.svg'
import flutterwaveLogo from '../assets/image/flutterwaveLogo.svg'
import Union from '../assets/image/Union.svg'
import timeImage from '../assets/image/timeImage.svg'
import BusinessBuilding from './businessBuilding'

const buildFuture = () => {
  return (
    <>
        <div className="mt-[110px] px-[182px]">
            <div className="w-[446px] font-inter text-[#000] font-[700] text-[42px] leading-[55.87px]">
                Build for the future of digital finance.
            </div>
            <div className="mt-[24px] w-[446px] leading-[25px] text-[#000] font-inter font-[400] text-[19px]">
              Bring tomorrow's solutions to life, with our customer-focused solutions, today.
            </div>
        </div>
        
        <div className="px-[182px] mt-[51px]">
          {/* connect frame */}
          <div className="connect_frame mb-[20px] w-full rounded-[8px] h-fit">
            <div className="pl-[45px] pt-[56px]">
              <img src={connectVector} className="" loading="lazy" alt=""/>
              <div className="mt-[24px] text-[#fff] leading-[39.91px] font-inter font-[700] text-[30px]">
                Connect
              </div>
              <div className="mt-[8px] w-[303px] text-[#fff] leading-[18px] font-inter font-[500] text-[13px]">
                Securely access financial accounts for statements, transactions, and identity
              </div>
              {/* button */}
              <button className="w-fit mt-[38px] mb-[94px] font-[700] text-[#2254B4] leading-[18px] font-inter text-[11px] py-[10px] bg-[#fff] px-[15px] rounded-[4px]">
                {'Start with connect' + '    '} &#8594;
              </button>
              {/* end btn */}
            </div>
          </div>
          {/* end connect frame */}
          {/* begin flex layout for cards */}
          <div className="flex mb-[150px] w-full space-x-[20px]">
            <div className="w-[50%] pt-[42px] px-[45px] directPay_frame rounded-[8px]">
              <div className="mb-[24px]">
                <img src={directVector} className="" loading="lazy" alt=""/>
              </div>
              <div>
                <div className="font-inter mb-[8px] text-[#000] leading-[39.91px] text-[30px] font-[700]">DirectPay</div>
                <div className="font-inter mb-[28px] w-[80%] leading-[18px] text-[#000] font-[500] text-[13px]">
                  Collect bank payments in your web or mobile app. No cards. No chargebacks.
                </div>
                <button className="w-fit mb-[17px] font-[700] bg-[#2254B4] leading-[18px] font-inter text-[11px] py-[10px] text-[#fff] px-[15px] rounded-[4px]">
                  {'Start with DirectPay' + '    '} &#8594;
                </button>
                <div className="mb-[256px] space-x-[4px] items-center flex">
                  <div className="font-[500] leading-[18px] text-[#000] text-[11px] font-inter">In Partnership with</div>
                  <div><img src={flutterwaveLogo} className="" alt=""/></div>
                </div>
              </div>
            </div>
            {/* end directpay card */}
            {/* begin percept card */}
            <div className="w-[50%] pt-[42px] px-[45px] percept_frame rounded-[8px]">
              <div className="mb-[24px]">
                <img src={Union} className="" loading="lazy" alt=""/>
              </div>
              <div className="font-inter mb-[8px] text-[#fff] leading-[39.91px] text-[30px] font-[700]">Percept</div>
              <div className="font-inter mb-[28px] w-[80%] leading-[18px] text-[#fff] font-[500] text-[13px]">
                Money operations and reconciliation for all your corporate accounts, in one dashboard
              </div>
              <button className="w-fit space-x-[5px] flex items-center mb-[17px] font-[700] bg-[#202020] leading-[18px] font-inter text-[11px] py-[10px] text-[#fff] px-[15px] rounded-[4px]">
                <div>Request access</div>
                <div><img src={timeImage} className="" loading="lazy" alt=""/></div>
              </button>
            </div>
            {/* end percept card */}
          </div>
          {/* end flex layout for cards */}
        </div>
      <BusinessBuilding/>
    </>
  );
};

export default buildFuture;
