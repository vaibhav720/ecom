import React from "react";
import img1 from "../../Image/contact-img.jpg";

function Login(){
    return (
        <section className="contact_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="form_container">
            <div className="heading_container">
              <h2>
                Login
              </h2>
            </div>
            <form action="">
              
              <div>
                <input type="email" placeholder="Email" />
              </div>
              
              <div>
                <input type="password" placeholder="Password" />
              </div>
              
              <div className="d-flex ">
                <button>
                  Login
                </button>
                <button className="special">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="img-box">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
    );
}

export default Login;