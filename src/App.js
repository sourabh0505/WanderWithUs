import './App.css';
import AppBanner from './Components/AppBanner/AppBanner';
import Navbar from './Components/Navbar/Navbar';
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs';
import TripPlanning from './Components/TripPlanning/TripPlanning';
import Newsletter from './Components/Newsletter/Newsletter';
import Footer from './Components/Footer/Footer';
import UpcomingAdventures from './Components/UpcomingAdventures/UpcomingAdventures';
import WeekendAdventures from './Components/WeekendAdventures/WeekendAdventures';
import LongAdventures from './Components/LongAdventures/LongAdventures';
import ContactUs from './Components/ContactUs/ContactUs';
import AboutUs from './Components/AboutUs/AboutUs';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<><AppBanner/> <UpcomingAdventures/> <WeekendAdventures/> <LongAdventures/> <WhyChooseUs/> <TripPlanning/></>}></Route>
          <Route path='/contactus' element={<ContactUs/>}></Route>
          <Route path='/aboutus' element={<AboutUs/>}></Route>
      </Routes>
      <Newsletter/>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
