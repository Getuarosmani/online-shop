import React, { useEffect, useState, useContext, use } from 'react';
import './Shop.css';
import { Card } from '../../Componets/Card/Card';
import { ShopContex } from '../../Context/ShopContextProvider';

export const Shop = () => {

    const { products } = useContext(ShopContex);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');

    const filterdProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
        .sort((a, b) => {
            if (sortOption === 'low-to-high') {
                return a.price - b.price;
            } else if (sortOption === 'high-to-low') {
                return b.price - a.price;
            } else {
                return 0;
            }
        })

    return (
        <div className='shop'>
            <div className="filter-section">
                <span class="material-symbols-outlined">
                    search
                </span>
                <input
                    type="text"
                    value={searchTerm}
                    placeholder='Search...'
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value='' disabled>Sort by</option>
                    <option value="low-to-high">Low To High</option>
                    <option value="high-to-low">High To Low</option>
                </select>
            </div>
            <div className="product-holder">
                {filterdProducts.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};
