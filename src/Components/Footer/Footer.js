import React from 'react'
import './footer.css'
import Lottie from "lottie-react";
import animationData from "./globe-animation.json"; 

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-links'>
        <div className='quick-links'>
            <h5>Quick Links</h5>
            <div className='links'>
                <hr />
                <div>
                    <a href='/'>Search</a>
                    <a href='/'>Contact Us</a>
                    <a href='/'>Be a Trek Lead</a>
                    <a href='/'>Privacy Policy</a>
                    <a href='/'>Terms And Conditions</a>
                    <a href='/'>Refund and Cancellation Policy</a>
                </div>
            </div>
        </div>

        <div className='upcoming-adventures'>
            <h5>Upcoming Adventures</h5>
            <div className='upcoming-links'>
                <hr />
                <div>
                    <a href='/'>Kasol And Kheerganga Trek</a>
                    <a href='/'>Manali and Bir Billing</a>
                    <a href='/'>Jaisalmer Desert Trip</a>
                    <a href='/'>Munnar Trip</a>
                    <a href='/'>Goa Ultimate Fun</a>
                    <a href='/'>Ladakh On Wheels</a>
                </div>
            </div>
        </div>

        <div className='contact-us'>
                <h5>Contact Us</h5>

                <div className='contact-info'>
                    <hr />
                    <div>
                        <p>Call Us</p>
                        <p>+91-7728974846</p>
                    </div>
                </div>

                <div className='contact-info'>
                    <hr />
                    <div>
                        <p>Email Us</p>
                        <p>sourabhvishnoi05@gmail.com</p>
                    </div>
                </div>

                <div className='contact-info'>
                    <hr />
                    <div>
                        <p>Visit Us</p>
                        <p>Shop No. 24, Near Apsara Complex, Azad Chowk, Bhilwara, Rajasthan - 311001</p>
                    </div>
                </div>
        </div>

        <div className='socia-media'>
            <h5>Find Us On Social Media</h5>

            <div className='social-links'>
                <hr />
                <div>
                    <a href="/"><img src="./Images/facebook-icon.svg" alt="facebook icon" /></a>
                    <a href="/"><img src="./Images/instagram-icon.svg" alt="instagram icon" /></a>
                    <a href="/"><img src="./Images/twitter-icon.svg" alt="twitter icon" /></a>
                    <a href="/"><img src="./Images/whatsapp-icon.svg" alt="whatsapp icon" /></a>
                </div>
            </div>

            <div className="app-logo">
                <Lottie className="footer-logo-icon" animationData={animationData} />               
                <p>WanderWithUs</p>
                <hr />
            </div>
        </div>
        </div>
        <div className='copyright-claim'>
            <h4>Copyright © 2024 by <span>WanderWithUs</span></h4>
        </div>
    </div>
  )
}

export default Footer