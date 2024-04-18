import React from "react";
import "./aboutUs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

function AboutUs() {
  return (
    <div className="aboutUs-container">
      <section className="aboutUs-banner">
        <img src="./Images/ladakh.jpg" alt="aboutUs banner" />
        <div>
          <h1>About Us</h1>
        </div>
      </section>

      {/* aboutUs description section */}

      <section className="aboutUs-description">
        <div className="our-story">
          <div className="team-image">
            <img src="./Images/manali.jpg" alt="team image" />
          </div>

          <div className="team-description">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, rem
              tenetur sint natus blanditiis obcaecati asperiores illum ad earum
              explicabo at, sequi totam ab esse nobis. Quibusdam aliquid,
              voluptatibus excepturi dolorum a explicabo veritatis illo
              doloremque, exercitationem eaque, ipsum amet!
            </p>
          </div>
        </div>

        <div className="our-mission">
          <div className="mission-image">
            <img src="./Images/rajasthan.jpg" alt="mission image" />
          </div>

          <div className="mission-description">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus eveniet earum iusto odio assumenda nisi beatae
              reprehenderit reiciendis tempora incidunt quam enim dolorem
              consectetur nemo, animi id magni veritatis. Est quis quod
              reprehenderit ipsa impedit delectus culpa! Blanditiis, officiis
              ratione!
            </p>
          </div>
        </div>
      </section>

      {/* memories slider component */}

      <section className="our-team-slider">
        <div className="container">
          <h1 className="heading">Our Memories</h1>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            className="swiper_container"
          >
            <SwiperSlide>
              <img src="./Images/manali.jpg" alt="slide_image_1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Images/mountains.jpg" alt="slide_image_2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Images/kerela.jpg" alt="slide_image_3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Images/beach.jpg" alt="slide_image_4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Images/ladakh.jpg" alt="slide_image_5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Images/rajasthan.jpg" alt="slide_image_6" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Images/kerela.jpg" alt="slide_image_7" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
