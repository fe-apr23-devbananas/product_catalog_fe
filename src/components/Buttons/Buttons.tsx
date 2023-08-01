import { Button, IconButton } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import React, { FC } from 'react';

export const Buttons: FC = () => {
  return (
    <div className="buttons">
      <Button variant="contained" className="buttons__buy" size="medium">
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
