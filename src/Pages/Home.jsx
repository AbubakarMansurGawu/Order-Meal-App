import React from 'react'
import { Hero } from '../Assets/asset'
import CategoryList from '../Components/CategoryList'
import MealList from '../Components/MealList'


const Home = () => {
  return (
    <>
    
    <div className='relative'>
    <div className='bg-theme  top-0 left-0 w-full h-[85vh] z-0 '>
        <img src={Hero} className='lg:w-[580px] md:w-[500px] absolute right-0 top-0' width={1000} height={600} alt='hero bg' />
     
        
    <div className=' p-10 sm:px-10 h-[calc(100vh - 140px)] relative z-10 grid'>
      <div className='px-0 sm:px-10 space-y-8 w-fit p-4'>
        <p className='uppercase pt-14 text-gray-800 font-medium text-2xl'>Wide options of choice</p>
        <h2 className='text-6xl  sm:text-[80px] font-bold'>
            Delicious<span className='text-white sm:text-white pl-5'>Food</span>
        </h2>
        <p className='text-white sm:text-white font-bold text-[14px smm:text-[16px]'>
            Delicious food color, aroma and taste. <br />
            What are you waiting for?
        </p>
        <button className='bg-white text-orange-500 px-6 py-2 rounded-3xl text-[14px] sm:text-[16px]'>
            View More
        </button>
    </div>
  </div>
  </div>
    </div>
   
    <CategoryList/>
    <hr className='border-orange-300 mt-20 mx-20 mb-4' />
    <MealList />
    </>
  )
}

export default Home