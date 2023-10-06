import styled from '@emotion/styled';
import { mq, colors } from '../../utils';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.backdrop};
  z-index: 100;
`;

export const ModalContent = styled.div`
  min-width: 280px;
  max-height: 752px;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  background-color: ${colors.white};
  border-radius: 24px;
  ${mq.tablet} {
    max-width: 541px;
    max-height: 752px;
    padding: 40px;
    font-size: 14px;
  }
`;

export const BtnClose = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50px;
  border: transparent;
`;
