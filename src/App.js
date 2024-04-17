import StayConnected from './components/AboutCompany';
import Footer from './components/Footer';
import GlobalContact from './components/GlobalContact';
import HeroSection from './components/HeroSection';
import LastestUpdates from './components/LastestUpdates';
import Navbar from './components/Navbar';
import StrategicInitiatives from './components/StrategicInitiatives';
import SucessStories from './components/SucessStories';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <LastestUpdates/>
      <StayConnected/>
      <StrategicInitiatives/>
      <SucessStories/>
      <Testimonial/>
      <GlobalContact/>
      <Footer/>
    </>
  );
}

export default App;
