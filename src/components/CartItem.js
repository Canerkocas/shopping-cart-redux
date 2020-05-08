import React from "react";
import { connect } from 'react-redux';
import {INCREASE, DECREASE, REMOVE} from '../actions';

const CartItem = ({ img, title, price, amount, remove, increase, decrease }) => {
  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
       
        <button className="remove-btn" onClick={() => remove()}>REMOVE</button>
      </div>
      <div>
     
        <button className="amount-btn" onClick={() => increase()}>
       
    <i class="fas fa-plus"></i>
        </button>
       
        <p className="amount">{amount}</p>
    
        <button className="amount-btn" onClick={() => decrease()}>
       
          <i class="fas fa-minus"></i>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch,ownProps) => {
  const { id, amount } = ownProps;
  return { 
    remove: () => dispatch({type: REMOVE, payload: {id} }),
    increase: () => dispatch({type: INCREASE, payload: {id} }),
    decrease: () => dispatch({type: DECREASE, payload: {id, amount} }),
  }
    
}

export default connect(null,mapDispatchToProps)(CartItem);
