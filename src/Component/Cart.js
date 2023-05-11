import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CartContext } from "./CartContext";

const Cart = ({ show, handleClose }) => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartElements = cartItems.map((item) => (
    <div
      key={item.title}
      style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
    >
      <div style={{ marginRight: "1rem" }}>
        <img src={item.imageUrl} alt={item.title} width="50" height="50" />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h5 style={{ margin: 0, marginRight: "1rem" }}>Item:</h5>
          <span>{item.title}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h5 style={{ margin: 0, marginRight: "1rem" }}>Price:</h5>
          <span>{item.price.toFixed(2)} USD</span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h5 style={{ margin: 0, marginRight: "1rem" }}>Quantity:</h5>
          <span>{item.quantity}</span>
        </div>
        <Button variant="danger" onClick={() => removeFromCart(item)}>
          Remove
        </Button>
      </div>
    </div>
  ));

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartElements}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1rem",
                borderTop: "1px solid #ccc",
                paddingTop: "1rem",
              }}
            >
              <h5 style={{ margin: 0 }}>Total:</h5>
              <span>{totalPrice.toFixed(2)} USD</span>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <Button variant="danger" onClick={clearCart}>
                Clear Cart
              </Button>
              <Button
                variant="success"
                style={{ marginLeft: "1rem" }}
                onClick={handleClose}
              >
                Checkout
              </Button>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default Cart;
