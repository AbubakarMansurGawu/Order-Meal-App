import React from 'react'
import Logo from '../Assets/Logo.png'
import { FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <footer className=' bg-black mt-40 pb-20' >
        <div className='grid container grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 pt-20'>
        <div>
        <div className='flex pb-5 gap-3 justify-items-center'>
        <img src={Logo} alt='logo_png' className='w-10'/>
        <p className='text-xl font-extrabold text-white'>ABINCHI</p>
        </div>
        <p className='text-sm  text-justify  text-orange-500'>We eat with our eyes first, but before we see our 
          food, we picture it while reading the menu descriptions.
           They say one image is worth a thousand words, but don’t
            underestimate the power of words. A few strategically
            placed words here and there can make your food and wine 
            descriptions increase your restaurant’s sales.</p>

            <div className='flex gap-4 pt-5'>

            <Link to='/https://twitter.com/compose/tweet'>
            <FaTwitter size={30} className='text-blue-700' />
            </Link>

            <Link to='https://web.facebook.com/?_rdc=1&_rdr'><FaFacebook  size={30} className='cursor-default text-blue-500' /></Link>
            <Link to='https://www.instagram.com/'><FaInstagram  size={30} className='text-purple-500 cursor-default'/></Link>
            <Link to='https://www.whatsapp.com/'><FaWhatsapp  size={30} className='text-green-700 cursor-default'/></Link>
            <Link to='https://www.linkedin.com/'><FaLinkedinIn  size={30} className='text-blue-500 cursor-default'/></Link>
            </div>
        </div>

        <div>
          <p className='text-white uppercase font-bold underline'>Useful Links</p>
          <ul className='text-white pt-4 leading-loose'>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Terms of service</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-white uppercase font-bold  underline'>Our Services</p>
          <ul className='text-white pt-4 leading-loose'>
            <li>Deals</li>
            <li>Reviews </li>
            <li>Best Products</li>
            <li>Testimonials</li>
            <li>Site Map</li>
          </ul>
        </div>

        <div>
          <p className='text-white uppercase font-bold  underline'>Our Picks</p>
          <ul className='text-white pt-4 leading-loose'>
            <li>Best meal delivery</li>
            <li>Best meal subscripion </li>
            <li>Best discount meal delivery service</li>
            <li>Gift Guide</li>
          </ul>
        </div>
        </div>
        <div className='container my-10'>
          <hr/>
        </div>

        <p className='text-center text-white text-sm'>© 2024 CNET, a Red Ventures company. All rights reserved.</p>
        
      </footer>
    </>
  )
}

export default Footer