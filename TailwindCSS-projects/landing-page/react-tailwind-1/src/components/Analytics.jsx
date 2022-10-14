import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-secondary font-bold '>لورم ایپسوم متن ساختگی</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>لورم ایپسوم متن ساختگی با تولید سادگی</h1>
          <p className='text-justify'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
          <button className='bg-dark text-light w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 shadow-xl hover:bg-secondary hover:text-dark duration-200'>لورم ایپسوم</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
