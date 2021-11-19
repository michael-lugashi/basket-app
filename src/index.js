import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Header from './core/header.js';
import Footer from './core/footer.js';
import Groceries from './core/groceries.js';
import Basket from './core/basket.js';

ReactDOM.render(
 <React.StrictMode>
  <div className="header">
   <Header />
  </div>
  <div className="footer">
   <Footer />
  </div>
  <div className="groceries">
   <Groceries />
  </div>
  <div className="basket">
   <Basket />
  </div>
 </React.StrictMode>,

 document.getElementById('root')
);
