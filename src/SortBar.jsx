import React, { useState } from 'react';
import './SortBar.css'; 

const SortBar = () => {
  const [sortOption, setSortOption] = useState('');

  const handleSortChange = (option) => {
    setSortOption(option);
    console.log('Sıralama Seçeneği:', option);
  };

  return (
    <div className="sort-bar">
      <div 
        className={`sort-bar-option ${sortOption === 'En Yüksek' ? 'active' : ''}`}
        onClick={() => handleSortChange('En Yüksek')}
      >
        En Yüksek
      </div>
      <div 
        className={`sort-bar-option ${sortOption === 'En Düşük' ? 'active' : ''}`}
        onClick={() => handleSortChange('En Düşük')}
      >
        En Düşük
      </div>
      <div 
        className={`sort-bar-option ${sortOption === 'En Yeni' ? 'active' : ''}`}
        onClick={() => handleSortChange('En Yeni')}
      >
        En Yeni
      </div>
    </div>
  );
};

export default SortBar;

