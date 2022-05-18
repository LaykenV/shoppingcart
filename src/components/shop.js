import React, { useState, useEffect } from 'react';
import cars from './carsData';

function Shop() {
    return(
        <div className='shopContainer'>
           {cars.map((car) => {
               return (
                   <div className='carContainer' key={car.id}>
                       <img className='carImage' src={car.image} alt='car'></img>
                       <h3 className='carName'>{car.name}</h3>
                       <p className='carDescription'>{car.description}</p>
                       <div className='addToCartDiv'>
                           <button className='addToCartButton'>Add To Cart</button>
                           <div className='addToCartAmount'>
                            <button className='addToCartAmountButton'>-</button>
                            <span>1</span>
                            <button className='addToCartButton'>+</button>
                           </div>
                       </div>
                       <div className='line'></div>
                   </div>
               )
           })}
        </div>
    )
}

export default Shop;