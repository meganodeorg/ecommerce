import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useState } from 'react';

const NAV_ITEMS = [
  { name: 'HOME', link: '/' },
  { name: 'COLLECTION', link: '/collection' },
  { name: 'ABOUT', link: '/about' },
  { name: 'CONTACT', link: '/contact' },
];
const MENU_PROFILES = [
  { name: 'Profile', link: '/profile' },
  { name: 'Settings', link: '/settings' },
  { name: 'Logout', link: '/logout' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={'/'}>
        <img src={assets.logo} alt="logo" className="w-36" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {NAV_ITEMS.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className="flex flex-col items-center gap-1 "
          >
            <p>{item.name}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        ))}
      </ul>
      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="search"
          className="w-5 cursor-pointer"
        />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt="profile"
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute pt-4 right-0">
            <div className="flex flex-col gap-5 px-3 py-2 bg-slate-100 text-gray-500 rounded">
              {MENU_PROFILES.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.link}
                  className="flex flex-col items-center gap-1 hover:text-black"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="cart" className="w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          alt="menu"
          className="w-5 cursor-pointer sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          isOpen ? 'w-full' : 'w-0'
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          {isOpen &&
            NAV_ITEMS.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className="flex justify-center py-2 border rounded-sm"
                onClick={() => setIsOpen(!isOpen)}
              >
                <p>{item.name}</p>
                {/* <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" /> */}
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
