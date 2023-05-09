import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Cart = ({ show, handleClose }) => {
  const cartItems = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartElements = cartItems.map((item) => (
    <div key={item.title}>
      <h5>Item</h5>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={item.imageUrl} alt={item.title} width="50" height="50" />
        <span style={{ marginLeft: "1rem" }}>{item.title}</span>
      </div>
      <h5>Price</h5>
      <div>{item.price}</div>
      <h5>Quantity</h5>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ marginRight: "1rem" }}>{item.quantity}</span>
        <Button variant="danger" size="sm">Remove</Button>
      </div>
      <hr />
    </div>
  ));

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartElements}
          <div>Total: {totalPrice}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => alert("Purchased!")}>
            Purchase
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
