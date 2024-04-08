import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import Logo from '../Assets/Logo.png'

const Navbar = () => {
  return (
    <>
        <div className='fixed top-0 h-20  blur-effect-theme shadow-md shadow-black z-10 w-full bg-orange-500'>
            <div className='flex px-10 sm:px-20 justify-between p-5 '>
                <div className='flex gap-5 justify-items-center'>
                    <img src={Logo} alt='' className='w-10'/>
                    <p className='text-xl font-extrabold'>ABINCHI</p>
                </div>
                <FaCartShopping size={30} />
            </div>
        </div>
    </>
    
  )
}

export default Navbar