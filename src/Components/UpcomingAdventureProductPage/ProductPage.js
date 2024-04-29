import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import trips from "../UpcomingAdventures/trips.json";
import "./productPage.css";
import Star from "../UpcomingAdventures/Star";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import ScoreIcon from "@mui/icons-material/Score";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from '@mui/icons-material/Close';

const ProductPage = () => {
  const { name } = useParams();
  const [trip, setTrip] = useState(null);
  console.log(trip);

  useEffect(() => {
    const selectedAdventure = trips.find((trip) => trip.name === name);
    setTrip(selectedAdventure);
  }, [name]);

  if (!trip) {
    return <div>Loading...</div>;
  }

  return (
    <div className="upcomingAdventures-products-container">
      <section className="product-banner" key={trips.id}>
        <img src={trip.imageURL} alt="product banner" />
      </section>

      <section className="trip-information">
        <section className="trip-detail-section">
          <div className="trip-heading-details">
            <div>
              <h1>{trip.name}</h1>
              <div className="trip-location">
                <LocationOnOutlinedIcon />
                <h4>{trip.location}</h4>
              </div>
            </div>

            <div>
              <Star stars={trip.rating} />
              <h4>{trip.rating} reviews</h4>
            </div>
          </div>

          <div className="trip-quick-details">
            <hr />
            <div className="quick-details-content">
              <div className="trip-period">
                <AccessTimeOutlinedIcon />
                <div>
                  <h4>Duration</h4>
                  <h4>{trip.duration}</h4>
                </div>
              </div>

              <div className="trip-type">
                <ScoreIcon />
                <div>
                  <h4>Tour Type</h4>
                  <h4>Daily Tour</h4>
                </div>
              </div>

              <div className="group-size">
                <PeopleOutlineIcon />
                <div>
                  <h4>Group Size</h4>
                  <h4>25 People</h4>
                </div>
              </div>

              <div className="local-language">
                <GTranslateIcon />
                <div>
                  <h4>Languages</h4>
                  <h4>English</h4>
                </div>
              </div>
            </div>
            <hr />
          </div>

          <div className="trip-overview">
            <h1>Trip Overview</h1>
            {trip.overview.map((des) => (
              <p>{des}</p>
            ))}
          </div>

          <div className="trip-highlights">
            <h1>Highlights</h1>
            <ul>
              {trip.bulletPoints.map((point) => (
                <li>{point}</li>
              ))}
            </ul>
            <hr />
          </div>

          <div className="trip-ameneties">
            <h1>Included/Excluded</h1>
            <div className="ameneties-included-excluded">
              <ul>
                {trip.amenetiesIncluded.map((included) => (
                  <div>
                    <li>{included}</li>
                    <DoneIcon />
                  </div>
                ))}
              </ul>

              <ul>
                {trip.amenetiesExcluded.map((excluded) => (
                  <div>
                    <li>{excluded}</li>
                    <CloseIcon />
                  </div>
                ))}
              </ul>
            </div>
            <hr />
          </div>
        </section>

        <section className="trip-payment-section">
          <h1>section 2</h1>
        </section>
      </section>
    </div>
  );
};

export default ProductPage;
