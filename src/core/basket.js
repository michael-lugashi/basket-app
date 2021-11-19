import React from 'react';
import '../styles/basket.css';
import basket from '../assets/shopping-basket-img.png'

class Basket extends React.Component {
 //   constructor(props) {
 //     super(props);
 //     this.state = { color: props.color, onClickFunc: props.functionFromFather };
 //   }
 render() {
  return (
   <div>
    <h2 className="basketTitle"><img className="basketHeaderImg" src={basket} alt="Shoping Basket" /> Basket</h2>
   </div>
  );
 }
}

export default Basket;
