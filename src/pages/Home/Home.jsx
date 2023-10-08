import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImg from '../../img/Home.png';
import Buttons from 'components/Button/Button';
import { Container } from './Home.styled';

export const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/catalog');
  };

  return (
    <>
      <Container>
        <img src={backgroundImg} alt="backgroundImg" />
        <Buttons onClick={handleExploreClick} text="All car" />
      </Container>
    </>
  );
};

export default Home;
