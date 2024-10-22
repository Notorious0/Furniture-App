import React, { useState, useEffect } from 'react';
import './Katalog.css';
import SortBar from './SortBar';
import axios from 'axios';
import Product from './Product';
import { useNavigate } from 'react-router-dom';
import TopBar from "../src/TopBar";

export default function Katalog() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error("Ürünler bulunamadı:", response.data);
        }
      } catch (error) {
        console.error("Veri yükleme hatası:", error);
      }
    };

    fetchData();
  }, []);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="katalog">
      <TopBar />
      <SortBar />
      <div className='card-row'>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} onClick={() => handleProductClick(product.id)}>
              <Product
                image1={product.image1}
                image2={product.image2}
                name={product.name}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
              />
            </div>
          ))
        ) : (
          <p>Ürünler bulunamadı</p>
        )}
      </div>
    </div>
  );
}









