import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={RouterLink} to="/" sx={{ 
          flexGrow: 1, 
          textDecoration: 'none', 
          color: 'inherit' 
        }}>
          NFL Temp
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/shop">
            Shop
          </Button>
          <Button 
            color="inherit" 
            component="a" 
            href="https://ko-fi.com/nfltemp/shop" 
            target="_blank"
            startIcon={<ShoppingCartIcon />}
          >
            Cart
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 