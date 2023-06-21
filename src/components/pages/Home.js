import React from 'react';
import Navbar from '../views/Navbar';
import Citacao from '../views/citacao';
import Countdown from '../views/countdown';
import Mailme from '../services/Mailme';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Citacao />
      <Countdown />
      <Mailme />
    </div>
  );
}

export default Home;
