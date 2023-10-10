import { useState, useEffect } from 'react';

const useCatalog = (initialFilters, allAdverts) => {
  const [filters, setFilters] = useState(initialFilters);
  const [filteredAdverts, setFilteredAdverts] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);

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

  const handleFilterChange = newFilters => {
    setFilters(newFilters);
    setIsFiltering(true);
  };

  const handleResetClick = () => {
    setFilters(initialFilters);
    setIsFiltering(false);
  };

  return {
    filters,
    filteredAdverts,
    isFiltering,
    handleFilterChange,
    handleResetClick,
  };
};

export default useCatalog;
