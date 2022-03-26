import React, {useState} from "react";
import img1 from "../../Image/contact-img.jpg";



function Register_form (props) {

  const [user,setuser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    conpassword: "",
  });

  function handleChange(event){
    const {name, value} = event.target;

    setuser((prevuser)=>{
      return {
        ...prevuser,
        [name]:value
      };
    });
  }

  function submituser(event){
    props.onAdd(user);
    setuser({
      name: "",
      password: "",
      email: "",
      phone: "",
      conpassword: ""
    });
    event.preventDefault();
  }



    return <div><section className="contact_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="form_container">
            <div className="heading_container">
              <h2>
                Register
              </h2>
            </div>
            <form>
              <div>
                <input type="text" name="name" onChange={handleChange} value={user.name} placeholder="Full Name " />
              </div>
              <div>
                <input type="email" name="email" onChange={handleChange} value={user.email} placeholder="Email" />
              </div>
              <div>
                <input type="text" name="phone" onChange={handleChange} value={user.phone} placeholder="Phone number" />
              </div>
              <div>
                <input type="password" name="password"  onChange={handleChange} value={user.password} placeholder="Password" />
              </div>
              <div>
                <input type="password" name="conpassword" onChange={handleChange} value={user.conpassword} placeholder="Confirm Password" />
              </div>
              <div className="d-flex ">
                <button>
                  Register
                </button>
                <button className="special">
                  Login
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
  </div>
}

export default Register_form;