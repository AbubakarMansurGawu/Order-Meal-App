import React, { createContext, useState, useEffect } from "react";
import { mealList, mealCategory } from '../data.js';

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [filteredMeals, setFilteredMeals] = useState([]);

    const addToCart = (CartItem) => {
        const itemIndex = cart.findIndex(item => item.id === CartItem.id);
        if (itemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[itemIndex].quantity++;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...CartItem, quantity: 1 }]);
        }
    };

    const showAllMeal = () => {
        setFilteredMeals(mealList);
    };

    useEffect(() => {
        showAllMeal(); // Initialize filtered meals
    }, []); // Empty dependency array, runs only once when component mounts

    const contextValue = {
        mealList,
        mealCategory,
        cart,
        filteredMeals,
        setCart,
        addToCart,
        showAllMeal,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;



    // const removeFromCart = (itemId) => {
    //     const updatedCart = cart.map(item => {
    //         if (item.id === itemId) {
    //             if (item.quantity > 1) {
    //                 return { ...item, quantity: item.quantity - 1 };
    //             } else {
    
    //                 return undefined;
    //             }
    //         }
    //         return item;
    //     });
      
    //     setCart(updatedCart.filter(item => item));
    // };
    