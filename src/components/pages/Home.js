import React from 'react';
import Navbar from '../views/Navbar';
import Citacao from '../views/citacao';
import Countdown from '../views/countdown';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Citacao />
      <Countdown />
    </div>
  );
}

export default Home;
