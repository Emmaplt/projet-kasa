import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import dataLogements from '../data/logements.json';

const Logement = () => {
  const { id } = useParams(); // Récupère l'ID du logement à partir de l'URL
  const navigate = useNavigate(); // Utilisé pour rediriger
  const logement = dataLogements.find((logement) => logement.id === id); // Trouve le logement correspondant

  // Rediriger vers la page 404 si le logement n'est pas trouvé
  useEffect(() => {
    if (!logement) {
      navigate('/404'); // Redirige vers la page 404
    }
  }, [logement, navigate]);

  if (!logement) {
    return null; // Retourne null si le logement n'est pas encore trouvé (avant redirection)
  }

  return (
    <div className="logement-details">
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.description}</p>
      {/* Afficher d'autres informations comme les équipements, etc. */}
    </div>
  );
};

export default Logement;