import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilteredForm } from 'components/FilteredForm/FilteredForm';
import NoResultsFavorites from 'components/NoResultsFavorites/NoResultsFavorites';
import { fetchAll } from 'redux/adverts/operations';
import { getAdverts } from 'redux/adverts/selectors';
import { CatalogContainer } from 'pages/Catalog/Catalog.styled';

export const Favorite = () => {
  const dispatch = useDispatch();
  const allAdverts = useSelector(getAdverts);
  const [filters, setFilters] = useState({
    make: '',
    filteredPrices: [],
    minMileage: '',
    maxMileage: '',
  });
  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);
  const makes = [...new Set(allAdverts.map(advert => advert.make))];
  const prices = [
    ...new Set(allAdverts.map(advert => advert.rentalPrice.replace('$', ''))),
  ];
  const mileage = [...new Set(allAdverts.map(advert => advert.mileage))];
  const minMileage = Math.min(...mileage);
  const maxMileage = Math.max(...mileage);

  const [filteredAdverts, setFilteredAdverts] = useState(null);
  const [isFiltering, setIsFiltering] = useState(false);

  const handleResetClick = () => {
    setFilters({
      make: '',
      filteredPrices: [],
      minMileage: '',
      maxMileage: '',
    });
    setIsFiltering(false);
  };
  return (
    <>
      <CatalogContainer>
        <FilteredForm
          makes={makes}
          prices={prices}
          minMileage={minMileage}
          maxMileage={maxMileage}
          onFilterChange={newFilters => {
            setFilters(newFilters);
            setIsFiltering(true);
          }}
          filters={filters}
          onResetClick={handleResetClick}
        />

        <NoResultsFavorites />
      </CatalogContainer>
    </>
  );
};

export default Favorite;
