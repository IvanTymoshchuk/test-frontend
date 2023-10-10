import { useEffect } from 'react';
import { CatalogContainer, ResultMessage } from './Catalog.styled';
import { FilteredForm } from 'components/FilteredForm/FilteredForm';
import { AdvertsList } from '../../components/AdvertsList/AdvertsList';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from 'redux/adverts/selectors';
import { fetchAll } from 'redux/adverts/operations';
import { ToastContainer } from 'react-toastify';
import { useCatalog } from '../../utils';

export const Catalog = () => {
  const dispatch = useDispatch();
  const allAdverts = useSelector(getAdverts);
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
  } = useCatalog(initialFilters, allAdverts);

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

  return (
    <>
      <CatalogContainer>
        <FilteredForm
          makes={makes}
          prices={prices}
          minMileage={minMileage}
          maxMileage={maxMileage}
          onFilterChange={handleFilterChange}
          filters={filters}
          onResetClick={handleResetClick}
        />
        {isFiltering ? (
          filteredAdverts.length > 0 ? (
            <AdvertsList filteredAdverts={filteredAdverts} />
          ) : (
            <ResultMessage>
              No results found for the selected criteria.
            </ResultMessage>
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
