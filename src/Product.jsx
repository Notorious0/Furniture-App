import React, { useState } from 'react';
import './Product.css'; // Product.css dosyasını içe aktarıyor

export default function Product({ image1, image2, image3, name, oldPrice, newPrice }) {
  const [currentImage, setCurrentImage] = useState(image1);

  return (
    <div
      className="product"
      onMouseEnter={() => setCurrentImage(image2)}
      onMouseLeave={() => setCurrentImage(image1)}
    >
      <div className="card">
        <img src={currentImage} alt={name} className="mobilya" />
        <div className='Price'>
          <h1>{name}</h1>
          <p className='oldPrice'>{oldPrice}</p>
          <p className='newPrice'>{newPrice}</p>
        </div>
      </div>
    </div>
  );
}








