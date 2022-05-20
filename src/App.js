import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/nav';
import Shop from './components/shop';
import Home from './components/home';
import Error from './components/errorPage';
import Cart from './components/cart';
import cars from './components/carsData';
import { click } from '@testing-library/user-event/dist/click';
import { clear } from '@testing-library/user-event/dist/clear';


function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartCars, setCartCars] = useState([]);
  const [addAmount, setAddAmount] = useState([1,1,1,1,1,1,1,1,1,1,1,1,1]);

  const incrementAmountInShop = (e) => {
    const clickedCarId = e.target.parentNode.parentNode.id;
    let newArr = addAmount.map(x => x);
    newArr[clickedCarId] = newArr[clickedCarId] + 1;
    setAddAmount(newArr);
}

const decrementAmountInShop = (e) => {
  const clickedCarId = e.target.parentNode.parentNode.id;
  if (addAmount[clickedCarId] > 1) {
      let newArr = addAmount.map(x => x);
      newArr[clickedCarId] = newArr[clickedCarId] - 1;
      setAddAmount(newArr);        }
}

const decrementAmountInCart = (e) => {
  const clickedCarId = e.target.parentNode.id;
  const carInCart = cartCars.find(element => element.id == clickedCarId);
  carInCart.amount = carInCart.amount - 1;
  let newArr = cartCars.map(x => x);
  setCartCars(newArr);
}

const incrementAmountInCart = (e) => {
  const clickedCarId = e.target.parentNode.id;
  const carInCart = cartCars.find(element => element.id == clickedCarId);
  carInCart.amount = carInCart.amount + 1;
  let newArr = cartCars.map(x => x);
  setCartCars(newArr);
}

const deleteFromCart = (e) => {
  const clickedCarId = e.target.parentNode.id;
  let newArr = cartCars.map(x => x);
  const carInCart = newArr.find(element => element.id == clickedCarId);
  const index = newArr.indexOf(carInCart);
  newArr.splice(index, 1);
  setCartCars(newArr);
}

const clearCart = () => {
  setCartCars([]);
}

  const handleAddToCart = (e) => {
    const carId = e.target.parentNode.id;
    const clickedCar = cars.find(element => element.id == carId);
    if (cartCars.find(element => element.id == carId)) {
      const carInCart = cartCars.find(element => element.id == carId);
      carInCart.amount = carInCart.amount + addAmount[carId];
      let newArray = cartCars.map(x => x);
      setCartCars(newArray)
    } else if (!cartCars.find(element => element.id == carId)) {
      clickedCar.amount = addAmount[carId];
      setCartCars((prevState) => [...prevState, clickedCar]);
    }
  }

  useEffect(() => {
    let counter = cartCars.length;
        for (let i = 0; i < cartCars.length; i++) {
            const element = cartCars[i];
            if (element.amount > 1) {
                for (let i = 1; i < element.amount; i++) {
                    counter++;
                    
                }
            }
        }
        setCartCount(counter);
  }, [cartCars]);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Nav cartCount={cartCount} cartCars={cartCars}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop cartCars={cartCars} handleAddToCart={handleAddToCart} addAmount={addAmount} incrementAmount={incrementAmountInShop} decrementAmount={decrementAmountInShop} setAddAmount={setAddAmount}/>} />
        <Route path="*" element={<Error />} />
        <Route path="/cart" element={<Cart  cartCars={cartCars} cartCount={cartCount} incrementAmount={incrementAmountInCart} decrementAmount={decrementAmountInCart} deleteFromCart={deleteFromCart} clearCart={clearCart}/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App;
