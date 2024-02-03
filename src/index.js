import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './responsive.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Home from './pages/Home';
import NavBar from './components/NavBar';

import Team from './pages/Team';
import Games from './pages/Games';
import Footsal from './pages/Footsal';
import Badminton from './pages/Badminton';
import Carrom from './pages/Carrom';
import Dodgeball from './pages/Dodgeball';
import FootVolley from './pages/FootVolley';
import Frisbee from './pages/Frisbee';
import GullyCricket from './pages/GullyCricket';
import SevenStones from './pages/SevenStones';
import KhoKho from './pages/KhoKho';
import Throwball from './pages/Throwball';
import Chess from './pages/chess';
import FutsalRegistration from './RegistrationForm/FutsalRegistration';
import BadmintonRegistration from './RegistrationForm/BadmintonRegistration';
import FootvolleyRegistration from './RegistrationForm/FootvolleyRegistration';
import FrisbeeRegistration from './RegistrationForm/FrisbeeRegistration';
import DodgeballRegistration from './RegistrationForm/DodgeballRegistration';
import SevenStonesRegistration from './RegistrationForm/SevenStonesRegistration';
import GullyCricketRegistration from './RegistrationForm/GullyCricketRegistration';
import CarromRegistration from './RegistrationForm/CarromRegistration';
import ChessRegistration from './RegistrationForm/ChessRegistration';
import ThrowballRegistration from './RegistrationForm/ThrowballRegistration';
import KhoKhoRegistration from './RegistrationForm/KhoKhoRegistration';
import TugOfWar from './pages/TugOfWar';
import TugOfWarRegistration from './RegistrationForm/TugOfWarRegistration';
import ScrollToTop from './components/ScrollToTop';
// import Gallery from './pages/Gallery';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<Games/>} />
      {/* <Route path="/gallery" element={<Gallery/>} /> */}
      <Route path="/our-team" element={<Team />} />
      <Route path="/games/futsal" element={<Footsal/>} />
      <Route path="/games/badminton" element={<Badminton/>} />
      <Route path="/games/carrom" element={<Carrom/>} />
      <Route path="/games/dodgeball" element={<Dodgeball/>} />
      <Route path="/games/foot-volley" element={<FootVolley/>} />
      <Route path="/games/frisbee" element={<Frisbee/>} />
      <Route path="/games/gully-cricket" element={<GullyCricket/>} />
      <Route path="/games/seven-stones" element={<SevenStones/>} />
      <Route path="/games/kho-kho" element={<KhoKho/>} />
      <Route path="/games/throwball" element={<Throwball/>} />
      <Route path="/games/tug-of-war" element={<TugOfWar/>} />
      <Route path="/games/chess" element={<Chess/>} />

      <Route path="/games/futsal-registration" element={<FutsalRegistration/>} />
      <Route path="/games/4-a-side-baddy-registration" element={<BadmintonRegistration/>} />
      <Route path="/games/footvolley-registration" element={<FootvolleyRegistration/>} />
      <Route path="/games/frisbee-registration" element={<FrisbeeRegistration/>} />
      <Route path="/games/dodgeball-registration" element={<DodgeballRegistration/>} />
      <Route path="/games/seven-stones-registration" element={<SevenStonesRegistration/>} />
      <Route path="/games/gully-cricket-registration" element={<GullyCricketRegistration/>} />
      <Route path="/games/carrom-registration" element={<CarromRegistration/>} />
      <Route path="/games/throwball-registration" element={<ThrowballRegistration/>} />
      <Route path="/games/kho-kho-registration" element={<KhoKhoRegistration/>} />
      <Route path="/games/tug-of-war-registration" element={<TugOfWarRegistration/>} />
      <Route path="/games/chess-registration" element={<ChessRegistration/>} />


    </Routes>
    <ScrollToTop/>
    <Footer />
  </Router>,


  


);

