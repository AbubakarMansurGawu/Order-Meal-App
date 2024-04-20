import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { BiPlus, BiMinus, BiXCircle } from "react-icons/bi";
import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CartItems = () => {
  const { cart, setCart } = useContext(StoreContext);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [showPickupModal, setShowPickupModal] = useState(false);
  const navigate = useNavigate();
  const [deliveryOption, setDeliveryOption] = useState("");
  const restaurantAddress = "Ken Iheanacho Street, Lekki Phase 1, Lagos City";

  const copyAddressToClipboard = () => {
    navigator.clipboard.writeText(restaurantAddress);
    alert("Address copied to clipboard!");
  };

  const handleAddQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        toast.success(`Item QTY Increased`);
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCart(updatedCart);
    const addedItem = cart.find((item) => item.id === itemId);
    toast.success(`${addedItem.name} added to cart`);
  };

  const handleRemoveQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        toast.success(`Item QTY Decreased`);
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
    const removedItem = cart.find((item) => item.id === itemId);
    toast.success(`${removedItem.name} removed from cart`);
  };

  const calculateTotalPrice = () => {
    return (
      cart.reduce((total, item) => total + item.price * item.quantity, 0) +
      deliveryFee
    );
  };

  const handleDeliveryOptionSelect = (option) => {
    if (option === "pick-up") {
      setDeliveryFee(0);
      setDeliveryOption(option);
      setShowPickupModal(true);
    } else if (option === "drop-off") {
      setDeliveryFee(2);
      navigate("/form");
    }
  };

  const totalPrice = calculateTotalPrice();

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
    setCart(updatedCart);
  };

  const placeOrder = () => {
    const totalPrice = calculateTotalPrice();
    toast.success(
      `Your order has been successfully placed! Total amount: $${totalPrice.toFixed(
        2
      )}.`
    );
    setCart([]);
  };

  return (
    <>
      <div className="text-center">
        {cart.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-6 items-center text-gray-500 text-sm mt-3 ml-0"
          >
            <div className="flex flex-row px-3 items-center justify-center">
              <img src={item.img} alt="" className="w-24" />
            </div>
            <p>{item.name}</p>
            <p>{item.price.toFixed(2)}</p>
            <div className="flex flex-row items-center justify-center">
              <button
                onClick={() => handleRemoveQuantity(item.id)}
                className="border-2 border-orange-500"
              >
                <BiMinus />
              </button>
              <p className="m-2 bg-black px-3 rounded-sm text-white text-sm">
                {item.quantity}
              </p>
              <button
                onClick={() => handleAddQuantity(item.id)}
                className="border-2 border-orange-500"
              >
                <BiPlus />
              </button>
            </div>
            <p>{(item.price * item.quantity).toFixed(2)}</p>
            <div className="flex flex-row items-center justify-center">
              <BiXCircle
                className="text-red-500"
                size={20}
                onClick={() => removeFromCart(item)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="sm:container px-10 pt-20">
        <div>
          <p className="font-bold text-2xl">Cart Totals</p>
          <div>
            <hr />
            <div className="flex justify-between pt-5 pb-2">
              <p>Delivery Fee</p>
              <p>${deliveryFee.toFixed(2)}</p>
            </div>
            <hr />
            <div className="flex justify-between my-5">
              <p className="font-bold font-md rounded-md">Total Price: </p>
              <b>${totalPrice.toFixed(2)}</b>
            </div>
          </div>

          <div className="flex gap-5 pb-5 ">
            <button
              onClick={() => handleDeliveryOptionSelect("pick-up")}
              className={`p-2 rounded-md active:scale-90 hover:bg-orange-500 hover:text-white ${
                deliveryOption === "pick-up"
                  ? "bg-orange-500 text-white"
                  : "bg-white border-2 text-black"
              }`}
              disabled={cart.length === 0} 
            >
              Pick Up
            </button>
            <button
              onClick={() => {
                navigate("/form");
                handleDeliveryOptionSelect("drop-off");
              }}
              className={`p-2 rounded-md active:scale-90 hover:bg-orange-500 hover:text-white ${
                deliveryOption === "drop-off"
                  ? "bg-orange-500 text-white"
                  : "bg-white border-2 text-black"
              }`}
            >
              Drop Off
            </button>
          </div>
        </div>
      </div>

      {/* Pickup Modal */}
      {showPickupModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md">
            <p className="font-bold text-lg mb-4">Restaurant Information</p>
            <p>Name: My Abinchi Store</p>
            <p>Address: {restaurantAddress}</p>
            <p>Phone: 08138943570</p>
            <div className="flex justify-between">
              <button
                onClick={() => {
                  setShowPickupModal(false);
                  placeOrder();
                }}
                className="bg-green-500 text-white px-4 py-2 rounded-md active:scale-90 mt-4"
              >
                Place Order
              </button>
              <div className="flex items-center mt-5">
                <FaPencilAlt
                  className="ml-2  cursor-pointer text-orange-500"
                  onClick={copyAddressToClipboard}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItems;
