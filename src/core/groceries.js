import React from 'react';
import '../styles/groceries.css';
import FoodItem from './groceryItem.js';

class Groceries extends React.Component {
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
 render() {
  return (
   <div>
    <h2 className="groceriesTitle">🥬 Groceries</h2>
    <ul className="foodList">
        {this.groceryItems.map(item=>{
            return <FoodItem foodItemName={item} />
        })}
    </ul>
   </div>
  );
 }
}

export default Groceries;
