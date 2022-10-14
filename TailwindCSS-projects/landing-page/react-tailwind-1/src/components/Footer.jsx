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
            <li className='py-2 text-sm hover:cursor-pointer hover:opacity-70 duration-200'>مشاوره</li>
            <li className='py-2 text-sm hover:cursor-pointer hover:opacity-70 duration-200'>تبلیغات</li>
            <li className='py-2 text-sm hover:cursor-pointer hover:opacity-70 duration-200'>فروش</li>
            <li className='py-2 text-sm hover:cursor-pointer hover:opacity-70 duration-200'>طراحی</li>
          </ul>
        </div>
        <div className='mt-8 md:mt-0'>
          <h6 className='font-medium text-gray-400'>پشتیبانی</h6>
          <ul>
            <li className='py-2 text-sm hover:cursor-pointer hover:opacity-70 duration-200'>قیمت ها</li>
            <li className='py-2 text-sm hover:cursor-pointer hover:opacity-70 duration-200'>مقاله ها</li>
            <li className='py-2 text-sm hover:cursor-pointer hover:opacity-70 duration-200'>راهنما</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>شرکت</h6>
          <ul>
            <li className='py-2 text-sm hover:cursor-pointer hover:opacity-70 duration-200'>درباره ما</li>
            <li className='py-2 text-sm hover:cursor-pointer hover:opacity-70 duration-200'>بلاگ</li>
            <li className='py-2 text-sm hover:cursor-pointer hover:opacity-70 duration-200'>همکاری</li>
            <li className='py-2 text-sm hover:cursor-pointer hover:opacity-70 duration-200'>تماس با ما</li>
          </ul>
        </div>
        <div className='mt-8 md:mt-0'>
          <h6 className='font-medium text-gray-400'>قوانین</h6>
          <ul>
            <li className='py-2 text-sm hover:cursor-pointer hover:opacity-70 duration-200'>حریم خصوصی</li>
            <li className='py-2 text-sm hover:cursor-pointer hover:opacity-70 duration-200'>سیاست ها</li>
            <li className='py-2 text-sm hover:cursor-pointer hover:opacity-70 duration-200'>لورم ایپسوم</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;
