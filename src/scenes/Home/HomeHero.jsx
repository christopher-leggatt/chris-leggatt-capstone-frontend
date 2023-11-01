import React from 'react';
import { Button } from '@mui/material';
import './_HomeHero.scss';
import { useNavigate } from 'react-router-dom';

const HomeHero = () => {

  const navigate = useNavigate();
  return (
    <section className="home-header">
      <video className="home-header__background-video" autoPlay muted>
        <source src={`${process.env.REACT_APP_BACKEND_URL}/videos/convenient_cannabis.mp4`} type="video/mp4" />
      </video>
      <div className="home-header__overlay-content">
        <h1 className='home-header__page-header' style={{ fontStyle: 'Newsreader Variable', color: 'theme.palette.text.primary'}} >Welcome to Convenient Cannabis</h1>
        <p className='home-header__page-content'>Premium Cannabis Products, Tailored for You.</p>
        <Button variant="contained" color="primary" size="large" onClick={() => navigate('/products')}>
          Shop Now
        </Button>
      </div>
    </section>
  );
}

export default HomeHero;