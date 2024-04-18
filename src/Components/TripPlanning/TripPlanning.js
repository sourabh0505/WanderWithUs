import React from 'react';
import './tripPlanning.css';

function TripPlanning() {
  return (
    <section className='trip-planning'>
        <div className='trip-planning-heading'>
        <h1>We Take Care of Everything For You!</h1>
        <hr />
        </div>

        <p>
        We, an adventure travel company, host a series of tours across India for adventure lovers, travel enthusiasts, giving atmost importance to safety and finally delivering the best holiday experience for our clients. Socializing with people and building a friendly community is our main objective.
        </p>

        <p>Even, don't worry about capturing those unimaginable experiences on the trip and regretting later to not getting the desired clicks. We have got you covered. A professional photographing team will be on site to capture those moments and also a music band will follow to not let you get bored from start of the trip to the end.</p>

        <p>So, what are you waiting for? Bring together your friends, family or colleagues and be ready to collect innumerable moments that always have an element of serendipity on our amazing group trips!</p>

        <div className='types-of-trips'>
            <div className='friends-trip'>
                <h1>Spontaneous Adventures</h1>
                <div>
                  <img className='type-images' src="./Images/friends-travel.jpg" alt="friends trip" />
                </div>
            </div>

            <div className='corporate-trip'>
              <h1>Corporate Trips</h1>
              <div>
                <img className='type-images' src="./Images/corporate-travel.jpg" alt="corporate trip" />
              </div>
            </div>

            <div className='family-trip'>
              <h1>Family Outings</h1>
              <div>
                <img className='type-images' src="./Images/family-travel.jpg" alt="family trip" />
              </div>
            </div>
        </div>
    </section>
  )
}

export default TripPlanning