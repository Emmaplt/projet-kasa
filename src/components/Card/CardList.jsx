import { Link } from 'react-router-dom';
import data from '../../data/logements.json'; // Assure-toi que le chemin est correct
import Card from './Card'; // Assure-toi que le chemin est correct
import './_cardlist.scss'; // Assure-toi que le chemin est correct

const CardList = () => {
  return (
    <div className="card-list">
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          cover={item.cover}
        />
      ))}
    </div>
  );
};

export default CardList;