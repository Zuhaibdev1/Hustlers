import './App.css';
import { Switch, Route, Router } from "react-router-dom"
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Product from './Components/Product';
import React, { useState, useEffect } from 'react';


function App() {
  const [products, setProducts] = useState(null)
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
  }, [])

  console.log(products)
  return (
    <>
      {/* <Router> */}

      <Navbar />
      <Switch>
        <Route exact path="/" >
          <Home products={products} />
        </Route>
        <Route exact path="/product" >
          <Product products={products} title={"Products"}/>
        </Route>
      </Switch>
      {/* </Router> */}
    </>
  );
}

export default App;
