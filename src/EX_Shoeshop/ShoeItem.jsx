import React from 'react'

export default function ShoeItem({product, onGetProduct, onAddToCart}) {
  return (
    <div className='card mb-4'>
        <img className='card-img'
         src={product.image} 
         alt={product.name} 
         />
        <div className='card-body'>
            <h5 className='card-title'>{product.name}</h5>
            <p className='card-text'>Price :${product.price}</p>
            <button className='btn btn-primary m-2' onClick={() => onGetProduct(product)}>Xem chi tiết </button>
            

            <button className='btn btn-danger' onClick={() => onAddToCart(product)}>Thêm giỏ hàng </button>
        </div>
    </div>
  );
}
