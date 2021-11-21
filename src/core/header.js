import React from 'react';
import '../styles/header.css';
import basket from '../assets/shopping-basket-img.png';

class Header extends React.Component {
 render() {
  return (
   <div>
    <img className="basketImg" src={basket} alt="Shoping Basket" />
    <h1 className="title">Hello, Basket!</h1>
   </div>
  );
 }
}

export default Header;
