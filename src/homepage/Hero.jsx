import { imgPath } from '@/helpers/function-general';
import React from 'react'
import { Link } from 'react-router-dom';

const Hero = ({img, header, subheader, btn}) => {
  return (
    <section className="hero relative ">
      <div className="container">
        <div className="hero__wrapper">
          <img
            className="w-full max-h-[900px] object-cover object-center rounded-[2rem]"
            src={`${imgPath}/${img}`}
            alt=""
          />
          <div className="hero__texts absolute bottom-[18rem] left-[3.5rem] md:bottom-[4rem] md:left-[2rem] md:left-[5rem] flex items-center md:items-end flex-col md:flex-row md:gap-[35rem]">
            <div className="hero__text--left text-white">
              <h1 className="text-[2rem] md:text-[6rem] uppercase font-semibold md:py-10">
                {header}
              </h1>
              <p className='md:text-2xl w-[400px] md:w-[840px] pb-5'>
                {subheader}
              </p>
            </div>
            <Link
              to="/"
              className="bg-white rounded-full text-black py-2 px-5 md:py-5 md:px-[3rem] text-[25px] font-semibold"
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