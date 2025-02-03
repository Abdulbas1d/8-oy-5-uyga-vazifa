import React, { useEffect } from 'react';
import './index.css';
import PictureOne from '../../assets/images/holodelnik.jpg';
import PictureTwo from '../../assets/images/kirmoshina.jpg';
import PictureThree from '../../assets/images/mikrovolbnovka.png';
import PictureFour from '../../assets/images/pilisos.jpg';
import PictureFive from '../../assets/images/dazmol.jpg';
import PictureSix from '../../assets/images/televizor.jpg';
import { Toaster, toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/onlineShopSlice';

function OnlineShop() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      const savedProducts = JSON.parse(cart);
      savedProducts.forEach(product => {
        dispatch(addToCart(product)); 
      });
    }
  }, [dispatch]);

  function handleAddToCart(product) {
    dispatch(addToCart(product)); 
    toast.success(`${product.name} savatga qo'shildi!`); 
  }

  return (
    <div className='container-shop'>
      <h2 className='title'>Products</h2>
      <div className="cards">
        {products.map(product => (
          <div key={product.id} className="card">
            <img 
              src={product.id === 1 ? PictureOne : 
                   product.id === 2 ? PictureTwo : 
                   product.id === 3 ? PictureThree : 
                   product.id === 4 ? PictureFour : 
                   product.id === 5 ? PictureFive : 
                   PictureSix} 
              alt={product.name} 
            />
            <p><strong>Name:</strong> {product.name}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Year:</strong> {product.year || '2024'}</p> 
            <button onClick={() => handleAddToCart(product)} className="btn">Sotib Olish</button>
            <Toaster />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OnlineShop;
