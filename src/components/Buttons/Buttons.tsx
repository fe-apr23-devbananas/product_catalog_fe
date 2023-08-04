/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, IconButton } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import React, { FC } from 'react';
import { CartItem } from '../../types/CartItem';

interface Props {
  onChangeHandler: () => void;
  item: CartItem | undefined;
}

export const Buttons: FC<Props> = ({ onChangeHandler, item }) => {
  return (
    <div className="buttons">
      {item ? (
        <Button
          variant="contained"
          className="buttons__buy"
          size="medium"
          style={{
            background: '#fff',
            borderRadius: '48px',
            transition: 'all 0.5s linear 0s',
            fontWeight: '700',
            lineHeight: '21px',
            border: '1px solid #E2E6E9',
            color: '#4219D0',
            width: '75%',
            height: '40px',
            marginRight: '8px',
          }}
          onClick={() => onChangeHandler()}
        > 
          Added
        </Button>
      ) : (
        <Button
          variant="contained"
          className="buttons__buy"
          size="medium"
          style={{
            background: '#4219D0',
            borderRadius: '48px',
            transition: 'all 0.5s linear 0s',
            fontWeight: '700',
            lineHeight: '21px',
            width: '75%',
            height: '40px',
            marginRight: '8px',
          }}
          onClick={() => onChangeHandler()}
        >
          Add to cart
        </Button>
      )}

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
