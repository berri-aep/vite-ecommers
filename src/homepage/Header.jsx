import { imgPath } from '@/helpers/function-general';
import { Search, ShoppingBasket } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header py-5">
      <div className="container">
        <div className="header__wrapper flex justify-between items-center">
          <ul className="flex gap-5 ">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>New & Featured</li>
            <li>Gift</li>
          </ul>
          <Link className="font-bold text-[30px]"> <img src={`${imgPath}/headerlogo.png`} alt="" /></Link>
          <ul className="flex gap-5">
            <li>
              <button>
                <Search strokeWidth={1} />
              </button>
            </li>
            <li>
              <button>
                <ShoppingBasket strokeWidth={1} />
              </button>
            </li>
            <li>
              <button>Login</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header