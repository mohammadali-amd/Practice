import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>محصول 1</h2>
                    <p className='text-center text-4xl font-bold'>100 <sup>هزار تومان</sup></p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 گیگابایت حافظه</p>
                        <p className='py-2 border-b mx-8'>2 گیگابایت رم</p>
                        <p className='py-2 border-b mx-8'>3 ماهه</p>
                    </div>
                    <button className='bg-secondary w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-dark hover:text-light duration-200'>خرید</button>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>محصول 2</h2>
                    <p className='text-center text-4xl font-bold'>200 <sup>هزار تومان</sup></p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>1 ترابایت حافظه</p>
                        <p className='py-2 border-b mx-8'>4 گیگابایت رم</p>
                        <p className='py-2 border-b mx-8'>6 ماهه</p>
                    </div>
                    <button className='bg-dark text-light w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-secondary hover:text-dark duration-200'>خرید</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>محصول 3</h2>
                    <p className='text-center text-4xl font-bold'>300 <sup>هزار تومان</sup></p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>2 ترابایت حافظه</p>
                        <p className='py-2 border-b mx-8'>8 گیگابایت رم</p>
                        <p className='py-2 border-b mx-8'>1 ساله</p>
                    </div>
                    <button className='bg-secondary w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-dark hover:text-light duration-200'>خرید</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
