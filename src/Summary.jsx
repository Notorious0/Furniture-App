import React from 'react';
import './Summary.css';

const Summary = ({ totalPrice }) => {
  const handleCompleteShopping = () => {
    if (totalPrice > 0) {
      alert('Alışverişiniz tamamlandı!');
    }
  };

  return (
    <div className="summary">
      <button
        className='button'
        disabled={totalPrice <= 0}
        onClick={handleCompleteShopping}
      >
        Alışverişi Tamamla
      </button>
    </div>
  );
};

export default Summary;






