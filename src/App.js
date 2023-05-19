import React from "react";
import MyNavbar from "./Component/MyNavbar";
import Cart from "./Component/Cart";
import CartProvider from "./Component/CartContext";
import Home from "./Component/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutPage from "./Route/About";
import Footer from "./Component/Footer";
import HomePage from "./Route/HomePage";
import ContactUs from "./Route/ContactUs";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/About", element: <AboutPage /> },
  { path: "/Home", element: <HomePage /> },
  { path: "/ContactUs", element: <ContactUs /> },
  

]);

function App() {
  return (
    <CartProvider>
        <MyNavbar />
        <Cart />
      <RouterProvider router={router}>
        <Home />
        <HomePage/>
      </RouterProvider>
        <Footer/>
    </CartProvider>
  );
}

export default App;
