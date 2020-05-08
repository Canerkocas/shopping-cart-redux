import React, {useEffect} from "react";
import CartItem from "./CartItem";
import { connect } from 'react-redux';
import { CLEAR_CART, GET_TOTALS } from '../actions';
const CartContainer = ({ cart = [], total, dispatch }) => {
  useEffect(() => {
    dispatch({ type: GET_TOTALS })
  })
  
  if (cart.length === 0) {
    return (
      <section className="cart">
        
        <header>
          <h2>your cart</h2>
          <h4 className="empty-cart">is empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
    
      <header>
        <h2>your bag</h2>
      </header>
      
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch({ type: CLEAR_CART})}>clear cart</button>
      </footer>
    </section>
  );
};

function mapStateToProps(store){
return {
cart:store.cart,
total: store.total
}
}

export default connect(mapStateToProps)(CartContainer);
