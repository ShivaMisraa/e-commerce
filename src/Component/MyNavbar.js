import React, { useState, useContext } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Cart from "./Cart";
import { CartContext } from "./CartContext";

const MyNavbar = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useContext(CartContext);

  const handleCartClick = () => {
    setShowCart((prevState) => !prevState);
  };

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        expand="sm"
        style={{ color: "white" }}
       
      >
        <Container>
          <Nav className="mt-1 shadow justify-content-center align-items-center ">
            <Nav.Link href="#home" className="mt-2">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="mt-2">
              Features
            </Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Button onClick={handleCartClick}>
              Cart{" "}
              {totalQuantity > 0 && (
                <span className="badge bg-secondary">{totalQuantity}</span>
              )}
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <Cart show={showCart} handleClose={handleCartClick} />
    </div>
  );
};

export default MyNavbar;
