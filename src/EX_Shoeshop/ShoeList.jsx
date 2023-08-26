import React from 'react'
import ShoeItem from './ShoeItem'

export default function ShoeList({products, onGetProduct, onAddToCart}) {

  const handleGetProduct = (product) => {
    onGetProduct(product);
  }
  return (
    <div className='row '>
        {products.map((product) => {
            return (
                <div key={product.id} className='col-md-3'>
                    <ShoeItem 
                    product={product}
                    onGetProduct={handleGetProduct}
                    onAddToCart={onAddToCart} />
                </div>
            );
        })}
    </div>
  );
}
