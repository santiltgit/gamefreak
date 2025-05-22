import { useState } from 'react'
import Header from './header/header'
import Slider from './slider/slider'
import Rooter from './rooter/rooter'
import './App.css'
import FeaturedGames from './slider/FeaturedGames';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Slider />
      <CommunitySlider />
      <FeaturedGames />
      <Rooter />
    </div>
  );
}

export default App;
