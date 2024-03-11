
import React from 'react';
import img from '../../assets/ac64020d08e24b89a95899b5b747b2bf.jpg'

const CoffeeSection = () => {
  return (
    <section className="flex flex-col lg:flex-row text-left justify-around mt-20  lg:p-8">
      <div className="w-full lg:w-1/2  mb-8 lg:mb-0 space-y-6">
        <h2 className='font-bold text-base font-serif text-orange-700'>~~~ Why Choose Us</h2>
        <p className='text-3xl font-bold font-serif'>
        Choosing Unlocklive, A Taste of Perfection </p>
        <p className='text-sm'>Unlocklive takes pride in the art of roasting, transforming raw coffee beans into a symphony of aromatic notes and rich flavors.</p>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="mb-4 lg:mb-0 lg:mr-8 border-2 rounded-lg p-3 text-center ">
            <p className="text-3xl font-bold font-serif">20+</p>
            <p>Years Experience</p>
          </div>
          <div className="mb-4 lg:mb-0 lg:mr-8  border-2 rounded-lg p-3 text-center">
            <p className="text-3xl font-bold font-serif">100+</p>
            <p>Master Chefs</p>
          </div>
          <div className="mb-4 lg:mb-0 lg:mr-8 py-6  border-2 rounded-lg p-3 text-center">
            <p className="text-3xl font-bold font-serif">30+</p>
            <p>Achievements</p>
          </div>
        </div>
        <p className="mt-6 text-sm">
          Your choice to savor our coffee is an invitation to experience the epitome of craftsmanship, flavor, and dedication.
        </p>
        <button className=' text-orange-900 border-2 border-orange-800 text-xs rounded-lg px-3 py-2'>Explore Our Menus</button>
      </div>
      <div className="w-full lg:w-1/2 ml-20">
        <img
          src={img}
          alt="Coffee Image"
          className="w-full lg:h-[428px] lg:w-[400px] rounded-lg"
        />
      </div>
    </section>
  );
};

export default CoffeeSection;
