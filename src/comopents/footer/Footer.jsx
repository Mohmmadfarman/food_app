import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p className='par'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eius? Pariatur inventore ullam provident ipsam!</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>


            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+1-235467-788-78</li>

                    <li>contact@del.com</li>
                </ul>

            </div>
        
           
        </div>
        <hr />
        <p className="footer-copyright">
                Copyright 2024 Tomata.com - All Right Reserved
            </p>

      
    </div>
  )
}

export default Footer
