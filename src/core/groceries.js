import React from 'react';
import '../styles/groceries.css';
import GroceryList from './groceryList';

class Groceries extends React.Component {
 render() {
  return (
   <div>
    <h2 className="groceriesTitle">🥬 Groceries</h2>
    <GroceryList
     parentComponent="groceries"
     groceryItemsList={this.props.groceryItemsList}
     handleDecrement={this.props.handleDecrement}
     handleIncrement={this.props.handleIncrement}
    />
   </div>
  );
 }
}

export default Groceries;
