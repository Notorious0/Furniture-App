import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <div id='contact' className='contact'>
      <div className='container'>
        <h1>İletişim</h1>
        <p>Bize ulaşmak için aşağıdaki iletişim bilgilerini kullanabilirsiniz:</p>
        <ul>
          <li>Telefon: (123) 456-7890</li>
          <li>Email: info@gazikentmobilya.com</li>
          <li>Adres: Örnek Mahallesi, No: 123, Gazikent, Türkiye</li>
        </ul>
      </div>
      <div className='social'>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={40} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={40} />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={40} />
        </a>
      </div>
    </div>
  );
}

export default Contact;


