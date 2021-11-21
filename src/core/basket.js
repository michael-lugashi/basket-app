import React from 'react';
import '../styles/basket.css';
import basket from '../assets/shopping-basket-img.png';
// import BasketItem from './basketItem';
import GroceryList from './groceryList';

class Basket extends React.Component {
 render() {
  return (
   <div>
    <h2 className="basketTitle">
     <img className="basketHeaderImg" src={basket} alt="Shoping Basket" />{' '}
     Basket
    </h2>
    <GroceryList
     parentComponent="basket"
     groceryItemsList={this.props.groceryItemsList}
     handleDecrement={this.props.handleDecrement}
     handleIncrement={this.props.handleIncrement}
    />
   </div>
  );
 }
}

export default Basket;
