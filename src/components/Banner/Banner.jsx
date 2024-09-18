import { Link } from 'react-router-dom';
import './banner.scss';

const Banner = ({ className, children }) => {
  return (
    <div className={className}>
        <div className="overlay"></div> {/* Élément pour la superposition */}
      {children}
    </div>
  );
};

export default Banner;