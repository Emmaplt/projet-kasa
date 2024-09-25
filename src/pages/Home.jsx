import React from "react";
import Banner from "../components/Banner/Banner";
import CardList from "../components/Cards/Cards";

function Home() {
  return (
    <div className="Home">
      <Banner className="bannerHome">
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <CardList />
    </div>
  );
}

export default Home;
