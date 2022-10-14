import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-light'>
      <h1 className='hidden md:block text-3xl font-bold text-secondary hover:cursor-pointer'>عنوان سایت</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 hover:cursor-pointer'>صفحه اصلی</li>
        <li className='p-4 hover:cursor-pointer'>محصولات</li>
        <li className='p-4 hover:cursor-pointer'>درباره ما</li>
        <li className='p-4 hover:cursor-pointer'>تماس با ما</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-secondary m-4'>عنوان سایت</h1>
        <li className='p-4 border-b border-gray-600'>صفحه اصلی</li>
        <li className='p-4 border-b border-gray-600'>محصولات</li>
        <li className='p-4 border-b border-gray-600'>درباره ما</li>
        <li className='p-4'>تماس با ما</li>
      </ul>
      <h1 className='block md:hidden text-3xl font-bold text-secondary hover:cursor-pointer'>عنوان سایت</h1>
    </div>
  );
};

export default Navbar;
