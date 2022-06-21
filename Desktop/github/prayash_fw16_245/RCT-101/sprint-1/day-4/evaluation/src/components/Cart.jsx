import React, { useContext, useNavitgate } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartData, setCartData, isAuth } = useContext(CartContext);

  const [count, setCount] = useState(1);
  console.log(cartData);

  const navigate = useNavigate();
  const handleDec = (id) => {
    if (count == 0) {
      let newData = setCartData.filter((e) => {
        return e.id !== id;
      });
      setCartData(newData);
    }
    setCount(count - 1);
  };
  const handleInc = () => {
    if (!isAuth) {
      return navigate("/login");
    }
    setCount(count + 1);
  };

  const handleClose = () => {
    navigate("/");
  };
  return (
    <div className="main_container_cart">
      
        
            {
                cartData.map?.((cartDatas) => {
                    return (
                        <div className="item-container">
                        <div key={cartDatas.key} className="items">
                        <div>
                        <h3>{cartDatas.title}</h3>
                        <button type="button" className="btn btn-primary">
                          {" "}
                          ADD
                        </button>
                      </div>
                      <div>
                        <img src={cartDatas.image} alt="" />
                      </div>
                      </div>
                      <div className="gty">
          <button onClick={() => handleInc(cartData.id)}>+</button>
          <h2>{count}</h2>
          <button disabled={count === 1} onClick={() => handleDec(cartData.id)}>
            -
          </button>
        </div>
      </div>

                    )
                })
            }
         
        
       
      <div className="totalDiv">
        <div className="totle_price">
          <h3>Total : {cartData.price}</h3>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            BUY
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    😍😎YOUR ORDER IS PLACED
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
