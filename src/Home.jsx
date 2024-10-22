import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className=''>
      <div className='home'>
        <div className='navbar'>
          <h1 className='logo'>Gazikent Mobilya</h1>
          <ul>
            <li><Link to='/'>Anasayfa</Link></li>
            <li><Link to='/about'>Hakkımızda</Link></li>
            <li><Link to='/contact'>İletişim</Link></li>
          </ul>
        </div>
        
        <div id='home' className='content'>
          <h1>Gazikent Mobilya</h1>    
          <p>Hayallerinize giden ev için en güzel yol...</p>
          <div>
          <Link to='/katalog'>
            <button><span></span>Katalog</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;




