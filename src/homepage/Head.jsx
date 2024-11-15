import React from 'react'

const Head = ({title, subheader}) => {
  return (
    <div className="newCollection__title text-center pb-10">
      <h2 className="text-[6rem] font-semibold uppercase">{title}</h2>
      <p className="text-[1.5rem] opacity-60">
        {subheader}
      </p>
    </div>
  );
}

export default Head