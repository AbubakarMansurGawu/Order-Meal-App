import React, { useState, useEffect } from 'react';
import { mealOptions } from '../data';
import { BiPlus, BiMinus } from 'react-icons/bi';

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectedCategory && !event.target.closest('.selected-category')) {
        setSelectedCategory(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedCategory]);

  return (
    <>
      <section className=''>
        <p className='sm:container px-28 pt-10 my-10 font-extrabold uppercase text-2xl sm:text-3xl'>Explore Our Menu</p>
        <ul className='grid sm:container scale-95 px-10 lg:grid-cols-6 md:justify-items-center md:grid-cols-3 grid-cols-2 gap-6'>
          {mealOptions.map((category) => (
            <li
              key={category.category}
              onClick={() => handleCategoryClick(category)}
              className='flex flex-col border-t-2 shadow-md 
              transition-all duration-700 ease-in-out hover:scale-110
              shadow-orange-300 border-orange-300 p-10 w-full pt-4 
              items-center uppercase justify-items-center font-bold text-lg'
            >
              <div>
                {category.category}
              </div>
              <div className='w-20'>
                <img src={category.img} alt='food_image' />
              </div>
              <button
                onClick={() => handleCategoryClick(category)}
                className='border-2 border-orange-100 text-orange-500 
                px-2 py-2 font-normal mt-10 rounded-2xl text-[12px] 
                sm:text-[14px]'
              >
                View More
              </button>
            </li>
          ))}
        </ul>
          <div className={`container mx-auto selected-category ${selectedCategory ? '' : 'hidden'}`}>
        {selectedCategory && (
          <div className='container max-w-sm mx-auto md:max-w-none md:mx-0'>
            <p>{selectedCategory.category}</p>
            <ul className='grid grid-cols-4 md:max-w-none md:mx-0 gap-5'>
              {selectedCategory.options.map((item) => (
                <li key={item.id} className='flex flex-col border-t-2 shadow-md text-sm rounded-lg transition-all duration-700 ease-in-out hover:scale-110 shadow-orange-300 p-5'>
                  <p className='font-bold uppercase pb-4'>{item.name}</p>
                  <p className='pb-4'>{item.description}</p>
                  
          <div className='flex items-center justify-between'>
          <p className='font-bold'>{item.price}</p>          
           <div className='flex'>
            <button className='cursor-default'>
           <div className='flex p-2 bg-white rounded-sm border-2 border-orange-300'>
          <BiPlus />
          </div>
          </button>
          <button className='cursor-default'>
          <div className='flex p-2 bg-white rounded-sm border-2 border-orange-300'>
          <BiMinus />
          </div>
          </button>
          </div>
        </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        </div>
      </section>
    </>
  );
};

export default CategoryList;
