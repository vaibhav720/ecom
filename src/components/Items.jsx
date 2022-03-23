import React from "react";
import img1 from "../Image/w1.png";
import img2 from "../Image/w2.png";
import img3 from "../Image/w3.png";
import img4 from "../Image/w4.png";
import img5 from "../Image/w5.png";
import img6 from "../Image/w6.png";

function Items() {
  return (<section className="shop_section layout_padding">
  <div className="container">
    <div className="heading_container heading_center">
      <h2>
        Latest Watches
      </h2>
    </div>
    <div className="row">
      <div className="col-md-6 ">
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
                  $300
                </span>
              </h6>
            </div>
            <div className="new">
              <span>
                Featured
              </span>
            </div>
            <p> This is a Limited edition. I fyou like then press this link. some more textin should be in new line.</p>
            
          </a>
        </div>
      </div>
      <div className="col-sm-6 col-xl-3">
        <div className="box">
          <a href="">
            <div className="img-box">
              <img src={img2} alt="" />
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
      <div className="col-sm-6 col-xl-3">
        <div className="box">
          <a href="">
            <div className="img-box">
              <img src={img3} alt=""/>
            </div>
            <div className="detail-box">
              <h6>
                Smartwatch
              </h6>
              <h6>
                Price:
                <span>
                  $110
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
      <div className="col-sm-6 col-xl-3">
        <div className="box">
          <a href="">
            <div className="img-box">
              <img src={img4} alt=""/>
            </div>
            <div className="detail-box">
              <h6>
                Smartwatch
              </h6>
              <h6>
                Price:
                <span>
                  $145
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
      <div className="col-sm-6 col-xl-3">
        <div className="box">
          <a href="">
            <div className="img-box">
              <img src={img5} alt=""/>
            </div>
            <div className="detail-box">
              <h6>
                Smartwatch
              </h6>
              <h6>
                Price:
                <span>
                  $195
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
      <div className="col-sm-6  col-xl-3">
        <div className="box">
          <a href="">
            <div className="img-box">
              <img src={img6} alt=""/>
            </div>
            <div className="detail-box">
              <h6>
                Smartwatch
              </h6>
              <h6>
                Price:
                <span>
                  $170
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
      <div className="col-sm-6 col-xl-3">
        <div className="box">
          <a href="">
            <div className="img-box">
              <img src={img1} alt=""/>
            </div>
            <div className="detail-box">
              <h6>
                Smartwatch
              </h6>
              <h6>
                Price:
                <span>
                  $230
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
    </div>
    <div className="btn-box">
      <a href="">
        View All
      </a>
    </div>
  </div>
</section>
  );
}
export default Items;