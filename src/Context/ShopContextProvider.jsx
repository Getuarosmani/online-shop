import React, { createContext, useEffect, useState } from 'react';

export const ShopContex = createContext(null);

export const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);

        const defaultCart = {};
        data.forEach((item) => {
          defaultCart[item.id] = 0;
        });
        setCartItems(defaultCart);

      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();
  }, []);

  const getTotalCartPrice = () => {
  let totalAmount = 0;
  for (const itemId in cartItems) {
    if (cartItems[itemId] > 0) {
      const itemInfo = products.find((product) => product.id === Number(itemId));
      if (itemInfo) {
        totalAmount += cartItems[itemId] * itemInfo.price;
      }
    }
  }
  return totalAmount;
};


  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }));
  };

  const clearCartItem = (itemId, quantity) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      delete updatedCart[itemId];
      return updatedCart;
    });
  };

  const contextValue = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    clearCartItem,
    getTotalCartPrice
  };

  return (
    <ShopContex.Provider value={contextValue}>
      {props.children}
    </ShopContex.Provider>
  );
};
