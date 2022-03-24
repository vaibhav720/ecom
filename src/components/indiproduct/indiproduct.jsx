import React from "react";
import img1 from "../../Image/contact-img.jpg";

function indiproduct(){
    return <div>
        <div class="heading_container heading_center">
            <h2>
              Cart
            </h2>
          </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form_container">
            <div class="heading_container">
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
              
              <div class="d-flex ">
                <button>
                  Remove
                </button>
                
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-6">
          <div class="img-box">
            <img src={img1} alt=""/>
          </div>
        </div>
      </div>
    </div>
}

export default indiproduct;