import { imgPath } from '@/helpers/function-general'
import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItem = ({ item, key }) => {
  return (
    <section className="categoryItem" key={key}>
      <div className="container">
        <div className="categoryItem__wrapper relative">
          <img
            src={`${imgPath}/${item.img}`}
            alt=""
            className="rounded-[2rem] w-full h-[50rem] object-cover"
          />
          <div className="categoryItem__details absolute bottom-5 left-5">
            <h2 className="uppercase text-white py-5 ">{item.header}</h2>
            <Link className="bg-white rounded-full font-semibold py-3 px-10">
              {item.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryItem