import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate import edin
import "./TopBar.css";
import { FaShoppingCart } from 'react-icons/fa';

export const TopBar = () => {
  const navigate=useNavigate();

  const handleCartClick = () =>{
    navigate("/basket");
  };

  return (
    <div className='top'>
      <h1>Gazikent Mobilya</h1>
      <FaShoppingCart className="cart-icon" onClick={handleCartClick} />
    </div>  
  )
}

export default TopBar
