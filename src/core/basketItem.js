import React from 'react';

class BasketItem extends React.Component {
 constructor(props) {
  super(props);
  this.state = { num: 0 };
 }

 handleDecrement = () => {
  this.setState({ num: this.state.num - 1 });
 };

 render() {
  if (this.state.num) {
   return (
    <li className="basketListItem" onClick={this.handleDecrement}>
     <button className="removeFromBasket">-</button>
     {this.state.num} {this.props.foodItemName}
    </li>
   );
  }
  return null
 }
}

export default BasketItem;
