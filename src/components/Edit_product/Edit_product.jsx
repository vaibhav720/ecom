import React from "react";
import img1 from "../../Image/contact-img.jpg";


function Edit_product () {
    return (
        
  <section className="contact_section layout_padding">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="form_container">
          <div className="heading_container">
            <h2>
              Edit Product
            </h2>
          </div>
          <form action="">
            <div>
              <input type="text" placeholder="First Name" />
            </div>
            <div>
              <input type="text" placeholder="Last Name" />
            </div>
            <div>
              <input type="text" placeholder="Shop By Categories" />
            </div>
            <div>
              <input type="text" placeholder="Description" />
            </div>
            <div>
              <input type="file" name="fileToUpload" id="fileToUpload" />
            </div>
            
            <div className="d-flex " >
              <button >
                Save
              </button>
              <button >
                Cancel
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
    </div>
  </div>
</section>
    );
}
export default Edit_product;