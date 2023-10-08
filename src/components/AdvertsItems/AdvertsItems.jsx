import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addFavorites, removeFavorites } from 'redux/favorites/slice';
import {
  Item,
  ImageContainer,
  Img,
  HeartIcon,
  Title,
  Span,
  SpanPrice,
  TextAboutContainer,
  TextAbout,
} from './AdvertsItems.styled';
import Buttons from 'components/Button/Button';
const defaultImageURL = "../../img/no-image.jpg";

export const AdvertsItems = ({ advert }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);

  const [isFavorite, setIsFavorite] = useState(false);
  const isShortMake = advert.make.length <= 9;

  const {
    make,
    model,
    year,
    rentalPrice,
    address,
    functionalities,
    rentalCompany,
    type,
    mileage,
  } = advert;

  const addressWords = address.split(' ');
  const lastTwoWords = addressWords.slice(-2).join(' | ');

  const firstFunctionality = functionalities[0];

  useEffect(() => {
    const isAlreadyFavorite = favorites.some(
      favorite => favorite.id === advert.id
    );
    setIsFavorite(isAlreadyFavorite);
  }, [favorites, advert]);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorites(advert.id));
      toast.warning('Ad removed from favorites.');
    } else {
      dispatch(addFavorites(advert));
      toast.success('Ad added to favorites.');
    }
    setIsFavorite(!isFavorite);
  };

 

  return (
    <Item>
      <ImageContainer>
        <Img src={advert.img || defaultImageURL} alt={make} width={274} />
        <HeartIcon
          onClick={toggleFavorite}
          fill={isFavorite ? 'rgba(52, 112, 255, 1)' : 'transparent'}
        />
      </ImageContainer>
      <Title>
        {make}
        {isShortMake && <Span>{model}</Span>}, {year}{' '}
        <SpanPrice>{rentalPrice}</SpanPrice>
      </Title>
      <TextAboutContainer>
        <TextAbout>
          {lastTwoWords} | {rentalCompany} | {type} | {make} | {mileage} |{' '}
          {firstFunctionality}
        </TextAbout>
      </TextAboutContainer>
      <Buttons text="Learn More" />
    </Item>
  );
};

export default AdvertsItems;
