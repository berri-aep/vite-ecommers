import { imgPath } from '@/helpers/function-general'
import React from 'react'
import Head from './Head'
import { Link } from 'react-router-dom';

const WeddingBanner = () => {
  return (
    <section className="py-[10rem] text-center">
      <div className="container">
        <img
          src={`${imgPath}/secondbanner.png`}
          alt=""
          className="w-full rounded-[4rem] "
        />
      </div>
      <Head
        title="wear to wedding"
        subheader="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Exercitationem, cum?"
      />
      <button className='bg-black text-white rounded-full py-3 px-10 text-[20px]'><Link to="/">See Details</Link></button>
    </section>
  );
}

export default WeddingBanner