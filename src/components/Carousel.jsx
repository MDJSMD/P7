//Importation des modules React et de l'Hook useState pour gérer l'état de l'application
import React, { useState } from 'react';
import FlecheGauche from '../assets/fleche-gauche.png';
import FlecheDroite from '../assets/fleche-droite.png';

//Création d'un carousel permettant d'afficher les images et de naviguer entre-elles
const Carrousel = ({ images }) => {

//Création d'un index pour les images pour connaitre la propriété active et mettre à jour l'index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
//Définition du nombres d'images
  const imageCount = images.length;

  //Création d'une fonction pour revenir à l'image précédente
  const handlePreviousClick = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(imageCount - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  //Création d'une fonction pour passer à l'image suivante
  const handleNextClick = () => {
    if (currentImageIndex === imageCount - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div className="carrousel">
      {imageCount > 1 && ( //Dans le cas ou le carrousel contient plusieurs images
        <>
          <img
            className="arrow left-arrow"
            src={FlecheGauche}
            alt="contenu précédent"
            onClick={handlePreviousClick}
          />
          <img
            className="arrow right-arrow"
            src={FlecheDroite}
            alt="contenu suivant"
            onClick={handleNextClick}
          />
        </>
      )}
      {images.map((image, index) => ( //Affichage des images
        <img
          key={index} //Utilisation de Key avec la valeur de l'index de l'image 
          className={index === currentImageIndex ? 'carrousel-img actif' : 'carrousel-img'} //Utilisation d'une class pour vérifier si l'image est active ou non grace au currentImageIndex
          src={image}
          alt="Logement"
        />
      ))}
    </div>
  );
};

export default Carrousel;
