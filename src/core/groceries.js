import React from 'react';
import '../styles/groceries.css';

class Groceries extends React.Component {
 //   constructor(props) {
 //     super(props);
 //     this.state = { color: props.color, onClickFunc: props.functionFromFather };
 //   }
 render() {
  return (
   <div>
    <h2 className="groceriesTitle">🥬 Groceries</h2>
   </div>
  );
 }
}

export default Groceries;
