
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContex } from '../../Context/ShopContextProvider'
import './ProductDetalis.css'

export const ProductDetails = () => {
    
    const { addToCart, cartItems, clearCartItem } = useContext(ShopContex);
    
    const { id } = useParams();
    const { products } = useContext(ShopContex);
    const product = products.find((p) => p.id === Number(id));
    const isInCart = cartItems[product.id] > 0;

    const handleClick = () => {
        if (isInCart) {
            clearCartItem(product.id);
        } else {
            addToCart(product.id);
        }
    };

    return (
        <div className='product-detalis'>
            <div className="product-detalis-r">
                <div className="img-holder">
                    <img src={product.image} alt="" />
                </div>
            </div>
            <div className="product-detalis-l">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <span>${product.price.toFixed(2)}</span>
                <button onClick={handleClick}>{isInCart ? 'Added' : 'Add To Cart'}</button>
            </div>
        </div>
    )
}
