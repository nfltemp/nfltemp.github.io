import { Container, Typography, Button, Box, Grid, Card, CardContent, CardMedia, CardActions } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const featuredProducts = [
  {
    id: 1,
    title: 'Advanced FiveM Script',
    description: 'High-performance script for enhanced gameplay',
    image: '/placeholder.jpg',
    price: '$29.99',
  },
  {
    id: 2,
    title: 'Custom Server Tool',
    description: 'Powerful server management solution',
    image: '/placeholder.jpg',
    price: '$39.99',
  },
  {
    id: 3,
    title: 'Premium Mod Pack',
    description: 'Complete collection of premium mods',
    image: '/placeholder.jpg',
    price: '$49.99',
  },
];

const Home = () => {
  const handleBuyNow = (productId: number) => {
    // Implement Ko-fi redirect
    window.location.href = 'https://ko-fi.com/nfltemp/shop';
    // Track purchase event
    if ((window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
          background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="white"
            gutterBottom
          >
            Premium FiveM Scripts
          </Typography>
          <Typography variant="h5" align="center" color="white" paragraph>
            Enhance your FiveM server with our high-quality scripts and tools.
            Professional solutions for serious server owners.
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
              variant="contained"
              component={RouterLink}
              to="/shop"
              size="large"
            >
              Browse Shop
            </Button>
            <Button
              variant="outlined"
              component={RouterLink}
              to="/portfolio"
              size="large"
              sx={{ color: 'white', borderColor: 'white' }}
            >
              View Portfolio
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Featured Products */}
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {featuredProducts.map((product) => (
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
                  height="140"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.title}
                  </Typography>
                  <Typography>{product.description}</Typography>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ mt: 2 }}
                  >
                    {product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => handleBuyNow(product.id)}
                    variant="contained"
                    fullWidth
                  >
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 