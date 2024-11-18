import React from 'react'
import CategoryItem from './CategoryItem';

const Category = () => {
    const categoryArray =[
        {
            img:"card-7.png",
            header:"man",
            button:"See Details"
        },
        {
            img:"card-8.jpg",
            header:"woman",
            button:"See Details"
        },
        {
            img:"card-9.jpg",
            header:"kids",
            button:"See Details"
        }
    ]
  return (
    <section className="Category">
      <div className="container">
        <div className="Category__wrapper grid gap-5 md:grid-cols-3">
          {categoryArray.map((item, key) => (
            <>
              <CategoryItem item={item} key={key} />
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category