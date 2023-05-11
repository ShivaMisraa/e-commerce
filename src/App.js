import React from "react";
import MyNavbar from "./Component/MyNavbar";
import Cart from "./Component/Cart";
import CartProvider from "./Component/CartContext";
import Home from "./Component/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutPage from "./Route/About";
import Footer from "./Component/Footer";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/About", element: <AboutPage /> },
]);

function App() {
  return (
    <CartProvider>
        <MyNavbar />
      <RouterProvider router={router}>
        <Home />
        <Cart />
      </RouterProvider>
        <Footer/>
    </CartProvider>
  );
}

export default App;
