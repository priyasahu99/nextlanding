import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="absolute top-[0px] left-[0px] bg-neutral-silver w-[1440px] h-[84px] overflow-hidden text-left text-base text-text-gray-900">
        <div className="absolute h-[28.57%] w-[40.83%] top-[35.71%] right-[29.62%] bottom-[35.71%] left-[29.55%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] overflow-hidden flex flex-row items-center justify-center gap-[50px]">
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[24px] font-medium">Home</div>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[24px]">Service</div>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[24px]">Feature</div>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[24px]">Product</div>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[24px]">Testimonial</div>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[24px]">FAQ</div>
            </div>
          </div>
        </div>
        <div className="absolute h-[28.57%] w-[10.73%] top-[35.71%] right-[81.98%] bottom-[35.71%] left-[7.29%] flex flex-row items-center justify-start gap-[8px]">
          <img className="relative w-[35px] h-6" alt="" src="/icon8.svg" />
          <img
            className="relative w-[111.49px] h-[20.66px]"
            alt=""
            src="/nexcent1.svg"
          />
        </div>
        <div className="absolute h-[47.62%] w-[12.64%] top-[26.19%] right-[8.33%] bottom-[26.19%] left-[79.03%] overflow-hidden flex flex-row items-start justify-start gap-[14px] text-center text-sm text-brand-primary">
          <div className="rounded-md bg-neutral-silver flex flex-row items-center justify-start py-2.5 px-5">
            <div className="relative leading-[20px] font-medium">Login</div>
          </div>
          <div className="rounded-md bg-brand-primary flex flex-row items-center justify-start py-2.5 px-5 text-default-white">
            <div className="relative leading-[20px] font-medium">Sign up</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar