import {FaEnvelope, FaInstagram} from "react-icons/fa";

import {useState} from "react";
import beety from "../src/images/beety.jpg";
import purple from "../src/images/purple.png";
import envelope from "../src/images/envelope.png";
import './index.css';
import './style.css';
import './norm.css';
import './animate.css';


function App() {


  const[formData, setFormData] = useState({
    name :"",
    number: "",
    email: ""  
  })

  function handleChange(e){
    const {name, value} = e.target
    setFormData((prevFormData)=> {
    return {
      ...prevFormData, 
      [name]: value
    }
    })
  }
  function handleSubmit(e){
    e.preventDefault()
    setFormData({
      name :"",
      number : "",
      email: ""    
    })
    console.log(formData)
  }


  return (  
    
      

  <div className="mrs-v53">
      <div className="marshall-container" id="container">
        <div id="triangle_canvas" className="mrs_canvas mrs_particles_canvas">
          <canvas id="particle_3d" width="900" height="520"></canvas>
        </div>
      

        <div className="marshall-col-6 marshall-col-content align-center">
          <div className="marshall-content jquery-center">
            <div className="marshall-inner-logo fadeIn fast">
              <img src={purple} alt="Marshall Logo" />
            </div>
            <h1 className="fadeIn medium">We are working on our new platform<br /> Stay Tuned!!</h1>
           
          </div>
          <div className="marshall-social-column">
            <p className="fadeIn fast">Stay in touch :
            <ul className="marshall-social-links">
              <li><a className="fadeIn fast-child-1" href="www.instagram.com" title="instagram"><FaInstagram /></a></li>
            </ul>
            </p>
          </div>
        </div>
        <div className="marshall-col-6 marshall-col-screen">
          <div id="marshall-animate-area" data-hide="mrs-scaleDown" className="marshall-single-fit-thumb marshall-animate-content marshall-animate-content mrs-active marshall-fit-column" style={{ backgroundImage: `url(${beety})`, }}>
            <div className="inner-content css-center">
              <div className="morph-content marshall-newsletter-form marshall-newsletter-center-wrap">
                <div className="marshall-morph-modal open open-animate">
                  <div className="marshall-newsletter-inner">
                    <div className="content-style-form content-style-form-2">
                      <div className="marshall-newsletter-header">
                        <div className="marshall-newsletter-animation-icons">
                          <span className="medium-icon animation-icon-1 animation-icon"><i className="fa fa-envelope-o" aria-hidden="true"><FaEnvelope /></i></span>
                          <span className="medium-icon animation-icon-2 animation-icon"><i className="fa fa-envelope-o" aria-hidden="true"><FaEnvelope /></i></span>
                          <span className="medium-icon animation-icon-3 animation-icon"><i className="fa fa-envelope-o" aria-hidden="true"><FaEnvelope /></i></span>
                          <span className="small-icon animation-icon-4 animation-icon"><i className="fa fa-envelope-o" aria-hidden="true"><FaEnvelope /></i></span>
                          <span className="small-icon animation-icon-5 animation-icon"><i className="fa fa-envelope-o" aria-hidden="true"><FaEnvelope /></i></span>
                          <span className="large-icon animation-icon-7 animation-icon"><i className="fa fa-envelope-o" aria-hidden="true"><FaEnvelope /></i></span>
                          <span className="large-icon animation-icon-8 animation-icon"><i className="fa fa-envelope-o" aria-hidden="true"><FaEnvelope /></i></span>
                          <span className="large-icon animation-icon-9 animation-icon"><i className="fa fa-envelope-o" aria-hidden="true"><FaEnvelope /></i></span>

                          <span className="medium-icon animation-icon-10 animation-icon"><i className="fa fa-envelope-o" aria-hidden="true"><FaEnvelope /></i></span>
                          <span className="large-icon animation-icon-16 animation-icon"><i className="fa fa-envelope-o" aria-hidden="true"><FaEnvelope /></i></span>
                          <span className="large-icon animation-icon-17 animation-icon"><i className="fa fa-envelope-o" aria-hidden="true"><FaEnvelope /></i></span>
                          <span className="large-icon animation-icon-18 animation-icon"><i className="fa fa-envelope-o" aria-hidden="true"><FaEnvelope /></i></span>
                        </div>
                        <img src={envelope} alt="" />
                      </div>
                      <div className="marshall-newsletter-description">
                        
                        <p>Join DNI waiting list: We will notify you when the platform is live</p>
                      </div>
                      <form onSubmit={handleSubmit} id="marshall-form" className="marshall-newsletter-content">

                      <label htmlFor="marshall-name"></label>
                      <input value={formData.name} onChange={handleChange}  name="name" type="text" placeholder="Your FullName"/>

                      <label htmlFor="marshall-email"></label>
                      <input  type="email" value={formData.email} onChange={handleChange}  name="email" placeholder="Your Email" />

                      <label htmlFor="marshall-number"></label>
                      <input  type="number" value={formData.number} onChange={handleChange}  name="number" placeholder="Your PhoneNumber"/>
                      <button className="marshall_submit" type="submit">Notify Me</button>
                        
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  </div>


      
  
  );
}

export default App;
