import React from 'react';
import { Container, FilteredContainer } from './Favorite.styled';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useFilter } from '../../utils';
import { FilteredForm } from 'components/FilteredForm/FilteredForm';
import { AdvertsList } from 'components/AdvertsList/AdvertsList';
import { AdvertsItems } from 'components/AdvertsItems/AdvertsItems';
import { NoResultsFavorites } from 'components/NoResultsFavorites/NoResultsFavorites';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites.favorites);

  const initialFilters = {
    make: '',
    filteredPrices: [],
    minMileage: '',
    maxMileage: '',
  };

  const {
    filters,
    filteredAdverts,
    isFiltering,
    handleFilterChange,
    handleResetClick,
  } = useFilter(favorites, initialFilters);

  const makes = [...new Set(favorites.map(advert => advert.make))];
  const prices = [
    ...new Set(favorites.map(advert => advert.rentalPrice.replace('$', ''))),
  ];
  const mileage = [...new Set(favorites.map(advert => advert.mileage))];
  const minMileage = Math.min(...mileage);
  const maxMileage = Math.max(...mileage);

  return (
    <Container>
      <FilteredContainer>
        <FilteredForm
          makes={makes}
          prices={prices}
          minMileage={minMileage}
          maxMileage={maxMileage}
          onFilterChange={handleFilterChange}
          filters={filters}
          onResetClick={handleResetClick}
        />
      </FilteredContainer>
      {favorites.length === 0 ? (
        <NoResultsFavorites />
      ) : (
        <>
          {isFiltering ? (
            filteredAdverts && filteredAdverts.length > 0 ? (
              <AdvertsList filteredAdverts={filteredAdverts} />
            ) : (
              <NoResultsFavorites />
            )
          ) : (
            favorites.map((advert, index) => (
              <div key={advert.id}>
                <AdvertsItems advert={advert} index={index} />
              </div>
            ))
          )}
        </>
      )}
      <ToastContainer />
    </Container>
  );
};

export default Favorites;
