// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Store
        </Typography>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>
          Home
        </Link>
        <Link to="/store" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>
          Store
        </Link>
        <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
          <IconButton color="inherit">
            <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
