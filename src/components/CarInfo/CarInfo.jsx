import React from 'react';
import {
  Image,
  AllContainer,
  NameContainer,
  NameCarModal,
  NameAccent,
  ListContainer,
  InfoList,
  InfoItem,
  Description,
  TextModal,
  ConditionsList,
  ConditionsItem,
  Accent,
} from './CarInfo.styled';
import Buttons from 'components/Button/Button';

export const CarInfo = ({ advert }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    type,
    accessories,
    fuelConsumption,
    engineSize,
    description,
    functionalities,
    rentalConditions,
    mileage,
  } = advert;

  const conditions = rentalConditions.split('\n');
  const age = conditions[0].match(/\d+/);
  const addressWords = address.split(' ');
  const lastTwoWords = addressWords.slice(-2).join(' | ');

  const accessoriesMap = accessories
    .map(accessory => {
      const words = accessory.split(' ');
      const firstThreeWords = words.slice(0, 3).join(' ');
      return firstThreeWords;
    })
    .join(' | ');

  const functionalitiesMap = functionalities
    .map(functionality => {
      const words = functionality.split(' ');
      const firstThreeWords = words.slice(0, 3).join(' ');
      return firstThreeWords;
    })
    .join(' | ');

  return (
    <>
      <Image src={img} alt={`${make} ${model}`} width="469" height="261" />
      <AllContainer>
        <NameContainer>
          <NameCarModal>
            {make}
            <NameAccent> {model}</NameAccent>, {year}
          </NameCarModal>
        </NameContainer>

        <ListContainer>
          <InfoList>
            <InfoItem>
              {lastTwoWords} | Id: {id} | Year: {year} | {type} |
            </InfoItem>
            <InfoItem>
              Fuel consumption: {fuelConsumption} | Engine size: {engineSize}
            </InfoItem>
          </InfoList>
        </ListContainer>

        <Description>{description}</Description>
        <TextModal>Accessories and functionalities:</TextModal>
        <InfoList>
          <InfoItem key={accessoriesMap}>{accessoriesMap}</InfoItem>
          <InfoItem key={functionalitiesMap}> {functionalitiesMap} </InfoItem>
        </InfoList>
        <TextModal> Rental Conditions:</TextModal>
        <ConditionsList>
          <ConditionsItem>
            Minimum age: <Accent>{age[0]}</Accent>
          </ConditionsItem>
          <ConditionsItem>{conditions[1]}</ConditionsItem>
          <ConditionsItem>{conditions[2]}</ConditionsItem>
          <ConditionsItem>
            Mileage: <Accent>{mileage.toLocaleString('en-US')}</Accent>
          </ConditionsItem>
          <ConditionsItem>
            Price: <Accent>{rentalPrice}</Accent>
          </ConditionsItem>
        </ConditionsList>
        <Buttons href="tel:+380730000000" text="Rental car" width="200px" />
      </AllContainer>
    </>
  );
};

export default CarInfo;
