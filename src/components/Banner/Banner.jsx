import { Link } from 'react-router-dom';
import './_banner.scss';

const Banner = () => {
  return (
    <div className="banner">
        <div className="overlay"></div> {/* Élément pour la superposition */}
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Banner;