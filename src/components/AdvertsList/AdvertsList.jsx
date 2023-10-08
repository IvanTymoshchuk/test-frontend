import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../../redux/adverts/operations';
import { getAdverts } from '../../redux/adverts/selectors';
import { Container, ListItems } from './AdvertsList.styled';
import { AdvertsItems } from '../AdvertsItems/AdvertsItems';
import { Loader } from '../Loader/Loader';
import Buttons from 'components/Button/Button';

export const AdvertsList = ({ filteredAdverts }) => {
  const dispatch = useDispatch();
  const adverts = useSelector(getAdverts);
  const itemsPerPage = 8;
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const hasFilteredAdverts = filteredAdverts?.length > 0;
  const displayedAdverts = hasFilteredAdverts
    ? filteredAdverts
    : adverts.slice(0, startIndex + itemsPerPage);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setStartIndex(startIndex + itemsPerPage);
      setLoading(false);
    }, 1000);
  };

  const filteredAdvertsCount = hasFilteredAdverts
    ? filteredAdverts.length
    : adverts.length;
  const shouldShowLoadMoreButton =
    !loading && startIndex + itemsPerPage < filteredAdvertsCount;

  return (
    <Container>
      <ListItems>
        {displayedAdverts.map((advert, index) => (
          <AdvertsItems key={advert.id} advert={advert} index={index} />
        ))}
      </ListItems>
      {loading ? (
        <Loader />
      ) : (
        shouldShowLoadMoreButton && (
          <Buttons onClick={loadMore} text="Load more" />
        )
      )}
    </Container>
  );
};

export default AdvertsList;
