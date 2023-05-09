import React, { useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Cart from "./Cart";

const MyNavbar = () => {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart((prevState) => !prevState);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="sm" style={{ color: "white" }}>
        <Container>
          <Nav className="mt-1 shadow justify-content-center align-items-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Button onClick={handleCartClick}>Cart</Button>
          </Nav>
        </Container>
      </Navbar>
      <Cart show={showCart} handleClose={handleCartClick} />
    </div>
  );
};

export default MyNavbar;
