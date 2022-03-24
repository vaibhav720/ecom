import React from "react";
import Footer from"./common/Footer";
import Index from "./Home/Index";
import Header from "./common/Header";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Register from "./Signup/Register";
import Login from "./Login/Login";
import About from "./Aboutus/about";
import ContactUs from "./Contact/ContactUs";
import Products from "./Product/Products";
import Cart from "./Cart/Cart";
import Edit_product from "./Edit_product/Edit_product";

function App() {
  return (
    <BrowserRouter>
    <div>
    <Header/>
    <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/product" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/edit_product" element={<Edit_product/>} />
      </Routes>
    
    <Footer />
    
    </div>
    </BrowserRouter>
  );
}
export default App;