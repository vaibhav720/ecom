import React from "react"; 
import img1 from "../../Image/w1.png";


function Card(){
    return <div className="col-sm-6 col-xl-3">
    <div className="box">
      <a href="">
        <div className="img-box">
          <img src={img1} alt="" />
        </div>
        <div className="detail-box">
          <h6>
            Smartwatch
          </h6>
          <h6>
            Price:
            <span>
              $125
            </span>
          </h6>
        </div>
        <div className="new">
          <span>
            New
          </span>
        </div>
        <p> This is a Limited edition. I fyou like then press this link. some more textin should be in new line.</p>
      
      </a>
    </div>
  </div>
}

export default Card;
