import { Button, IconButton } from '@mui/material';
import './Buttons.scss';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import React, { FC } from 'react';

export const Buttons: FC = () => {
  return (
    <div className="buttons">
      <Button
        variant="contained"
        className="buttons__buy"
        size="medium"
        style={{
          background: '#4219D0',
          borderRadius: '48px',
          transition: 'all 0.5s linear 0s',
          fontWeight: '700',
          lineHeight: '21px'
        }}
      >
        Add to cart
      </Button>

      <IconButton
        className="buttons__favorite"
        sx={{
          border: '1px solid #ced2ed',
          transition: 'all 0.3s linear 0s'
        }}
      >
        <FavoriteBorder />
      </IconButton>
    </div>
  );
};
