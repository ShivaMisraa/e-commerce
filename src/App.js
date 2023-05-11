import React from "react";
import MyNavbar from "./Component/MyNavbar";
import Home from "./Component/Home";
import Cart from "./Component/Cart";
import CartProvider from "./Component/CartContext";

function App() {
  return (
    <CartProvider>
      <MyNavbar />
      <Home />
      <Cart />
    </CartProvider>
  );
}

export default App;
