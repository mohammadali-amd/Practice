import React from 'react';
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare, } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-primary'>عنوان سایت</h1>
        <p className='py-4 text-justify'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
        <div className='flex justify-between px-16 lg:px-0 lg:w-[75%] my-6'>
          <FaFacebookSquare size={30} className='hover:cursor-pointer hover:opacity-70 duration-200' />
          <FaInstagram size={30} className='hover:cursor-pointer hover:opacity-70 duration-200' />
          <FaTwitterSquare size={30} className='hover:cursor-pointer hover:opacity-70 duration-200' />
          <FaGithubSquare size={30} className='hover:cursor-pointer hover:opacity-70 duration-200' />
          <FaDribbbleSquare size={30} className='hover:cursor-pointer hover:opacity-70 duration-200' />
        </div>
      </div>
      <div className='lg:col-span-2 flex-none columns-2 md:flex justify-between mt-0 lg:mt-6'>
        <div>
          <h6 className='font-medium text-gray-400'>خدمات</h6>
          <ul>
            <li className='py-2 text-sm hover:opacity-70 duration-200'><span className='hover:cursor-pointer'>مشاوره</span></li>
            <li className='py-2 text-sm hover:opacity-70 duration-200'><span className='hover:cursor-pointer'>تبلیغات</span></li>
            <li className='py-2 text-sm hover:opacity-70 duration-200'><span className='hover:cursor-pointer'>فروش</span></li>
            <li className='py-2 text-sm hover:opacity-70 duration-200'><span className='hover:cursor-pointer'>طراحی</span></li>
          </ul>
        </div>
        <div className='mt-8 md:mt-0'>
          <h6 className='font-medium text-gray-400'>پشتیبانی</h6>
          <ul>
            <li className='py-2 text-sm hover:opacity-70 duration-200'><span className='hover:cursor-pointer'>قیمت ها</span></li>
            <li className='py-2 text-sm hover:opacity-70 duration-200'><span className='hover:cursor-pointer'>مقاله ها</span></li>
            <li className='py-2 text-sm hover:opacity-70 duration-200'><span className='hover:cursor-pointer'>راهنما</span></li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>شرکت</h6>
          <ul>
            <li className='py-2 text-sm hover:opacity-70 duration-200'><span className='hover:cursor-pointer'>درباره ما</span></li>
            <li className='py-2 text-sm hover:opacity-70 duration-200'><span className='hover:cursor-pointer'>بلاگ</span></li>
            <li className='py-2 text-sm hover:opacity-70 duration-200'><span className='hover:cursor-pointer'>همکاری</span></li>
            <li className='py-2 text-sm hover:opacity-70 duration-200'><span className='hover:cursor-pointer'>تماس با ما</span></li>
          </ul>
        </div>
        <div className='mt-8 md:mt-0'>
          <h6 className='font-medium text-gray-400'>قوانین</h6>
          <ul>
            <li className='py-2 text-sm hover:opacity-70 duration-200'><span className='hover:cursor-pointer'>حریم خصوصی</span></li>
            <li className='py-2 text-sm hover:opacity-70 duration-200'><span className='hover:cursor-pointer'>سیاست ها</span></li>
            <li className='py-2 text-sm hover:opacity-70 duration-200'><span className='hover:cursor-pointer'>لورم ایپسوم</span></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;
