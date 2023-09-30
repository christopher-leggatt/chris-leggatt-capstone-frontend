import React from 'react';
import { Button } from '@mui/material';
import './_HomeHeader.scss';

const HomeHeader = () => {
  return (
    <section className="home-header">
      <video className="home-header__background-video" autoPlay muted>
        <source src="http://localhost:5050/videos/convenient_cannabis.mp4" type="video/mp4" />
      </video>
      <div className="home-header__overlay-content">
        <h1 className='home-header__page-header' style={{ fontStyle: 'Newsreader Variable'}} >Welcome to Convenient Cannabis</h1>
        <p className='home-header__page-content'>Premium Cannabis Products, Tailored for You.</p>
        <Button variant="contained" color="primary" size="large" href="/products">
          Shop Now
        </Button>
      </div>
    </section>
  );
}

export default HomeHeader;