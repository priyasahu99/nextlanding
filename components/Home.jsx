import React from 'react'

const Home = () => {
  return (
    <div>

<div className="absolute top-[84px] left-[0px] flex flex-col items-start justify-start gap-[40px]">
        <div className="self-stretch bg-neutral-silver flex flex-row items-center justify-start py-24 px-36 gap-[104px] text-left text-45xl">
          <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative leading-[76px] font-semibold">
                <span>{`Lessons and insights `}</span>
                <span className="text-brand-primary">from 8 years</span>
              </div>
              <div className="self-stretch relative text-base leading-[24px] text-neutral-grey">
                Where to grow your business as a photographer: site or social
                media?
              </div>
            </div>
            <div className="rounded bg-brand-primary flex flex-row items-center justify-center py-3.5 px-8 text-center text-base text-default-white">
              <div className="relative leading-[24px] font-medium">
                Register
              </div>
            </div>
          </div>
          <img
            className="relative w-[391px] h-[407px]"
            alt=""
            src="/illustration.svg"
          />
        </div>


        <div className="w-[1440px] flex flex-col items-center justify-start py-0 px-36 box-border gap-[16px]">
          <div className="w-[1110px] flex flex-col items-center justify-start gap-[8px]">
            <div className="self-stretch relative leading-[44px] font-semibold">
              Our Clients
            </div>
            <div className="self-stretch relative text-base leading-[24px] text-neutral-grey">
              We have been working with some Fortune 500+ clients
            </div>
          </div>
          <div className="self-stretch h-[98px] flex flex-row items-center justify-between">
            <img
              className="relative rounded-lg w-12 h-12"
              alt=""
              src="/logo.svg"
            />
            <img
              className="relative rounded-lg w-12 h-12"
              alt=""
              src="/logo1.svg"
            />
            <img
              className="relative rounded-lg w-[55px] h-12"
              alt=""
              src="/logo2.svg"
            />
            <img
              className="relative rounded-lg w-12 h-12"
              alt=""
              src="/logo3.svg"
            />
            <img
              className="relative rounded-lg w-12 h-12"
              alt=""
              src="/logo4.svg"
            />
            <img
              className="relative rounded-lg w-[52px] h-12"
              alt=""
              src="/logo5.svg"
            />
            <img
              className="relative rounded-lg w-[55px] h-12"
              alt=""
              src="/logo6.svg"
            />
          </div>
        </div>



        <div className="flex flex-col items-start justify-start gap-[16px]">
          <div className="w-[1440px] flex flex-col items-center justify-start gap-[8px]">
            <div className="relative leading-[44px] font-semibold inline-block w-[542px]">
              Manage your entire community in a single system
            </div>
            <div className="self-stretch relative text-base leading-[24px] text-neutral-grey">
              Who is Nextcent suitable for?
            </div>
          </div>
          <div className="w-[1440px] flex flex-row items-center justify-between py-0 px-36 box-border text-9xl">
            <div className="rounded-lg bg-default-white shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] w-[299px] flex flex-col items-center justify-start py-6 px-8 box-border gap-[8px]">
              <div className="w-[267px] flex flex-col items-center justify-start gap-[16px]">
                <div className="relative w-[65px] h-14">
                  <div className="absolute top-[56px] left-[65px] rounded-tl-[18px] rounded-tr-8xs rounded-br-[10px] rounded-bl-8xs bg-honeydew w-[50px] h-[49px] [transform:_rotate(-180deg)] [transform-origin:0_0]" />
                  <img
                    className="absolute top-[0px] left-[0px] w-12 h-12"
                    alt=""
                    src="/icon.svg"
                  />
                </div>
                <b className="self-stretch relative leading-[36px]">
                  Membership Organisations
                </b>
              </div>
              <div className="flex flex-row items-start justify-start text-sm text-neutral-grey">
                <div className="relative leading-[20px] inline-block w-[251px] shrink-0">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-default-white shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] w-[299px] flex flex-col items-center justify-start py-6 px-8 box-border gap-[8px]">
              <div className="w-[267px] flex flex-col items-center justify-start gap-[16px]">
                <img
                  className="relative w-[65px] h-14"
                  alt=""
                  src="/icon1.svg"
                />
                <b className="self-stretch relative leading-[36px]">
                  National Associations
                </b>
              </div>
              <div className="flex flex-row items-start justify-start text-sm text-neutral-grey">
                <div className="relative leading-[20px] inline-block w-60 shrink-0">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-default-white shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] w-[299px] flex flex-col items-center justify-start py-6 px-8 box-border gap-[8px]">
              <div className="w-[267px] flex flex-col items-center justify-start gap-[16px]">
                <img
                  className="relative w-[65px] h-14"
                  alt=""
                  src="/icon2.svg"
                />
                <b className="relative leading-[36px] inline-block w-[231px]">
                  Clubs And Groups
                </b>
              </div>
              <div className="flex flex-row items-start justify-start text-sm text-neutral-grey">
                <div className="relative leading-[20px] inline-block w-[251px] shrink-0">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      
    </div>
  )
}

export default Home