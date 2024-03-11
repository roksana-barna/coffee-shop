import React from 'react';
import coffee from '../../assets/12c5f1d0209ee224e405d2767447ac1c.png'
import img1 from '../../assets/download.jpg'
import img2 from '../../assets/download (1).jpg'
import img3 from '../../assets/png-clipart-iced-coffee-latte-tea-cafe-cup-of-coffee-beans-black-ceramic-cup-filled-with-brown-coffee-food-coffee-shop.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className='lg:flex justify-between text-left mt-10 '>
            <div className='text-[#270A05] space-y-5'>
                <p className='font-bold text-sm'>WELCOME TO OUR</p>
                <h1 className='text-6xl font-bold font-serif'>Unlocklive</h1>
                <h3 className='text-3xl font-bold font-serif'>Elevating Your Coffee Experience</h3>
                <p className='text-sm'>Unlocklive  embodies our commitment to transforming the simple act of sipping coffee into a <br /> refined and memorable journey. At Epicurean, we take pride in curating an exceptional <br /> coffee experience that transcends the ordinary.</p>
                <div className='lg:flex    justify-between'>
                    <button className='bg-orange-900 text-white px-4 py-1 text-xs rounded-lg '>EXPLORE OUR MENU</button>
                    <img className='h-8 w-8 lg:ml-6 ' src={img1} alt="" />
                    <img className='h-8 w-8  ' src={img2} alt="" />
                    <img className='h-8 w-8 lg:mr-10' src={img3} alt="" />
                    <div>
                        <p className='font-bold text-base font-serif'>1200+</p>
                        <p className='text-xs'>Tasty Variant Coffee</p>
                    </div>
                </div>
            </div>
            <div>
                <img className='h-[350px] w-[450px]' src={coffee} alt="" />
            </div>
        </div>
    );
};

export default Banner;