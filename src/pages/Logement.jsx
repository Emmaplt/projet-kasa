import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import dataLogements from '../data/logements.json';
import Carrousel from '../components/Carrousel/Carrousel';
import TitleLocation from '../components/TitleLocation/TitleLocation';
import Tags from '../components/Tags/Tags';
import HostInfo from '../components/HostInfo/HostInfo';
import Rating from '../components/Rating/Rating';
import Accordion from '../components/Accordion/Accordion';
import '../style/logement.scss';

const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = dataLogements.find((logement) => logement.id === id);

  useEffect(() => {
    if (!logement) {
      navigate('/404');
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  return (
    <div className="logement-details">
       <Carrousel pictures={logement.pictures} />

       <div className="logement-header">
        <TitleLocation title={logement.title} location={logement.location} />
        <HostInfo host={logement.host} />
      </div>

      <div className="logement-tags-rating">
        <Tags tags={logement.tags} />
        <Rating rating={parseInt(logement.rating)} />
      </div>

      <div className="logement-accordions">
        <Accordion title="Description" content={logement.description} />
        <Accordion title="Équipements" content={logement.equipments.join(', ')} />
      </div>
    </div>
  );
};

export default Logement;