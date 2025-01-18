import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

const products = [
  {
    id: 1,
    title: 'Advanced FiveM Script Bundle',
    description: 'A comprehensive collection of essential FiveM scripts for your server.',
    price: '$49.99',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    title: 'Premium Server Tools',
    description: 'Professional-grade tools to enhance your server management capabilities.',
    price: '$39.99',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    title: 'Custom UI Package',
    description: 'Beautiful and responsive UI elements for your FiveM server.',
    price: '$29.99',
    image: 'https://via.placeholder.com/300x200',
  },
];

function Shop() {
  const handleBuyNow = (productId: number) => {
    // Redirect to Ko-fi shop
    window.open('https://ko-fi.com/nfltemp/shop', '_blank');
    // Track purchase event with Meta Pixel
    if ((window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        FiveM Scripts Shop
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center" paragraph>
        Premium scripts and tools for your FiveM server
      </Typography>
      
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {product.description}
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" color="primary">
                    {product.price}
                  </Typography>
                  <Button 
                    variant="contained" 
                    onClick={() => handleBuyNow(product.id)}
                  >
                    Buy Now
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Shop; 