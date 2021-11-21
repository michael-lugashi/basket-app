import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Header from './core/header.js';
import Footer from './core/footer.js';
import Groceries from './core/groceries.js';
import Basket from './core/basket.js';

class GroceryStore extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   groceryItems: [
    ['Strawberry', 0],
    ['Blueberry', 0],
    ['Orange', 0],
    ['Banana', 0],
    ['Apple', 0],
    ['Carrot', 0],
    ['Celery', 0],
    ['Mushroom', 0],
    ['Green', 0],
    ['Pepper', 0],
    ['Eggs', 0],
    ['Cheese', 0],
    ['Butter', 0],
    ['Chicken', 0],
    ['Beef', 0],
    ['Pork', 0],
    ['Fish', 0],
    ['Rice', 0],
    ['Pasta', 0],
    ['Bread', 0],
   ],
  };
 }

 handleDecrement = (i) => {
  const list = this.state.groceryItems.slice();
  list[i][1] -= 1;
  this.setState({ groceryItems: list });
 };

 handleIncrement = (i) => {
  const list = this.state.groceryItems.slice();
  list[i][1] += 1;
  this.setState({ groceryItems: list });
 };

 render() {
  return (
   <React.StrictMode>
    <div className="header">
     <Header />
    </div>
    <div className="footer">
     <Footer />
    </div>
    <div className="groceries">
     <Groceries
      groceryItemsList={this.state.groceryItems}
      handleDecrement={this.handleDecrement}
      handleIncrement={this.handleIncrement}
     />
    </div>
    <div className="basket">
     <Basket
      groceryItemsList={this.state.groceryItems}
      handleDecrement={this.handleDecrement}
      handleIncrement={this.handleIncrement}
     />
    </div>
   </React.StrictMode>
  );
 }
}

ReactDOM.render(<GroceryStore />, document.getElementById('root'));
