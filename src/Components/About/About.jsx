import React from 'react';
import img from '../../assets/Group 1000008461.png'
import { MdSlowMotionVideo } from "react-icons/md";


const About = () => {
    return (
        <div className='lg:flex mt-20 bg-[#FFFAF2]   '>
            <div  className='bg-[#86371C] w-[200px] rounded-xl'>
                <img src={img} alt="" />
                <div className='text-white flex justify-around'>
                    <MdSlowMotionVideo className='ml-5  ' />
                    <h2 className=' pb-5 font-serif px-3'>Play intro video</h2>
                </div>
            </div>
            <div className='px-10 bg-[#FFFAF2] pt-10'>
                <h2 className='font-serif mb-3 font-bold'>Our Opening Hours</h2>
                <p className='text-xs'>Mon - Sat: 07:00 - 18:00</p>
                <p className='text-xs'>Only Sun: 09:00 - 14:00</p>
            </div>
            <div className="divider"></div>
            <div className='px-10 pt-10  bg-[#FFFAF2]'>
                <h2 className='font-serif mb-3 font-bold'>
                    Our Live Location
                </h2>
                <p className='text-xs'>
                    848 A 28TH ST, Brooklyn
                </p>
                <p className='text-xs'>
                    New York, UK
                </p>
            </div>
            <div className='px-10 pt-10 bg-[#FFFAF2]'>
                <h2 className='font-serif mb-3 font-bold'>
                    Book A Table Now
                </h2>
                <p>
                    +1 318-254-6849
                </p>
                <p>
                    +1 452-754-6579
                </p>
            </div>
        </div>
    );
};

export default About;