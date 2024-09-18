import { Link } from 'react-router-dom';
import dataLogements from '../../data/logements.json';
import Card from '../Card/Card';
import './cardlist.scss';

const CardList = () => {
  return (
    <div className="card-list">
      {dataLogements.map((logement) => (
        <Card
          key={logement.id}
          title={logement.title}
          cover={logement.cover}
        />
      ))}
    </div>
  );
};

export default CardList;