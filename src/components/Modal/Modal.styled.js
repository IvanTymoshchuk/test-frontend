import styled from '@emotion/styled';
import { mq, colors } from '../../utils';

export const Backdrop = styled.div`
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.backdrop};
  z-index: 100;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 24px;
  background-color: ${colors.white};
  padding: 30px;
  width: calc(100% - 90px);
  max-height: calc(100% - 80px);
  overflow: auto;
  ${mq.movilePlus} {
    width: 450px;
    padding: 32px;
  }

  ${mq.tablet} {
    width: 541px;
    max-height: 830px;
    padding: 34px;
  }
`;

export const BtnClose = styled.button`
  position: absolute;
  background-color: transparent;
  cursor: pointer;
  top: 7px;
  right: 7px;
  :hover {
    color: red;
  }
`;
