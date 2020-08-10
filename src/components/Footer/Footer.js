import React from 'react'
import  User from '../../images/user.jpg'
import './Footer.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
   

    
    return (
        <>
          <section id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 footer-box">
                        <img src={User} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error blanditiis asperiores, eos culpa sint dolorum molestias quaerat? Natus adipisci, molestiae, doloremque esse quas unde eos tenetur, aut non atque dolores!</p>
                    </div>
                    <div className="col-md-4 footer-box">
                        <p><b>CONTACT US</b></p>
                        <p><FaMapMarkerAlt 
                        size= '25px'
                      /> Master trader , Lahore</p>
                        <p><FaPhoneAlt 
                        size= '25px'
                        /> +92 (0300) 123456</p>
                        <p><FaEnvelope
                        size= '25'
                        /> example@gmail.com</p>
                    </div>
                    <div className="col-md-4 footer-box">
                        <p>SUBCRIBE NEWSLETTER</p>
                        <input type="email" name="email" className="form-control" placeholder="Please Enter your email here"/>
                        <button type="button" className="btn btn-primary">Subcribe</button>
                    </div>
                </div>
                <hr/>
                <p className="copyright" >website created By Master_Trader's</p>
            </div>	
        </section>  
        </>
    )
}

export default Footer
