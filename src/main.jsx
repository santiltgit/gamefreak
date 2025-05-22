import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './header/header';
import Slider from './slider/slider';
import CommunitySlider from './slider/communitySlider';
import FeaturedGames from './slider/FeaturedGames';
import Rooter from './rooter/rooter';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Header />
      <Slider />
      <CommunitySlider />
      <FeaturedGames />
      <Rooter />
    </>
  </StrictMode>,
)
