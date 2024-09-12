import React from 'react';
import Banner from '../components/Banner/Banner';
import CardList from '../components/Card/CardList';

function Home() {
  return (
    <div className="Home">
      <Banner />
      <CardList />
    </div>
  );
}

export default Home;