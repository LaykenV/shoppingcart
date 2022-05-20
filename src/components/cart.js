import React, { useState, useEffect } from 'react';

function Cart({ cartCars, cartCount, incrementAmount, decrementAmount, deleteFromCart, clearCart }) {
    const [finalPrice, setFinalPrice] = useState(0);
    const totalPrice = () => {
        let sum = 0;
        for (const car of cartCars) {
            if (car.amount > 1) {
                sum += car.price * car.amount;
            } else if (car.amount == 1) {
                sum += Number(car.price)
            }
        }
        setFinalPrice(sum);
    }

    useEffect(() => {
        totalPrice();
    }, [cartCars])

    return(
        <div className='cartDiv'>
                <div className='cartHead'>
                <h1 className='yourCart'>Your Cart</h1>
                </div>
                <div className='cartCarsContainer'>
                    {cartCars.map((car) => {
                        return(
                            <div className='cartCarContainer' key={car.id}>
                                <div className='cartCarTop'>
                                    <img className="cartCarImg" src={car.image} alt="car"></img>
                                    <div className='cartCarTopRight'>
                                        <h2 className='cartCarName'>{car.name}</h2>
                                        <div className='cartCarAmountContainer' id={car.id}>
                                            <button className='cartCarAmountDecrement' onClick={decrementAmount}>-</button>
                                            <p className='cartCarAmount'>{car.amount}</p>
                                            <button className='cartCarAmountIncrement' onClick={incrementAmount}>+</button>
                                        </div>
                                        <p className='cartCarPrice'>${car.price * car.amount}</p>
                                    </div>
                                </div>
                                <div className='cartCarBottom' id={car.id}>
                                    <button className='cartCarDelete' onClick={deleteFromCart}>Delete From Cart</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='cartBottom'>
                    <p className='totalPrice'>Subtotal ${finalPrice}</p>
                    <button className='checkoutButton' onClick={clearCart}>Proceed to Checkout (Clears Cart)</button>
                </div>
            </div>
    )
}

export default Cart;