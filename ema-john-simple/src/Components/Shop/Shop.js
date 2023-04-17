import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData/products.JSON'
import './Shop.css'
import Products from '../Products/Products';

const Shop = () => {
    
    const [products, setProducts] = useState([]);
   
    useEffect(()=>{
        fetch(fakeData)
        .then((res)=>res.json())
        .then((data)=>{
            const first10 = data.slice(0, 10);
            setProducts(first10);
        })
    })
    
    const handleAddProduct = () =>{
        console.log('Product added')
    }

    return (
        <div className='shop-container'>

            <div className="products-container">
                {
                    products.map(pd => <Products  products={pd} handleAddProduct = {handleAddProduct} />)
                }
            </div>
            <div className="cart-container">
                <h3>this is cart</h3>
            </div>
        </div>
    );
};

export default Shop;