import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContex } from '../../Context/ShopContextProvider'
import './Card.css'

export const Card = ({ product }) => {
    const { addToCart, cartItems, clearCartItem } = useContext(ShopContex);
    const isInCart = cartItems[product.id] > 0;

    const handleClick = () => {
        if (isInCart) {
            clearCartItem(product.id);
        } else {
            addToCart(product.id);
        }
    };

    return (
        <div className='card'>
            <Link to={`/product/${product.id}`}>
                <div className="img-holder">
                    <img src={product.image} alt="" />
                </div>
                <h3>{product.title}</h3>
                <p>{product.description.length > 100 ? product.description.slice(0, 100) + '...' : product.description}</p>
                <span>{product.price.toFixed(2)}$</span>
            </Link>
            <button onClick={handleClick}>{isInCart ? 'Added' : 'Add To Cart'}</button>
        </div>

    )
}
