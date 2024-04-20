import React, { useState, useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { BiPlus } from 'react-icons/bi';
import { testimonials } from '../data.js';

const MealList = () => {
  const { mealList, addToCart } = useContext(StoreContext);
  const [showAll, setShowAll] = useState(false);

  // const handleShowAllClick = () => {
  //   setShowAll(!showAll);
  // };

  return (
    <section>
      {/* <button
        className='border-2 border-orange-100 text-orange-500 
          p-2 font-normal mx-auto mt-10 rounded-md text-[12px] hover:bg-orange-500 hover:text-white 
          sm:text-[14px]'
        onClick={handleShowAllClick}
      >
         {showAll ? "Hide All Meals" : "Show All Meals"} 
      </button> */}

      <p className='sm:container px-28 pt-10 my-10 font-extrabold uppercase text-2xl sm:text-3xl'>Testimonials</p>
      <div className="grid lg:px-24 px-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {testimonials.map(testimonial => (
        <div key={testimonial.id} className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg shadow-orange-300">
                <img src={testimonial.avatar} alt="User Avatar" className="w-full h-full object-cover" />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-bold text-gray-800">{testimonial.name}</h2>
                <p className="text-gray-600 text-sm">{testimonial.location}</p>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{testimonial.title}</h3>
            <p className="text-gray-700 mb-4 text-sm">{testimonial.message}</p>
            <div className="text-gray-600 text-sm flex justify-between">
              <p>{testimonial.date}</p>
              <p>{testimonial.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>


          {showAll && (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 sm:grid-cols-3 sm:container sm:px-20 items-center gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                {mealList.map((val, i) => (
                  <div
                    key={i}
                    className='flex flex-col border-t-2 shadow-md text-sm rounded-lg transition-all duration-700 ease-in-out hover:scale-110 shadow-orange-300'>
                    <div className='relative '>
                      <img src={val.img} className='w-full h-[50%] inset-0 bg-gradient-to-br from-transparent to-black opacity-90 rounded-lg' alt='meal_list' />
                      <p className=' absolute bottom-72 sm:bottom-52 pl-5 font-extrabold text-lg uppercase'>{val.name}</p>
                      <div className='p-5'>
                        <p className='pb-4'>{val.description}</p>
                        <div className='flex items-center justify-between'>
                          <p className='font-bold bg-orange-500 p-2 rounded-md text-white'>${val.price.toFixed(2)}</p>
                          <div className='flex items-center'>
                            <button onClick={() => addToCart(val)} type='button' className='rounded bg-theme-cart active:scale-90 py-2 px-3'>
                              <BiPlus className='text-white stroke-[2]' />
                            </button>
                          </div>
      
                        </div>
                      </div>
                    </div>
                  </div>
      ))}
              </div>
          )}
             
       
       
    

    </section>
  );
};

export default MealList;
