import React, {useContext} from 'react';
import { mealOptions } from '../data';
import { BiPlus, BiMinus } from 'react-icons/bi';


const MealList = ({}) => {
  
  
  return (
    <section>
      <p className='container pt-10 my-10 font-extrabold uppercase text-3xl'>Top dishes for you</p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 sm:grid-cols-3  
      sm:container sm:px-20  items-center gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
  {mealOptions.map((category) => (
    category.options.map((val, i) => (
      <div 
      key={i} 
      name={val.name} 
      description={val.description} 
      price={val.price} 
      className=' flex flex-col border-t-2 shadow-md text-sm rounded-lg transition-all duration-700 ease-in-out hover:scale-110 shadow-orange-300 p-5'>
        <p className='font-bold uppercase pb-4'>{val.name}</p>
        <p className='pb-4'>{val.description}</p>
        <div className='flex items-center justify-between'>          
           <p className='font-bold'>#{val.price}</p>
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
       
        
      </div>
    ))
  ))}
</div>

      {/* <ul className='grid sm:container px-10 lg:grid-cols-6  md:grid-cols-3 grid-cols-2 w-full gap-6'>
        {mealOptions.map((category) => (
          <li key={category.category} className='flex flex-col border border-t-2 border-orange-300 p-5 pt-4  text-lg'>
            <img src={require(`../Assets/${category.img}`).default} alt={category.category} className='w-20 mb-2' />
            <p>{category.category}</p>
            <ul>
              {category.options.map((option) => (
                <li key={option.id}>
                  <p>{option.name}</p>
                  <p className='text-sm'>{option.description}</p>
                  <p>${option.price.toFixed(2)}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul> */}
    </section>
  );
};

export default MealList;
