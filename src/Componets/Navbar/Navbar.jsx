import { useContext } from 'react'
import { ShopContex } from '../../Context/ShopContextProvider'
import './Navbar.scss'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const { cartItems } = useContext(ShopContex);

    const getTotalItems = () => {
        let total = 0;
        for(const itemId in cartItems) {
            total += cartItems[itemId];
        }
        return total;
    }

  const totalItems = getTotalItems();
  
    return (
        <div className='navbar'>
            <h2>logo</h2>
            <div className="links">
                <Link className='shop' to={'/'}>Shop</Link>
                <Link className='cart-icon' to={'/cart'}><span className="material-symbols-outlined">
                    shopping_cart
                </span>{totalItems ? `(${totalItems})` : ''}</Link>
            </div>
        </div>
    )
}
