// src/pages/StorePage.jsx
import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { getProducts } from '../api/fakeStoreAPI';
import ProductCard from '../components/ProductCard';

const StorePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Store
      </Typography>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} display="flex">
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default StorePage;
