import React from "react";
import "./upcomingAdventures.css";
import '../CommonStyles/commonCards.css';
import data from "./trips.json";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import Star from "./Star";

function UpcomingAdventures() {
  return (
    <div className="upcomingAdventures">
      <div className="upcomingAdventures-heading">
      <h1>UPCOMING ADVENTURES AWAITING YOU</h1>
      <hr />
      </div>
      <div className="trip-container">
        {data.map((tripData) => (
            <div className='trip-component' key={tripData.id}>
              <div className='trip-image'>
                <img src={tripData.imageURL} alt={tripData.name} />
              </div>
              <div className='trip-details'>
                <div>
                  <h2>{tripData.name}</h2>
                </div>
                <div className="trip-reviews">
                  <Star stars={tripData.rating}/>
                <h4>{tripData.rating} reviews</h4>
                </div>
                <div>
                  <div className="trip-duration">
                    <AccessTimeOutlinedIcon/>
                    <h4>{tripData.duration}</h4>
                  </div>

                  <div className="trip-cost">
                    <BoltOutlinedIcon/>
                    <h4>from</h4>
                    <CurrencyRupeeOutlinedIcon/>
                  <h2>{tripData.budget}</h2>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingAdventures;
