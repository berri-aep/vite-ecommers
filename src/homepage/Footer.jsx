import { imgPath } from '@/helpers/function-general'
import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container py-[5rem]">
        <div className="footer__wrapper flex flex-col-reverse md:flex-row justify-between">
          <div className="footer__left flex flex-col justify-end">
            <img src={`${imgPath}/footerlogo.png`} alt="" className='pt-5' />
            <h4 className="font-normal md:w-[35rem] text-lg md:text-xl opacity-70 py-5 text-center md:text-justify">
              Get newsletter update for upcoming product and best discount for
              all item
            </h4>
            <div className="footer--cta flex gap-5">
              <input
                type="text"
                placeholder="Your Email"
                className="border border-black border-opacity-35 rounded-full pr-[4rem] pl-[2rem] py-3 md:text-2xl"
              />
              <Link className="rounded-full bg-black px-[3rem] md:px-[4rem] py-3 text-white md:text-2xl">
                Submit
              </Link>
            </div>
          </div>
          <div className="footer__right flex flex-col gap-5 md:flex-row md:gap-[10rem]">
            <ul className="product">
              <h5>Product</h5>
              <li className="li">
                <Link to="/">Tshirt</Link>
              </li>
              <li className="li">
                <Link to="/">Jacket</Link>
              </li>
              <li className="li">
                <Link to="/">Shoes</Link>
              </li>
              <li className="li">
                <Link to="/">Pants</Link>
              </li>
              <li className="li">
                <Link to="/">Sunglasses</Link>
              </li>
              <li className="li">
                <Link to="/">Tuxedo</Link>
              </li>
            </ul>
            <ul className="Categories">
              <h5>Categories</h5>
              <li>
                <Link>Man</Link>
              </li>
              <li>
                <Link>Woman</Link>
              </li>
              <li>
                <Link>Kids</Link>
              </li>
              <li>
                <Link>Gift</Link>
              </li>
              <li>
                <Link>New Arrival</Link>
              </li>
            </ul>
            <ul className="SocialMedia">
              <h5>Our Social Media</h5>
              <li>
                <Link>Instagram</Link>
              </li>
              <li>
                <Link>Facebook</Link>
              </li>
              <li>
                <Link>YouTube</Link>
              </li>
              <li>
                <Link>Twitter</Link>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
      <div className="bottom bg-black text-white flex flex-col-reverse text-center md:flex-row justify-between p-5 md:text-xl gap-5">
        <div className="bottom__title">
          <h5 className='font-normal text-xl'>©2023 Tulos Production</h5>
        </div>
        <div className="bottom__link">
          <ul className='flex gap-[3rem]'>
            <li>
              <Link>Terms & Conditions</Link>
            </li>
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <Link>Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer