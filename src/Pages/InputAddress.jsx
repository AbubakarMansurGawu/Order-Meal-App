import React, { useState, useContext, useEffect } from "react";
import { StoreContext } from "../context/StoreContext";
import toast from "react-hot-toast";

const InputAddress = () => {
  const { cart, setCart } = useContext(StoreContext);
  const [deliveryFee, setDeliveryFee] = useState(5); // Example delivery fee
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    phone: "",
  });
  const [isFormComplete, setIsFormComplete] = useState(false);

  const { firstName, lastName, email, street, phone } = formData;

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0) + deliveryFee;
  };

  const validateForm = () => {
    if (!firstName || !lastName || !email || !street || !phone) {
      toast.error("Please fill out all fields before placing an order.");
      return false;
    }
    return true;
  };

  const clearFormFields = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      phone: "",
    });
  };

  const handlePlaceOrder = () => {
    const totalPrice = calculateTotalPrice();
    
    if (!validateForm()) {
        toast.error("Please fill out all fields before placing an order.");
        return;
    }
  
    if (cart.length === 0) {
        toast.error("Your cart is empty. Please add items before placing an order.");
        return;
    }

    toast.success(`Your order has been successfully placed! Total amount: $${totalPrice.toFixed(2)}.`);
    setCart([]);
    clearFormFields();
};


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    setIsFormComplete(
      firstName.trim() !== "" &&
        lastName.trim() !== "" &&
        email.trim() !== "" &&
        street.trim() !== "" &&
        phone.trim() !== ""
    );
  }, [formData]);

  return (
    <>
      <form className="grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center gap-20 mt-[100px]">
        <div className="">
          <p className="font-bold text-3xl py-10">Delivery Information</p>
          <div className="py-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={handleInputChange}
              name="firstName"
              className="border-2 text-sm border-orange-300 p-2 rounded-lg mr-4 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={handleInputChange}
              name="lastName"
              className="border-2 text-sm border-orange-300 p-2 rounded-lg mr-4 focus:outline-none"
            />
          </div>
          <div className="py-4">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={handleInputChange}
              name="email"
              className="border-2 text-sm border-orange-300 p-2 rounded-lg mr-4 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Street"
              value={street}
              onChange={handleInputChange}
              name="street"
              className="border-2 border-orange-300 text-sm p-2 rounded-lg mr-4 focus:outline-none"
            />
          </div>
          <div className="py-4 text-xs">
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={handleInputChange}
              name="phone"
              className="border-2 border-orange-300 text-sm p-2 rounded-lg mr-4 focus:outline-none"
            />
          </div>
          <button
            type="button"
            onClick={handlePlaceOrder}
            disabled={!isFormComplete}
            className={`bg-orange-500 text-sm active:scale-95 p-2 rounded-md w-[300px] text-white font-medium ${
              !isFormComplete ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            PLACE ORDER
          </button>
        </div>
        <div className="text-center">
          <p className="font-bold text-4xl text-orange-500 ">
            Thank you for your Patronage!
          </p>
        </div>
      </form>
    </>
  );
};

export default InputAddress;
