import styled from '@emotion/styled';
import { mq, colors } from '../../utils';

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-top: 50px;
  gap: 8px;
  ${mq.desktop} {
    flex-direction: row;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  font-size: 14px;
  color: ${colors.gray};
  padding-left: 5px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
`;

export const InputLeft = styled.input`
  display: block;
  width: 160px;
  height: 48px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background-color: ${colors.backgroundInput};
  border-radius: 14px 0 0 14px;
  padding-left: 0;
  text-indent: 70px;
  color: ${colors.black};
  font-size: 18px;
`;

export const UnitLeft = styled.span`
  position: absolute;
  display: block;
  left: 20px;
  top: 10px;
  z-index: 9;
  color: ${colors.black};
  font-size: 18px;
`;

export const InputRight = styled.input`
  display: block;
  width: 160px;
  height: 48px;
  border: none;
  background-color: ${colors.backgroundInput};
  border-radius: 0 14px 14px 0;
  padding-left: 0;
  text-indent: 45px;

  color: ${colors.black};
  font-size: 18px;
`;

export const UnitRight = styled.span`
  position: absolute;
  display: block;
  left: 180px;
  top: 10px;
  z-index: 9;
  color: ${colors.black};
  font-size: 18px;
`;
