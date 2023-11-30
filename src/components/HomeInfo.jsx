import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Je m'appelle
        <span className='font-semibold mx-2 text-white'>Théo Fratia</span>
        👋
        <br />
        Je suis étudiant en informatique a Ynov Lyon, <br /><strong>en recherche d'alternance en développement mobile.</strong>
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Venez découvrir mon parcour ainsi que mon profil.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          En savoir plus
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Venez découvrir toutes mes réalisations !
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Voir mes projets
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
