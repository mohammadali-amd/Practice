import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-secondary text-2xl font-bold py-2 mb-5'>
            لورم ایپسوم متن ساختگی با تولید سادگی
          </h1>
          <p className='text-justify'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md md:rounded-l-none text-dark'
              type='email'
              placeholder='ایمیل'
            />
            <button className='bg-secondary text-dark rounded-md md:rounded-r-none font-medium w-[200px] ml-4 my-6 px-6 py-3 hover:bg-primary duration-200'>
              خبرم کن
            </button>
          </div>
          <p className='text-justify'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ{' '}
            <span className='text-secondary hover:text-primary hover:cursor-pointer duration-150'>سیاست حفظ حریم خصوصی</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
