import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Selecters } from './Select';
import Buttons from 'components/Button/Button';
import {
  Container,
  SelectContainer,
  Label,
  Form,
  InputContainer,
  InputLeft,
  UnitLeft,
  InputRight,
  UnitRight,
} from './FilteredForm.styled';

export const FilteredForm = ({
  makes,
  prices,
  onFilterChange,
  onResetClick,
}) => {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPriceStep, setSelectedPriceStep] = useState(null);
  const [selectedPriceLabel, setSelectedPriceLabel] = useState('');
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  const makeOptions = makes.map(make => ({ value: make, label: make }));

  const priceRangeOptions = [];
  for (let i = 30; i <= 500; i += 10) {
    priceRangeOptions.push({ value: i, label: `${i}` });
  }

  const handlePriceStepChange = selectedOption => {
    setSelectedPriceStep(selectedOption.value);
    setSelectedPriceLabel(selectedOption.label);
  };

  const filteredPrices = prices.filter(price => price <= selectedPriceStep);

  const formatMileage = value => {
    const cleanedValue = value.toString().replace(/,/g, '');
    const formattedValue = cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return formattedValue;
  };

  const handleMinInputChange = e => {
    setMinValue(e.target.value);
  };

  const handleMaxInputChange = e => {
    setMaxValue(e.target.value);
  };

  const handleFilterClick = () => {
    if (
      parseInt(minValue.replace(/,/g, ''), 10) >
      parseInt(maxValue.replace(/,/g, ''), 10)
    ) {
      toast.error('Minimum mileage cannot be greater than maximum mileage');
      return;
    }

    const newFilters = {
      make: selectedMake,
      filteredPrices: filteredPrices.map(price => ({
        value: price,
        label: `${price}`,
      })),
      minMileage: parseInt(minValue.replace(/,/g, ''), 10),
      maxMileage: parseInt(maxValue.replace(/,/g, ''), 10),
    };

    onFilterChange(newFilters);
  };

  const handleResetClick = () => {
    setSelectedMake('');
    setSelectedPriceStep(null);
    setSelectedPriceLabel('');
    setMinValue('');
    setMaxValue('');
    onResetClick();
  };

  return (
    <Container>
      <SelectContainer>
        <Label htmlFor="nameSelect">Car brand</Label>
        <Selecters
          id="nameSelect"
          placeholder="Enter the text"
          value={selectedMake}
          onChange={selectedOption => setSelectedMake(selectedOption)}
          options={makeOptions}
        />
      </SelectContainer>

      <SelectContainer>
        <Label htmlFor="priceSelect">Price/ 1 hour</Label>
        <Selecters
          id="priceSelect"
          placeholder="To $"
          value={
            selectedPriceStep
              ? { value: selectedPriceStep, label: selectedPriceLabel }
              : null
          }
          onChange={handlePriceStepChange}
          options={priceRangeOptions}
        />
      </SelectContainer>

      <Form>
        <Label>Car mileage / km</Label>
        <InputContainer>
          <InputLeft
            type="text"
            value={formatMileage(minValue)}
            onChange={handleMinInputChange}
          />
          <UnitLeft>From</UnitLeft>
          <InputRight
            type="text"
            value={formatMileage(maxValue)}
            onChange={handleMaxInputChange}
          />
          <UnitRight>To</UnitRight>
        </InputContainer>
      </Form>
      <Buttons onClick={handleFilterClick} text="Search" />
      <Buttons onClick={handleResetClick} text="Reset" />
    </Container>
  );
};

export default FilteredForm;
