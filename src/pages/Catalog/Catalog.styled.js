import styled from '@emotion/styled';
import { colors } from 'utils';

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 1184px;
  margin: 0 auto;
  margin-bottom: 50px;
  min-height: 65vh;
`;

export const ResultMessage = styled.p`
  margin-top: 50px;
  font-size: 24px;
  color: ${colors.gray};
`;
