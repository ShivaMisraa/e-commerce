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
import Login from "./Auth/Login";
import TokenProvider from "./Auth/TokenProvider";

const router = createBrowserRouter([
  { path: "*", element: <Store /> },
  { path: "/About", element: <AboutPage /> },
  { path: "/Home", element: <HomePage /> },
  { path: "/products/:productId", element: <ProductsDetails /> },
  { path: "/ContactUs", element: <ContactUs /> },
  { path: "/Login", element: <Login /> },
]);

function App() {
  return (
    <TokenProvider>
      <CartProvider>
        <MyNavbar />
        <Cart />
        <RouterProvider router={router}>
          <Store />
          <HomePage />
          <Login />
        </RouterProvider>
        <Footer />
      </CartProvider>
    </TokenProvider>
  );
}

export default App;
