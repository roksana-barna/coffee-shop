
import React from 'react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { Carousel } from 'daisyui';
import img1 from '../../assets/download (2).jpg'
import img2 from '../../assets/licensed-image.jpg'
import img3 from '../../assets/front-view-tasty-meat-burger-with-cheese-and-salad-free-photo.jpg'

const images = [img1, img2, img3];
const NewReciepeSection = () => {
  return (
    <section className="p-4 lg:p-8 flex flex-col lg:flex-row justify-between text-left">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <h2 className='font-bold text-base font-serif text-orange-700'>~~~New Reciepe</h2>
        <p className='text-3xl font-bold font-serif mt-3'>Taste Our New Recipe</p>
        <p className="mt-6 text-sm">
          Taste Our New Recipe Malesuada cursus a tincidunt volutpat posuere lacinia. Congue malesuada lacus pharetra ut vel amet. Amet turpis suspendisse porttitor scelerisque amet dolor et. Nisi ac vitae tortor lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis nunc erat. Donec quis fermentum mattis aliquet gravida. Adipiscing eu sit ornare imperdiet viverra sit vel.
        </p>
        <p className="mt-6 text-sm">
          There are many variations of passages of Lorem Ipsum form any injected humour, or randomised words which don't look slightly believable.
        </p>
        <div className='flex mt-4 text-orange-900'>
          <FaRegArrowAltCircleLeft className=' mr-4 text-2xl font-thin' /><FaRegArrowAltCircleRight className=' mr-4 text-2xl font-thin' />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="relative w-full h-64">
          <img
            src={img3}
            alt="Carousel Placeholder"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-lg font-bold">Pita bread or wraps</p>
            <p>Toppings: tomatoes, tahini sauce, etc</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default NewReciepeSection;
