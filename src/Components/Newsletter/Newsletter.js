import React from 'react'
import './newsletter.css'

function Newsletter() {
  return (
    <div className='news-letter'>
        <div className='news-icon'>
            <img src="./Images/newsletter-icon.png" alt="newsletter icon" />
        </div>

        <div className='news-heading'>
            <h1>GET UPDATES & MORE</h1>
            <h4>Subscribe For Upcoming Adventures!</h4>
        </div>

        <div className='newsletter-input'>
            <input type="email" placeholder='Email Address...' />
            <button className='subscribe-btn'>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter