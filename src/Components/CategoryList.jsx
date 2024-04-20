import React, { useState, useEffect, useContext } from 'react'; 
import { BiPlus, BiMinus } from 'react-icons/bi';
import { StoreContext } from '../context/StoreContext';
import toast from 'react-hot-toast';

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { mealCategory, mealList, addToCart, cart } = useContext(StoreContext);
  

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  // const showCartItemCountAlert = (count) => {
  //   alert(`You have added ${count} item${count !== 1 ? 's' : ''} to the cart.`);
  // };

  const handleAddToCart = (product) => {
    addToCart(product);
    const addedItem = cart.find(item => item.id === product.id);
    if(addedItem) {
      toast.success(`${addedItem.name} added to cart`);
    }
    
    // showCartItemCountAlert(cart.length + 1); 
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
      <section>
        <p className='sm:container px-28 pt-10 my-10 font-extrabold uppercase text-2xl sm:text-3xl'>Explore Our Menu</p>
        <div className='grid px-24 sm:grid-cols-6 md:justify-items-center grid-cols-1 gap-4'>
          {mealCategory && mealCategory.map((item) => (
            <div
              key={item.name}
              className='flex flex-col border-t-2 shadow-md text-sm rounded-lg transition-all duration-700 ease-in-out hover:scale-110 shadow-orange-300'
              onClick={() => handleCategoryClick(item)}
            >
              <p className='sm:bottom-52 p-1 bg-orange-400 text-center rounded-sm font-extrabold text-lg uppercase'>{item.name}</p>
              <img src={item.img} className='w-full h-[50%] inset-0 bg-gradient-to-br from-transparent to-black opacity-90 bg-cover' alt={item.name} />
              <button 
                className='border-2 border-orange-100 text-orange-500 
                p-2 font-normal mt-10 rounded-md w-[%] hover:bg-orange-500 hover:text-white  mx-auto
                 text-[12px] sm:text-[14px]' onClick={() => handleCategoryClick(item)}
              >
                View More
              </button>  
            </div>
          ))}
        </div>
        <div className={`sm:container sm:px-32 mx-auto selected-category ${selectedCategory ? '' : ' hidden'}`}>
          {selectedCategory && (
            <div className='max-w-sm mx-auto md:max-w-none md:mx-0'>
              <p className='uppercase font-bold text-2xl py-5 w-100% text-center bg-orange-300 pl-5 rounded-lg my-5'>{selectedCategory.name}</p>
              <ul className='grid grid-cols-2 gap-5 sm:grid-cols-4'>
                {mealList.filter((meal) => meal.category === selectedCategory.name)
                  .map((item) => (
                    <li key={item.id} className='flex flex-col border-t-2 shadow-md text-sm rounded-lg transition-all duration-700 ease-in-out hover:scale-110 shadow-orange-300'>
                      <div className='relative'>
                        <img src={item.img} className='w-full h-[50%] inset-0 bg-gradient-to-br from-transparent to-black opacity-90 bg-cover' alt='meal_list' />
                        <p className='absolute bottom-60 sm:bottom-52  pl-5 font-extrabold text-lg uppercase'>{item.name}</p>
                        <div className='p-5'>
                          <p className='pb-4'>{item.description}</p>
                          <div className='flex items-center justify-between'>
                            <p className='font-bold bg-orange-500 p-2 rounded-md text-white'>#{item.price}</p>
                            <div className='flex items-center'>
                              <button onClick={() => handleAddToCart(item)} type='button' className='rounded bg-theme-cart active:scale-90 py-2 px-3'>
                                <BiPlus className='text-white stroke-[2]' />
                              </button>
                            </div>
                          </div>
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
