import React from "react";
import { connect } from 'react-redux';
const Navbar = ( { amount } ) => {
 
  return (
    <nav>
      <div className="nav-center">
        <h3>BookShop</h3>
        <div className="nav-container">
        <i class="fas fa-shopping-bag"></i>
        
          <div className="amount-container">
  <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    amount: state.amount
  }
}

export default connect(mapStateToProps)(Navbar);
