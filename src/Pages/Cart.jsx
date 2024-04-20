import React, { useContext } from 'react';
import  CartItems  from '../Components/CartItems';
import { StoreContext } from '../context/StoreContext';


const Cart = () => {
  const {cart} = useContext(StoreContext)
  console.log(cart)
  return (
    <>
      <div className='text-center mt-32'>
        <div className='w-full'>
          <div className='grid grid-cols-6 items-center font-bold text-gray-500 text-sm'>
            <p className=''>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr /> 
         
        </div>
      </div>
      <CartItems />
    </>
  );
};

export default Cart;



{/* <div>
      <h2>Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between border-t-2 border-orange-300 p-4">
          <div className="flex items-center">
            <img src={item.img} alt={item.name} className="w-12 h-12 mr-4" />
            <div>
              <p className="font-bold">{item.name}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
          <div>
            <p className="font-bold">${item.price.toFixed(2)}</p>
            <div className='flex'>
              <div className='flex p-2 bg-white rounded-sm border-2 border-orange-300'>
                <button className='cursor-default'>
                  <BiPlus />
                </button>
              </div>
              <button className='cursor-default'>
                <div className='flex p-2 bg-white rounded-sm border-2 border-orange-300'>
                  <BiMinus />
                </div>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div> */}