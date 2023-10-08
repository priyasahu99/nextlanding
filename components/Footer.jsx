import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="absolute top-[3748px] left-[0px] flex flex-col items-start justify-start text-45xl text-neutral-black">
        <div className="bg-neutral-silver w-[1440px] flex flex-col items-center justify-start py-8 px-0 box-border gap-[32px]">
          <div className="relative leading-[76px] font-semibold inline-block w-[887px]">
            Pellentesque suscipit fringilla libero eu.
          </div>
          <div className="rounded bg-brand-primary flex flex-row items-center justify-center py-3.5 px-8 gap-[8px] text-base text-default-white">
            <div className="relative leading-[24px] font-medium">
              Get a Demo
            </div>
            <img
              className="relative w-4 h-4"
              alt=""
              src="/16arrows--directionsright.svg"
            />
          </div>
        </div>


        <div className="bg-neutral-black flex flex-row items-start justify-start py-16 px-[165px] gap-[125px] text-left text-sm text-neutral-silver">
          <div className="overflow-hidden flex flex-col items-start justify-start gap-[40px]">
            <div className="flex flex-row items-center justify-start gap-[9.89px]">
              <img
                className="relative w-[43.27px] h-[29.67px]"
                alt=""
                src="/icon7.svg"
              />
              <img
                className="relative w-[137.84px] h-[25.54px]"
                alt=""
                src="/nexcent.svg"
              />
            </div>
            <div className="overflow-hidden flex flex-col items-center justify-start gap-[8px]">
              
              <div className="relative leading-[20px] inline-block w-[350px]">
                All rights reserved
              </div>
            </div>
            <div className="overflow-hidden flex flex-row items-start justify-start gap-[16px]">
              <img
                className="relative w-8 h-8"
                alt=""
                src="/social-icons.svg"
              />
              <img
                className="relative w-8 h-8"
                alt=""
                src="/social-icons1.svg"
              />
              <img
                className="relative w-8 h-8"
                alt=""
                src="/social-icons2.svg"
              />
              <img
                className="relative w-8 h-8"
                alt=""
                src="/social-icons3.svg"
              />
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-start justify-start gap-[30px] text-xl text-default-white">
            <div className="overflow-hidden flex flex-col items-start justify-start gap-[24px]">
              <div className="relative leading-[28px] font-semibold inline-block w-40">
                Company
              </div>
              <div className="overflow-hidden flex flex-col items-start justify-start gap-[12px] text-sm text-neutral-silver">
                <div className="relative leading-[20px] inline-block w-40">
                  About us
                </div>
                <div className="relative leading-[20px] inline-block w-40">
                  Blog
                </div>
                <div className="relative leading-[20px] inline-block w-40">
                  Contact us
                </div>
                <div className="relative leading-[20px] inline-block w-40">
                  Pricing
                </div>
                <div className="relative leading-[20px] inline-block w-40">
                  Testimonials
                </div>
              </div>
            </div>
            <div className="overflow-hidden flex flex-col items-start justify-start gap-[24px]">
              <div className="relative leading-[28px] font-semibold inline-block w-40">
                Support
              </div>
              <div className="overflow-hidden flex flex-col items-start justify-start gap-[12px] text-sm text-neutral-silver">
                <div className="relative leading-[20px] inline-block w-40">
                  Help center
                </div>
                <div className="relative leading-[20px] inline-block w-40">
                  Terms of service
                </div>
                <div className="relative leading-[20px] inline-block w-40">
                  Legal
                </div>
                <div className="relative leading-[20px] inline-block w-40">
                  Privacy policy
                </div>
                <div className="relative leading-[20px] inline-block w-40">
                  Status
                </div>
              </div>
            </div>
            <div className="overflow-hidden flex flex-col items-start justify-start gap-[24px]">
              <div className="relative leading-[28px] font-semibold inline-block w-40">
                Stay up to date
              </div>
              <div className="relative w-[255px] h-10 text-sm text-text-gray-300">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-default-white opacity-[0.2]" />
                <img
                  className="absolute h-[45%] w-[7.06%] top-[27.5%] right-[4.71%] bottom-[27.5%] left-[88.24%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/essential-icons--send.svg"
                />
                <div className="absolute top-[22.5%] left-[4.71%] leading-[20px]">
                  Your email address
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Footer