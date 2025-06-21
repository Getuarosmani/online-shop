import React, { useContext } from 'react';
import { ShopContex } from '../../Context/ShopContextProvider';
import { CartItem } from '../../Componets/CartItem/CartItem';
import './Cart.css';

export const Cart = () => {
    const { products, cartItems, getTotalCartPrice } = useContext(ShopContex);

    const totalPrice = getTotalCartPrice();
    const shipingPrice = totalPrice > 50? 0 : 10;
    const grandTotal = totalPrice + shipingPrice;

    return (
        <div className='cart'>
            <div className="cart-items">
                {products.some(product => cartItems[product.id] > 0) ? (
                    products
                        .filter(product => cartItems[product.id] > 0)
                        .map(product => (
                            <CartItem key={product.id} data={product} />
                        ))
                ) : (
                    <p className='empty-message'>Your cart is empty!!</p>
                )}
            </div>
            <div className='total-price'>
                <div>
                    <p>Total Products Cost:</p>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div>
                    <p>Shiping Price: </p>
                    <span>${totalPrice ? shipingPrice.toFixed(2) : '0.00'}</span>
                </div>
                <div>
                    <p>Grand Total:</p>
                    <span>${totalPrice ? grandTotal.toFixed(2) : '0.00'}</span>
                </div>

                <p className='shiping-message'>Free shipping alert! Spend $50 or more in a single order and we’ll deliver it to your door at no extra cost.</p>
            </div>
        </div>
    );
}
