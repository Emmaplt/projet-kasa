import React from "react";
import Banner from "../components/Banner/Banner";
import Accordion from "../components/Accordion/Accordion";
import data from "../data/apropos.json";

const About = () => {
  return (
    <>
      <Banner className="bannerAbout" />

      <div className="about-page">
        {data.map((about, index) => (
          <Accordion key={index} title={about.title} content={about.content} />
        ))}
      </div>
    </>
  );
};

export default About;
