import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './BasketProduct.css';
import { removeProductFromBasket, addProductToBasket } from '../src/redux/slices/productSlice';

const BasketProduct = ({ product }) => {
    const [quantity, setQuantity] = useState(product.quantity || 1);
    const [deleteMessage, setDeleteMessage] = useState('');
    const dispatch = useDispatch();

    const increaseQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        dispatch(addProductToBasket({ ...product, quantity: newQuantity }));
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            dispatch(addProductToBasket({ ...product, quantity: newQuantity }));
        }
    };

    const handleRemoveTheBasket = () => {
        if (product) {
            dispatch(removeProductFromBasket(product.id));
            setDeleteMessage('Ürün sepetten silindi!');
            setTimeout(() => {
                setDeleteMessage('');
            }, 3000);
        }
    };

    const price = parseFloat(product.newPrice) || 0;
    const totalPrice = quantity * price;
    const formattedTotalPrice = totalPrice.toFixed(2); // Two decimal places

    return (
        <div className="basket-product">
            <img src={product.image1} alt={product.name} className="product-image" />
            <p className="product-name">{product.name}</p>
            <button className='piece' onClick={decreaseQuantity}>-</button>
            <p className="product-quantity">Adet: {quantity}</p>
            <button className='piece' onClick={increaseQuantity}>+</button>
            <p className="product-price">Fiyat: {formattedTotalPrice} TL</p>
            <div className='messages'>
                {deleteMessage && <p className="delete-message">{deleteMessage}</p>}
            </div>
            <button className="remove-button" onClick={handleRemoveTheBasket}>Sepetten Sil</button>
        </div>
    );
};

export default BasketProduct;
 





