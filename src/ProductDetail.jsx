import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import "./ProductDetail.css";
import TopBar from './TopBar';
import axios from 'axios';
import { addProductToBasket } from './redux/slices/productSlice';

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [isZoomed, setIsZoomed] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${id}`);
        setProduct(response.data);
        setMainImage(response.data.image1);
      } catch (error) {
        console.error("Ürün yükleme hatası:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleClickImage = (src) => {
    setMainImage(src);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const handleAddToBasket = () => {
    if (product) {
      dispatch(addProductToBasket(product));
      setSuccessMessage('Ürün sepete eklendi!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }
  };

  if (!product) {
    return <p>Ürün yükleniyor...</p>;
  }

  return (
    <div className='ProductDetail'>
      <TopBar />
      <div className='content'>
        <div className='image-container'>
          <img
            src={mainImage}
            alt={product.name}
            className={isZoomed ? "zoomed" : ""}
            onClick={toggleZoom}
          />
        </div>
        <div className='info-container'>
          <h2>{product.name}</h2>
          <h3>{product.newPrice}₺</h3> 
          <button onClick={handleAddToBasket}>Sepete Ekle</button>
          <p>{product.description}</p>
        </div>
      </div>
      <div className='thumbimg-container'>
        <img 
          key={product.id}
          src={product.image1} 
          alt={product.name} 
          onClick={() => handleClickImage(product.image1)} 
        />
        <img 
          src={product.image2} 
          alt={product.name} 
          onClick={() => handleClickImage(product.image2)} 
        />
        <img 
          src={product.image3} 
          alt={product.name} 
          onClick={() => handleClickImage(product.image3)} 
        />
      </div>
      <div className='message'>
        {successMessage && <p className='success-message'>{successMessage}</p>}
      </div>
    </div>
  );
}




