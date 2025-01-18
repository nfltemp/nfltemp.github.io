import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ 
        mt: 8, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        textAlign: 'center',
        gap: 4
      }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to NFL Temp
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Your One-Stop Shop for Premium FiveM Scripts
        </Typography>
        <Typography variant="body1" paragraph>
          Discover our collection of high-quality FiveM scripts designed to enhance your gaming experience.
        </Typography>
        <Button 
          variant="contained" 
          size="large" 
          component={RouterLink} 
          to="/shop"
        >
          Browse Scripts
        </Button>
      </Box>
    </Container>
  );
}

export default Home; 