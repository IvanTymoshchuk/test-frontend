import styled from 'styled-components';
import { colors } from 'utils';

export const Image = styled.img`
  width: 100%;
  height: 314px;
  display: block;
  object-fit: cover;
  border-radius: 14px;
`;
export const AllContainer = styled.div`
  margin-top: 14px;
  margin-bottom: 24px;
`;

export const NameContainer = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 8px;
`;

export const NameCarModal = styled.span`
 font-family: MontserratSemiBold;
  font-size: 18px;
`;

export const NameAccent = styled.span`
  color: ${colors.blueActenct};
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const InfoItem = styled.p`
  font-size: 14px;
  color: ${colors.gray};
  display: flex;
  align-items: center;
`;

export const Description = styled.p`
  line-height: 1.43;
  margin-top: 14px;
`;

export const TextModal = styled.h3`
 font-family: MontserratSemiBold;
  font-size: 18px;
  line-height: 1.43;
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12px;
  letter-spacing: -0.24px;
`;

export const ConditionsItem = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  font-size: 12px;
  line-height: 1.5;
  background-color: rgb(249, 249, 249);
`;

export const Accent = styled.span`
  color: blue;
  font-weight: 600;
  letter-spacing: -0.24px;
`;
export const Button = styled.button`
  width: 168px;
  height: 40px;
  padding: 12px 50px;
  margin-top: 15px;
  border-radius: 12px;
  background: ${colors.blueActenct};
  color: ${colors.white};
  cursor: pointer;
  border: none;

  &:hover,
  &:focus {
    background-color: rgba(11, 68, 205, 1);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const ButtonLink = styled.a`
  color: ${colors.white};
`;
