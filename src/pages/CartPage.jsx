// src/pages/CartPage.jsx
import React, { useContext } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Your Cart
      </Typography>
      <Grid container spacing={3}>
        {cartItems.map(item => (
          <Grid item xs={12} key={item.id}>
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Proceed to Checkout
      </Button>
    </Container>
  );
};

export default CartPage;
