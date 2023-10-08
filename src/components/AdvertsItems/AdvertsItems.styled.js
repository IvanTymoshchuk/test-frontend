import styled from '@emotion/styled';
import { colors } from '../../utils';
import { ReactComponent as Icon } from '../../img/heart.svg';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 274px;
  height: 426px;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 268px;
  border-radius: 10px;
  object-fit: cover;
  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
`;

export const HeartIcon = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  stroke-width: 1.5;
  stroke-opacity: 0.8;
  stroke-linecap: round;
  stroke-linejoin: round;

  :hover,
  :focus {
    transform: scale(1.1);
  }
`;

export const Title = styled.h3`
  font-size: 16px;
  line-height: 24px;
  display: flex;
`;

export const Span = styled.span`
  color: ${colors.blueActenct};
  margin-left: 6px;
`;

export const SpanPrice = styled.span`
  margin-left: auto;
`;

export const TextAboutContainer = styled.div`
  display: flex;
  width: 255px;
  height: 40px;
  overflow: hidden;
`;

export const TextAbout = styled.p`
  width: 270px;
  font-size: 12px;
  line-height: 1.5em;

  color: ${colors.gray};
`;
