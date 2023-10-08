import React, { useEffect, useState } from 'react';
import { CatalogContainer, ResultMessage } from './Catalog.styled';
import {FilteredForm} from 'components/FilteredForm/FilteredForm';
import { AdvertsList } from '../../components/AdvertsList/AdvertsList';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from 'redux/adverts/selectors';
import { fetchAll } from 'redux/adverts/operations';
import { ToastContainer } from 'react-toastify';

export const Catalog = () => {
  const dispatch = useDispatch();
  const allAdverts = useSelector(getAdverts);

  const [filters, setFilters] = useState({
    make: '',
    filteredPrices: [],
    minMileage: '',
    maxMileage: '',
  });
  const [filteredAdverts, setFilteredAdverts] = useState(null);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  useEffect(() => {
    if (isFiltering) {
      if (
        filters.make ||
        filters.filteredPrices.length > 0 ||
        filters.minMileage ||
        filters.maxMileage
      ) {
        const filteredAdverts = allAdverts.filter(advert => {
          if (filters.make && advert.make !== filters.make.value) {
            return false;
          }
          if (
            filters.filteredPrices.length > 0 &&
            !filters.filteredPrices.some(
              priceObj => priceObj.value === advert.rentalPrice.replace('$', '')
            )
          ) {
            return false;
          }
          if (filters.minMileage && advert.mileage < filters.minMileage) {
            return false;
          }
          if (filters.maxMileage && advert.mileage > filters.maxMileage) {
            return false;
          }
          return true;
        });

        setFilteredAdverts(filteredAdverts);
      } else {
        setFilteredAdverts([]);
      }
    }
  }, [filters, allAdverts, isFiltering]);

  const makes = [...new Set(allAdverts.map(advert => advert.make))];
  const prices = [
    ...new Set(allAdverts.map(advert => advert.rentalPrice.replace('$', ''))),
  ];
  const mileage = [...new Set(allAdverts.map(advert => advert.mileage))];
  const minMileage = Math.min(...mileage);
  const maxMileage = Math.max(...mileage);

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
        {isFiltering ? (
          filteredAdverts !== null && filteredAdverts.length > 0 ? (
            <AdvertsList filteredAdverts={filteredAdverts} />
          ) : (
            <>
              <ResultMessage>
                No results found for the selected criteria.
              </ResultMessage>
            </>
          )
        ) : (
          <AdvertsList adverts={allAdverts} />
        )}
      </CatalogContainer>
      <ToastContainer />
    </>
  );
};

export default Catalog;
