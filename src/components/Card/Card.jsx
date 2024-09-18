import { Link } from 'react-router-dom';
import dataLogements from '../../data/logements.json';
import './card.scss';

const Card = ({ title, cover }) => {
    return (
      <div className="card">
        <img src={cover} alt={`Image de ${title}`} className="card-image" />
        <div className="card-title-overlay">
          <h3 className="card-title">{title}</h3>
        </div>
      </div>
    );
  };
  
  export default Card;