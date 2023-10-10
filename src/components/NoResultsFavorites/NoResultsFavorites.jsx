import React from 'react';
import ImgNoRes from '../../img/no-results-found.jpg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectedIsLoading } from 'redux/adverts/selectors';
import Loader from 'components/Loader/Loader';
import Buttons from 'components/Button/Button';
import {FotoContainer} from './NoResultsFavorites.styled'

export const NoResultsFavorites = () => {
  const navigate = useNavigate();
  const isLoading = useSelector(selectedIsLoading);

  const handleExploreClick = () => {
    navigate('/catalog');
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <FotoContainer>
          <img src={ImgNoRes} alt="No results Found" width="50%" />
          <Buttons onClick={handleExploreClick} text="See all catalog" />
        </FotoContainer>
      )}
    </>
  );
};

export default NoResultsFavorites;
