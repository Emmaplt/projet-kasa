import React from 'react';
import './titlelocation.scss';

const TitleLocation = ({ title, location }) => {
  return (
    <div className="title-location">
      <h1>{title}</h1>
      <p>{location}</p>
    </div>
  );
};

export default TitleLocation;