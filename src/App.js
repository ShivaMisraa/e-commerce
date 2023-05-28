import React from "react";
import MyNavbar from "./Component/MyNavbar";
import Cart from "./Component/Cart";
import CartProvider from "./Component/CartContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutPage from "./Route/About";
import Footer from "./Component/Footer";
import HomePage from "./Route/HomePage";
import ContactUs from "./Route/ContactUs";
import ProductsDetails from "./Products/ProductsDetails";
import Store from "./Component/Store";

const router = createBrowserRouter([
  { path: "*", element: <Store /> },
  { path: "/About", element: <AboutPage /> },
  { path: "/Home", element: <HomePage /> },
  { path: "/products/:productId", element: <ProductsDetails /> },
  { path: "/ContactUs", element: <ContactUs /> },
]);

function App() {
  return (
    <CartProvider>
      <MyNavbar />
      <Cart />
      <RouterProvider router={router}>
        <Store/>
        <HomePage />
      </RouterProvider>
      <Footer />
    </CartProvider>
  );
}

export default App;
