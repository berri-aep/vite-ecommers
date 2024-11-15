import React from 'react'
import CollectionItem from './CollectionItem';
import Head from './Head';

const NewCollection = () => {
    const newCollectionArray = [
        {
            img:"card-1.png",
            header:"Loro Piana",
            subheader:"Slim-Fit Stripied Silk and Linen-Blend Polo Shirt",
            price:"$45"
        },
        {
            img:"card-2.png",
            header:"Loro Piana",
            subheader:"Slim-Fit Stripied Silk and Linen-Blend Polo Shirt",
            price:"$45"
        },
        {
            img:"card-3.png",
            header:"Loro Piana",
            subheader:"Slim-Fit Stripied Silk and Linen-Blend Polo Shirt",
            price:"$45"
        },
        {
            img:"card-4.png",
            header:"Loro Piana",
            subheader:"Slim-Fit Stripied Silk and Linen-Blend Polo Shirt",
            price:"$45"
        },
        {
            img:"card-5.png",
            header:"Loro Piana",
            subheader:"Slim-Fit Stripied Silk and Linen-Blend Polo Shirt",
            price:"$45"
        },
        {
            img:"card-6.png",
            header:"Loro Piana",
            subheader:"Slim-Fit Stripied Silk and Linen-Blend Polo Shirt",
            price:"$45"
        }
    ]
  return (
    <section className="newCollection pt-[10rem]">
      <div className="container">
        <Head
          title="new collection"
          subheader="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Exercitationem, cum?"
        />
        <div className="newCollection__wrapper grid grid-cols-3 gap-5">
          {newCollectionArray.map((item, key) => (
            <>
              <CollectionItem item={item} key={key} />
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewCollection