import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6'
import Logo from '../Assets/Logo.png'


const Navbar = () => {
  const [navState, setNavState] = useState(false)
  
  

  return (
    <>
        <div className='fixed top-0 h-20  blur-effect-theme shadow-md shadow-black z-10 w-full bg-orange-500'>
            <div className='flex px-10 sm:px-20 justify-between p-5 '>
              <Link to='/'>
              <div className='flex gap-5 justify-items-center'>
                    <img src={Logo} alt='' className='w-10'/>
                    <p className='text-xl font-extrabold'>ABINCHI</p>
                </div>
              </Link>

                <Link to='/cart' 
                className='border-none outline-none active:scale-110 transition-all
                duration-300 relative'>
                  <FaCartShopping size={30}
                  className={` ${navState && 'text-slate-900 transition-all duration-300'}`} />
                  <div className={`absolute top-4 right-0 bg-white text-slate-900
                  shadow shadow-slate-100 w-4 h-4 text-[0.65rem] leading-tight font-medium
                  rounded-full flex items-center justify-center cursor-pointer
                  hover:scale-110 transition-all duration-300 ${navState ? 'bg-slate-900 text-slate-100 shadow-slate-900' : 'bg-slate-100 text-slate-900 shadow-slate-100'}`}>
                    0
                  </div>
                </Link>
            </div>  
        </div>
    </>
    
  )
}

export default Navbar