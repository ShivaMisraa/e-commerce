import React, { useState, useContext } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Cart from "./Cart";
import { CartContext } from "./CartContext";
import TokenContext from "../Auth/TokenProvider"


const MyNavbar = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useContext(CartContext);

  const authCtx= useContext(TokenContext)
  console.log(authCtx)
  const isLoggedIn = authCtx.isLoggedIn;

  const handleCartClick = () => {
    setShowCart((prevState) => !prevState);
  };

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
          <Nav className="mx-auto m-2">

            
            <Nav.Link href="/Home" style={{color: 'white'}}>Home</Nav.Link>
            
            { isLoggedIn &&(
            <Nav.Link href="/" style={{color: 'white'}}>Store</Nav.Link>
            )}
            
            
            <Nav.Link href="/About" style={{color: 'white'}}>About</Nav.Link>
            
            
            <Nav.Link href="/ContactUs" style={{color: 'white'}}>Contact Us</Nav.Link>
            
            
            <Nav.Link href="/Login" style={{color: 'white'}}>Login </Nav.Link>
          
          
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
