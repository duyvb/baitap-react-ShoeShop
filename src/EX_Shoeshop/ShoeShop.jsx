import React, { useState } from 'react'
import ShoeList from './ShoeList';
import ShoeDetails from './ShoeDetails';
import data from "./data.json";
import Cart from "./Cart";




export default function ShoeShop() {

  const [selectProduct, setSelectProduct] = useState(null);

  const [carts, setCarts] = useState([]);


  const [isOpen, setIsOpen] = useState(false);

  const handleCloseCart = () => {
    setIsOpen(false);
  };

  const handleCloseModal = () => {
    setSelectProduct(null);
  };



  const totalProduct = carts.reduce((result, item) => {
    return result + item.quantity;
  }, 0);

  const handleGetProduct = (product) => {
    setSelectProduct(product);
  };
  

  const handleAddToCart = (product) => {
    const found = carts.find((item) => item.id === product.id);
    if (found) {
      const newCarts = carts.map((item) => {
        if (item.id === product.id) {
          return {...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCarts(newCarts);
    } else {
      const productWithQuantity = {...product, quantity: 1 };
      setCarts([...carts,productWithQuantity]);
    }
  };


  const handleDeleteProductFromCart = (productID) => {
    const newCarts= carts.filter(item => item.id !== productID)
    setCarts(newCarts);
  };

  return (
    <div className='container'>
        <h1 className='text-center text-primary'>SHOE SHOP</h1>
        <div className='d-flex justify-content-end mb-3'>
          <button className='btn btn-dark' onClick={() => setIsOpen(true)}>Giỏ Hàng ({totalProduct})</button>
          

        </div>

        <ShoeList products={data}
        onGetProduct={handleGetProduct}
        onAddToCart={handleAddToCart}/>

        <ShoeDetails product={selectProduct} onClose={handleCloseModal} />

        {isOpen && <Cart carts={carts} onCloseCart={handleCloseCart}
        onDeleteProduct={handleDeleteProductFromCart} />}
        
    </div>
  )
}
