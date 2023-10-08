import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export default function Buttons({ text, onClick, width }) {
  const StylesButton = styled(Button)(() => ({
    width: width,
    height: '44px',
    marginTop: '20px',
    padding: '14px 44px',
    borderRadius: '12px',
    backgroundColor: 'rgba(52, 112, 255, 1)',
    fontFamily: 'MontserratRegular',

    '&:hover': {
      backgroundColor: '  rgba(11, 68, 205, 1)',
      transition: 'backgroundColor 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
  }));

  return (
    <StylesButton variant="contained" onClick={onClick}>
      {text}
    </StylesButton>
  );
}
