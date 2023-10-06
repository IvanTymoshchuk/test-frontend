import React from 'react';
import { Wrap, LinkRental } from './Home.styled';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/catalog');
  };
  
  return (
    <>
      <Wrap>
        <LinkRental onClick={handleExploreClick}>Look all car</LinkRental>
      </Wrap>
    </>
  );
};

export default Home;
