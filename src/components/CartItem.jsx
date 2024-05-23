// src/components/CartItem.jsx
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const CartItem = ({ item }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Quantity: {item.quantity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${item.price}
        </Typography>
        <Button variant="contained" color="secondary" style={{ marginTop: '10px' }}>
          Remove
        </Button>
      </CardContent>
    </Card>
  );
};

export default CartItem;
