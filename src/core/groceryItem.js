import React from 'react';

class FoodItem extends React.Component {
 render() {
  if (this.props.parentComponent === 'basket' && this.props.numInBasket === 0) {
   return null;
  }
  return (
   <li
    className={
     this.props.parentComponent === 'basket' ? 'basketListItem' : 'foodListItem'
    }
    onClick={() => {
     const change =
      this.props.parentComponent === 'basket'
       ? this.props.handleDecrement
       : this.props.handleIncrement;
     change(this.props.index);
    }}
   >
    <button
     className={
      this.props.parentComponent === 'basket'
       ? 'removeFromBasket'
       : 'addToBasket'
     }
    >
     {this.props.parentComponent === 'basket' ? '-' : '+'}
    </button>
    {this.props.parentComponent === 'basket' ? this.props.numInBasket : null}{' '}
    {this.props.foodItemName}
   </li>
  );
 }
}

export default FoodItem;
