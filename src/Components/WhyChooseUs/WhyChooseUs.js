import React from 'react'
import './whyChooseUs.css'
import Lottie from "lottie-react";
import animationData1 from "./destination-animation.json";
import animationData2 from "./fun-animation.json";
import animationData3 from "./guide-animation.json";

function WhyChooseUs() {
  return (
    <section className='why-us-container'>
        <div className='destinations'>
            <Lottie className="animatedImages" animationData={animationData1} />
            <div>
            <h1>Destination Is All Yours!</h1>
            <p>Tell us about your trip requirement. We'll work together to customize your trip to meet your exact requirement so that you have a memorable trip without any regrets.</p>
            </div>
        </div>

            <div className='fun-activities'>
                <Lottie className='animatedImages' animationData={animationData2}/>
                <div>
                  <h1>Fun Activites</h1>
                  <p>A number of fun activities will be organized including on-spot plannings according to your interests. Moreover, a professional cameramen will be there to click memorable pics of yours for the entire trip.</p>
                </div>
            </div>

            <div className='local-guides'>
              <Lottie className='animatedImages' animationData={animationData3}/>
              <div>
                <h1>Local Guides</h1>
                <p>We will be providing a local guide for every trip having complete knowledge of the must go and hidden places in the region, and will make you all get the best experience out of it.</p>
              </div>
            </div>
    </section>
  )
}

export default WhyChooseUs