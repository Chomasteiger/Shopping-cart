// src/pages/HomePage.jsx
import React from 'react';
import { Container, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to My Store
      </Typography>
      <Typography variant="h5" component="p" paragraph>
        Find the best products here. We offer a variety of items to meet your needs.
      </Typography>
      <img src="https://source.unsplash.com/random/800x400" alt="Store" style={{ width: '100%', borderRadius: '8px' }} />
    </Container>
  );
};

export default HomePage;
