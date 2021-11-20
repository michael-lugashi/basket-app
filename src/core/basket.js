import React from 'react';
import '../styles/basket.css';
import basket from '../assets/shopping-basket-img.png';
import BasketItem from './basketItem';

class Basket extends React.Component {
 //   constructor(props) {
 //     super(props);
 //     this.state = { color: props.color, onClickFunc: props.functionFromFather };
 //   }
 groceryItems = [
  'Strawberry',
  'Blueberry',
  'Orange',
  'Banana',
  'Apple',
  'Carrot',
  'Celery',
  'Mushroom',
  'Green',
  'Pepper',
  'Eggs',
  'Cheese',
  'Butter',
  'Chicken',
  'Beef',
  'Pork',
  'Fish',
  'Rice',
  'Pasta',
  'Bread',
 ];
 basketMessage = document.getElementById('basketList') ? null : (
  <p> Your basket is empty! </p>
 );

 render() {
  return (
   <div>
    <h2 className="basketTitle">
     <img className="basketHeaderImg" src={basket} alt="Shoping Basket" />{' '}
     Basket
    </h2>
    <ul id="basketList" className="foodList">
     {this.groceryItems.map((item) => {
      return <BasketItem  key={item} foodItemName={item} parentComponent={'basket'}/>;
     })}
    </ul>
   </div>
  );
 }
}

export default Basket;
