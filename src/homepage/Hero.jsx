import { imgPath } from '@/helpers/function-general';
import React from 'react'
import { Link } from 'react-router-dom';

const Hero = ({img, header, subheader, btn}) => {
  return (
    <section className="hero relative">
      <div className="container">
        <div className="hero__wrapper">
          <img
            className="w-full max-h-[900px] object-cover object-center rounded-[2rem]"
            src={`${imgPath}/${img}`}
            alt=""
          />
          <div className="hero__texts absolute bottom-[4rem] left-[5rem] flex items-end gap-[35rem]">
            <div className="hero__text--left text-white">
              <h1 className="text-[6rem] uppercase font-semibold py-10">
                {header}
              </h1>
              <p className='text-2xl w-[840px]'>
                {subheader}
              </p>
            </div>
            <Link
              to="/"
              className="bg-white rounded-full text-black py-5 px-[3rem] text-[25px] font-semibold"
            >
              {btn}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero