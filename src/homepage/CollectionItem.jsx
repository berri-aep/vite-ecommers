import { imgPath } from '@/helpers/function-general';
import React from 'react'

const CollectionItem = ({item, key}) => {
  return (
    <section className="CollectionCard" key={key}>
        <div className="container">    
      <div className="CollectionCard__wrapper">
        <img
          className="rounded-[2rem] h-[40rem] w-[40rem] object-cover bg-[#E8E9E4]"
          src={`${imgPath}/${item.img}`}
          alt=""
        />
        <h4 className='font-semibold'>{item.header}</h4>
        <p className='opacity-70 py-2'>{item.subheader}</p>
        <h4>{item.price}</h4>
      </div>
      </div>
    </section>
  );
}

export default CollectionItem