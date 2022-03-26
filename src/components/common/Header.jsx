import React from "react";


function Header() {



  return (
    
    <div >
    
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="/">
            <span>
              Cart.com
            </span>
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/product"> Products </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about"> About </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contactus">Contact Us</a>
              </li>
            </ul>
            <div className="user_option-box">
              <a href="/Register">
                <i className="fa fa-user" aria-hidden="true"></i>
              </a>
              <a href="/cart">
                <i className="fa fa-cart-plus" aria-hidden="true"></i>
              </a>
              
            </div>
          </div>
        </nav>
      </div>
      
    </header>
    </div>
    
    
  );
}
export default Header;