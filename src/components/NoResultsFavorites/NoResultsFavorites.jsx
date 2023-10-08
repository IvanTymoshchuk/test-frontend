import React from 'react';
import ImgNoRes from '../../img/no-results-found.jpg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectedIsLoading } from 'redux/adverts/selectors';
import Loader from 'components/Loader/Loader';
import Buttons from 'components/Button/Button';

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
        <div>
          <img src={ImgNoRes} alt="No results Found" width="50%" />
          <Buttons onClick={handleExploreClick} text="See all catalog" />
        </div>
      )}
    </>
  );
};

export default NoResultsFavorites;
