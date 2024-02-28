import React from 'react'
import MenuList from '../components/order/MenuList'
import { CartItem, FoodItem } from '../types/orderType';
import { useState, useEffect } from 'react';
import CartModal from '../components/order/CartModal';

const Order = () => {
  /*
  This page contain the menu for user to order the food and review 
  the order from the popup window.
  */
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(Object.values(JSON.parse(storedCartItems)));
    }
  }, []);


  const addToCart = (item: FoodItem) => {
    const itemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id)
    if (itemIndex !== -1) {
      // Item already exists in cart, update quantity and total price
      const updatedCartItems = cartItems.map((cartItem, index) => {
        if (index === itemIndex) {
          // console.log(item.price);
          const updatedItem = {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            totalPrice: cartItem.totalPrice + item.price
          };
          // console.log(updatedItem)
          return updatedItem;
          // console.log
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    } else {
      // Item not in cart, add with initial quantity and total price
      const newItem = {
        ...item,
        quantity: 1,
        totalPrice: item.price
      };
      setCartItems(prevItems => [...prevItems, newItem]);
    }
  };

  return (
    <div>
      <MenuList addToCart={addToCart}/>
      <CartModal {...cartItems}/>

    </div>
  )
}

export default Order