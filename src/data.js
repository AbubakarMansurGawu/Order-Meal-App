import food3 from './Assets/food3.jpg'
import { goat, Poundedyam, food5, cake, egusi } from './Assets/asset';

const mealOptions = [
  {
    category: 'Soup',
    img: 'egusi.jpg',
    options: [
      {
        id: 1,
        name: "Seafood Okra",
        description: "Delicious Nigerian soup made with melon seeds and assorted meats",
        price: 10.99, // Price per liter
      },
      {
        id: 2,
        name: "Egusi",
        description: "Nutritious Nigerian soup made with assorted leafy vegetables and proteins",
        price: 12.99,
      },
      {
        id: 3,
        name: "Red Stew",
        description: "Traditional Nigerian soup made with okra and seafood or meat",
        price: 9.99,
      },
      {
        id: 4,
        name: "Ogbono",
        description: "Popular West African dish made with rice, tomatoes, and spices",
        price: 8.99,
      },
    {
      id: 5,
      name: "Efo riro",
      description: "Delicious Nigerian soup made with melon seeds and assorted meats",
      price: 10.99, 
    },
    {
      id: 6,
      name: "Ewedu",
      description: "Nutritious Nigerian soup made with assorted leafy vegetables and proteins",
      price: 12.99,
    },
    {
      id: 7,
      name: "Bitter leaf",
      description: "Traditional Nigerian soup made with okra and seafood or meat",
      price: 9.99,
    },
    {
      id: 8,
      name: "White Soup",
      description: "Popular West African dish made with rice, tomatoes, and spices",
      price: 8.99,
    },
    {
      id: 9,
      name: "Edidiakong",
      description: "Popular West African dish made with rice, tomatoes, and spices",
      price: 3.99,
    },
    {
      id: 10,
      name: "Afang",
      description: "Popular West African dish made with rice, tomatoes, and spices",
      price: 4.59,
    },
    {
      id: 11,
      name: "Oha",
      description: "Popular West African dish made with rice, tomatoes, and spices",
      price: 6.09,
    },
    {
      id: 12,
      name: "Black soup",
      description: "Popular West African dish made with rice, tomatoes, and spices",
      price: 3.29,
    },
    {
      id: 13,
      name: "Banga Soup",
      description: "Popular West African dish made with rice, tomatoes, and spices",
      price: 2.89,
    },
    {
      id: 14,
      name: "Owho soup",
      description: "Popular West African dish made with rice, tomatoes, and spices",
      price: 8.0,
    },
    {
      id: 15,
      name: "Gbegiri",
      description: "Popular West African dish made with rice, tomatoes, and spices",
      price: 4.19,
    },
    {
      id: 16,
      name: "Fisherman Soup",
      description: "Popular West African dish made with rice, tomatoes, and spices",
      price: 9.32,
    },
    {
      id: 17,
      name: "Groundnut fish",
      description: "Popular West African dish made with rice, tomatoes, and spices",
      price: 4.45,
    },
  ]
},

{
  category: 'PepperSoup',
  img: 'goat.jpg',
  options: [
    {
      id: 1,
      name: "Fish",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 3.90,
    },
    {
      id: 2,
      name: "Goat",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 2.39,
    },
    {
      id: 3,
      name: "Chicken",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 6.04,
    },
  ]
},

{
  category: 'Swallow',
  img: 'Poundedyam.jpg',
  options: [
    {
      id: 1,
      name: "Eba (garri)",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 6.05,
    },
    {
      id: 2,
      name: "Fufu",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 3.59,
    },
    {
      id: 3,
      name: "Amala",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 1.29,
    },
    {
      id: 4,
      name: "Pounded yam",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 4.79,
    },
    {
      id: 5,
      name: "Wheat",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 4.09,
    },
    {
      id: 6,
      name: "Semo",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 8.99,
    },
    {
      id: 7,
      name: "Plantain flour",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 8.99,
    },
    {
      id: 8,
      name: "Oat",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 2.79,
    },
  ]
},

{
  category: 'Rice',
  img: 'food5.jpg',
  options: [
    {
      id: 1,
      name: "Native rice",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 5.56,
    },
    {
      id: 2,
      name: "Asun rice",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 4.09,
    },
    {
      id: 3,
      name: "White rice",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 4.79,
    },
    {
      id: 4,
      name: "Smoky Jollof rice",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 4.98,
    },
    {
      id: 5,
      name: "Vegetable rice",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 6.95,
    },
    {
      id: 6,
      name: "Coconut Rice",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 4.59,
    },
    {
      id: 7,
      name: "Banga rice",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 0.69,
    },
    {
      id: 8,
      name: "Fried rice",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 4.95,
    },
  ]
},

{
  category: 'Others',
  img: 'food3.jpg',
  options: [
    {
      id: 1,
      name: "Ise Ewu",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 3.29,
    },
    {
      id: 2,
      name: "Nwokobi",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 6.79,
    },
    {
      id: 3,
      name: "Ewa aganyin",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 4.49,
    },
    {
      id: 4,
      name: "Beans and Plantain",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 3.59,
    },
    {
      id: 5,
      name: "Bole and fish",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 3.59,
    },
    {
      id: 6,
      name: "Fried beans",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 8.94,
    },
    {
      id: 7,
      name: "Plantain Porridge",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 4.59,
    },
    {
      id: 8,
      name: "Yam Porridge",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 4.69,
    },
  ]
},

{
  category: 'Confectionaries',
  img: 'cake.jpg',
  options:[
    {
      id: 1,
      name: "Sharwama",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 8.99,
    },
    {
      id: 2,
      name: "Cakes",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 4.89,
    },
    {
      id: 3,
      name: "Samosa",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 4.09,
    },
    {
      id: 4,
      name: " Puff puff",
      description: "LorempSum LorempSum LorempSum LorempSum",
      price: 3.79,
    },
  ]
}  

]       
  
const quantities = [
    { label: "1/2 liter", value: 0.5 },
    { label: "1 liter", value: 1 },
    { label: "2 liters", value: 2 },
    { label: "3 liters", value: 3 },
    { label: "4 liters", value: 4 },
    
  ];
  
  const deliveryOptions = [
    { label: "Pick Up", value: "pick-up" },
    { label: "Drop Off", value: "drop-off" },
  ];
  
  export { mealOptions, quantities, deliveryOptions, egusi, Poundedyam, cake, food3, food5, goat};






 


