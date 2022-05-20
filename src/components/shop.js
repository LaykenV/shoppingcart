import React, { useState, useEffect } from 'react';
import cars from './carsData';

function Shop({ handleAddToCart, cartCars, addAmount, decrementAmount, incrementAmount }) {

    return(
        <div className='shopContainer'>
           {cars.map((car) => {
               return (
                   <div className='carContainer' key={car.id}>
                       <img className='carImage' src={car.image} alt='car'></img>
                       <h3 className='carName'>{car.name}</h3>
                       <p className='carDescription'>{car.description}</p>
                       <div className='addToCartDiv' id={car.id}>
                           <button className='addToCartButton' onClick={handleAddToCart}>Add To Cart</button>
                           <div className='addToCartAmount'>
                            <button className='addToCartAmountButton' onClick={decrementAmount}>-</button>
                            <span>{addAmount[car.id]}</span>
                            <button className='addToCartAmountButton' onClick={incrementAmount}>+</button>
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