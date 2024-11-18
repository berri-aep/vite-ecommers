import { imgPath } from '@/helpers/function-general';
import { Search, ShoppingBasket } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="header py-5">
      <div className="container flex justify-between">
        <div className="logo flex justify-center">
          <Link className="font-bold text-[30px] flex">
            {" "}
            <img
              src={`${imgPath}/headerlogo.png`}
              alt=""
              className="block md:hidden z-50"
            />
          </Link>
        </div>
        <button
          className={`${isOpen ? "active" : ""} menu-btn md:hidden z-50`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className={` ${
            isOpen ? "active" : ""
          }  header__wrapper fixed w-full md:static h-screen md:h-auto bg-white z-40 flex flex-col md:flex-row md:justify-between md:items-center left-[100%] pt-[5rem] pl-10 md:pt-0 md:pl-0 `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <ul className="flex flex-col pb-5 border-b-2 md:border-b-0 md:flex-row gap-5 ">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>New & Featured</li>
            <li>Gift</li>
          </ul>
          <Link className="font-bold text-[30px]">
            {" "}
            <img
              src={`${imgPath}/headerlogo.png`}
              alt=""
              className="hidden md:block"
            />
          </Link>
          <ul className="flex flex-col md:flex-row gap-5 pt-5">
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