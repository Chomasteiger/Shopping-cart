// src/components/ProductCard.jsx
import React, { useState, useContext } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, IconButton, Box } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'contain' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
          <IconButton onClick={decrement}><Remove /></IconButton>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            style={{ width: '50px', textAlign: 'center', margin: '0 10px' }}
          />
          <IconButton onClick={increment}><Add /></IconButton>
        </Box>
      </CardContent>
      <Box sx={{ padding: '1rem' }}>
        <Button variant="contained" color="primary" fullWidth onClick={() => addToCart(product, quantity)}>
          Add to Cart
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
