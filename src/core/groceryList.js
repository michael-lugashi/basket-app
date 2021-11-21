import React from 'react';
import FoodItem from './groceryItem';
// import ReactDOM from 'react-dom';

class GroceryList extends React.Component {
 render() {
  return (
   <ul id="foodList" className="foodList">
    {this.props.groceryItemsList.map((item, index) => {
     return (
      <FoodItem
       key={item[0]}
       foodItemName={item[0]}
       numInBasket={item[1]}
       parentComponent={this.props.parentComponent}
       handleDecrement={this.props.handleDecrement}
       handleIncrement={this.props.handleIncrement}
       index={index}
      />
     );
    })}
   </ul>
  );
 }
}

export default GroceryList;
