import React from "react";
import img1 from "../../Image/contact-img.jpg";

function Cart(){
    return (
        <section className="contact_section layout_padding">
    <div className="container">
        <div className="heading_container heading_center">
            <h2>
              Cart
            </h2>
          </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form_container">
            <div className="heading_container">
              <h2>
                Limited edition watch
              </h2>
              <p>
                  Hand made watch with 20 years of warrenty.
                  for our royal customers
              </p>
            </div>
            <form action="">
              
              <div>
                <input type="text" placeholder="Qualtity" />
              </div>
              
              <div>
                <input type="text" placeholder="personal edits" />
              </div>
              <div>
                <input type="text" placeholder="Color" />
              </div>
              
              <div className="d-flex ">
                <button>
                  Remove
                </button>
                
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="img-box">
            <img src={img1} alt=""/>
          </div>
        </div>
      </div><br/><br/><br/>
      <div className="row">
        <div className="col-md-6">
          <div className="form_container">
            <div className="heading_container">
              <h2>
                Limited edition watch
              </h2>
              <p>
                  Hand made watch with 20 years of warrenty.
                  for our royal customers
              </p>
            </div>
            <form action="">
              
              <div>
                <input type="text" placeholder="Qualtity" />
              </div>
              
              <div>
                <input type="text" placeholder="personal edits" />
              </div>
              <div>
                <input type="text" placeholder="Color" />
              </div>
              
              <div className="d-flex ">
                <button>
                  Remove
                </button>
                
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="img-box">
            <img src={img1} alt=""/>
          </div>
        </div>
      </div><br/><br/><br/>
      <div className="row">
        <div className="col-md-6">
          <div className="form_container">
            <div className="heading_container">
              <h2>
                Limited edition watch
              </h2>
              <p>
                  Hand made watch with 20 years of warrenty.
                  for our royal customers
              </p>
            </div>
            <form action="">
              
              <div>
                <input type="text" placeholder="Qualtity" />
              </div>
              
              <div>
                <input type="text" placeholder="personal edits" />
              </div>
              <div>
                <input type="text" placeholder="Color" />
              </div>
              
              <div className="d-flex ">
                <button>
                  Remove
                </button>
                
                
              </div>
              <button >
                Buy All
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="img-box">
            <img src={img1} alt="" />
          </div>
        </div>
      </div><br/><br/><br/>
    </div>
  </section>
    );
}

export default Cart;