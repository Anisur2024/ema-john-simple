import React from 'react';
import './Products.css'


const Products = (props) => {
    // console.log(props)
    const { img, name, seller, price, stock } = props.products;
    return (
        <div className='product'>
            <div className=''>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>{seller}</small></p>
                <p>${price}</p>
                <br />
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button className='main-button' onClick={props.handleAddProduct}>add to cart</button>
               
            </div>
        </div>
    );
};

export default Products;