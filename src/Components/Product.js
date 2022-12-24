import React from 'react'
import "./css/Product.css"
const Product = ({ products, title }) => {
  
  console.log(products)
  return (<>
    <div className='container'>
      <h1 className='text-center my-5 fw-bolder'>{title}</h1>
      <hr className='opacity-100' />
    </div>
    <div className="container">
      <div className="row">
        {products && products.length > 0 ?
          (products.map((product) => {
            return (
              <div className='col-lg-4 my-5'>
                <div key={product.id} className="card" style={{ width: "18rem" }}>
                  <img src={product.image} className="card-img-top" alt="..." height={300}/>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <a href="#" className="btn btn-primary">Buy Now</a>
                  </div>
                </div>
              </div>
            )
          })
          )


          : <p className='text-center display-6 fw-bold'>Loading..</p>}
      </div>
    </div>
  </>
  )
}

export default Product