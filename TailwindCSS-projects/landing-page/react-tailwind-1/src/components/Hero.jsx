import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[65%] md:-right-[50%] rounded-full teal__gradient bottom-40" />

      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-secondary font-bold p-2'>
          لورم ایپسوم متن ساختگی
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          لورم ایپسوم
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 ml-2'>لورم ایپسوم متن ساختگی</p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['شماره 1', 'نمونه', 'شماره 2']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
        <button className='bg-secondary w-[200px] rounded-md font-semibold my-6 mx-auto py-3 text-dark hover:scale-110 duration-150'>لورم ایپسوم</button>
      </div>
    </div>
  );
};

export default Hero;
