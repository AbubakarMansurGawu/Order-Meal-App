import React, { useState } from 'react'
import { Hero } from '../Assets/asset'
import CategoryList from '../Components/CategoryList'
import MealList from '../Components/MealList'
import AboutUs from '../Components/AboutUs'

const Home = () => {
  const [category, setCategory] = useState('All')

  return (
    <>
      <div className='relative'>
  <div className='relative bg-theme top-0 left-0 w-full h-[85vh] z-0'>
    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black to-transparent opacity-90'></div>
    <div className='absolute top-0 left-0 w-full h-full bg-contain bg-center opacity-40' style={{ backgroundImage: `url(${Hero})` }}></div>
    <div className='p-10 sm:px-10 h-[calc(100vh - 140px)] relative z-10 flex justify-center items-center text-center'>
      <div className='space-y-8'>
        <p className='uppercase text-white font-medium text-2xl mt-24'>Wide options of choice</p>
        <h2 className='text-6xl sm:text-[80px] font-bold text-white'>
          Delicious<span className='text-orange-500 pl-5'>Food</span>
        </h2>
        <p className='text-white font-bold text-[14px sm:text-[16px]]'>
          Delicious food color, aroma and taste. <br />
          What are you waiting for?
        </p>
        <button className='bg-white hover:bg-orange-500 hover:text-white  text-orange-500 px-6 py-2 rounded-3xl text-[14px] sm:text-[16px]'>
          View More
        </button>
      </div>
    </div>
  </div>
</div>

      <AboutUs />
      <CategoryList category={category} setCategory={setCategory}/>
      <hr className='border-orange-300 mt-20 mx-20 mb-4' />
      <MealList />
  
    </>
  )
}

export default Home
