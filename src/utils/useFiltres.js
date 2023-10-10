import { useState, useEffect } from 'react';

 const useFilter = (favorites, initialFilters) => {
  const [filters, setFilters] = useState(initialFilters);
  const [filteredAdverts, setFilteredAdverts] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    if (!isFiltering) {
      setFilteredAdverts([]);
      return;
    }

    const filtered = favorites.filter(advert => {
      const { make, filteredPrices, minMileage, maxMileage } = filters;

      if (
        (make && advert.make !== make.value) ||
        (filteredPrices.length > 0 &&
          !filteredPrices.some(
            priceObj => priceObj.value === advert.rentalPrice.replace('$', '')
          )) ||
        (minMileage && advert.mileage < minMileage) ||
        (maxMileage && advert.mileage > maxMileage)
      ) {
        return false;
      }

      return true;
    });

    setFilteredAdverts(filtered);
  }, [filters, favorites, isFiltering]);

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

export default useFilter;
