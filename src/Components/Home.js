import React from 'react'
import Product from './Product'
const Home = ({ products }) => {
  return (
    <>
      <Product products={products} title={"New Arrivals"} />


    </>
  )
}

export default Home