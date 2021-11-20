import React from 'react';

class FoodItem extends React.Component {
 //   constructor(props) {
 //     super(props);
 //     this.state = { color: props.color, onClickFunc: props.functionFromFather };
 //   }
 render() {
  return (
   <li className="foodListItem">
    <button className="addToBasket">+</button>
    {this.props.foodItemName}
   </li>
  );
 }
}

export default FoodItem;
