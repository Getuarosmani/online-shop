import React, { useContext } from 'react'
import { ShopContex } from '../../Context/ShopContextProvider'
import './CartItem.css'

export const CartItem = ({ data }) => {

    const { cartItems, addToCart, removeFromCart } = useContext(ShopContex);
        console.log(cartItems);
    return (
        <div className='cart-item'>
            <div className="img-holder">
                <img src={data.image} alt="" />
            </div>
            <div className="item-description">
                <h3>{data.title}</h3>
                <p>{data.price}$</p>
                <div className="count-hendler">
                    <button onClick={() => removeFromCart(data.id)}>-</button>
                    <input type="number" value={cartItems[data.id]} readOnly/>
                    <button onClick={() => addToCart(data.id)}>+</button>
                </div>
            </div>
        </div>
    )
}
