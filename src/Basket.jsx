import React from 'react';
import { useSelector } from 'react-redux';
import './Basket.css';
import BasketProduct from './BasketProduct';
import Summary from './Summary';
import { selectTotalPrice } from '../src/redux/slices/productSlice'; // Düzenlenmiş dosya yolu

export default function Basket() {
  const basket = useSelector(state => state.product.basket);
  const totalPrice = useSelector(selectTotalPrice); // Toplam fiyatı alın

  return (
    <div className='basket'>
      <div className='container'>
        {basket.length > 0 ? (
          basket.map((product, index) => (
            <BasketProduct
              key={product.id || index}
              product={product}
            />
          ))
        ) : (
          <p style={{ color: "cadetblue" }}>Sepetiniz boş.</p>
        )}
      </div>
      <div className='price'>
        <Summary totalPrice={totalPrice} />
      </div>
    </div>
  );
}




