import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux"
import { decrement, getTotal, increment, removeCartItem } from "../../features/CartSlice";


const Cart = () => {

  const dispatch = useDispatch();
  const CartData = useSelector(state => state.cart.cartItems);
  const cart = useSelector(state => state.cart);

  const deleteItem = (item) => {
    dispatch(removeCartItem(item));
  };

  useEffect(() => {
    dispatch(getTotal())
  }, [cart])
  return (
    <>
      <section className="cart">
        <main>

          {
            CartData?.map((item) => {
              return <div className="cartItem" key={item.id}>
                <div>
                  <h4>{item.title}</h4>
                  <img src={item.img} alt="Item" />
                  <MdDelete onClick={() => deleteItem(item)} />
                </div>

                <div>
                  <button onClick={() => dispatch(decrement(item))} >-</button>

                  <input type="number" readOnly value={item.cartQuanity} />

                  <button onClick={() => dispatch(increment(item))}>+</button>

                  <div className="amount">
                    ₹{item.price * item.cartQuanity}
                  </div>
                </div>
              </div>
            })
          }
          {
            CartData.length === 0 ? <h1>Cart is Empty.....</h1> : <article>
              <div>
                <h4>Sub Total</h4>
                <p>₹{cart.cartTotalAmount}</p>
              </div>

              <Link to="/shipping">Checkout</Link>
            </article>
          }

        </main>

      </section>
    </>
  );
};

export default Cart;
