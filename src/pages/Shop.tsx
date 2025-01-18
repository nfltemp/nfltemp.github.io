import { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  CardActions,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const products = [
  {
    id: 1,
    title: 'Advanced FiveM Script',
    description: 'High-performance script for enhanced gameplay',
    image: '/placeholder.jpg',
    price: '$29.99',
    category: 'scripts',
  },
  {
    id: 2,
    title: 'Custom Server Tool',
    description: 'Powerful server management solution',
    image: '/placeholder.jpg',
    price: '$39.99',
    category: 'tools',
  },
  {
    id: 3,
    title: 'Premium Mod Pack',
    description: 'Complete collection of premium mods',
    image: '/placeholder.jpg',
    price: '$49.99',
    category: 'mods',
  },
  {
    id: 4,
    title: 'Server Optimization Suite',
    description: 'Comprehensive server performance optimization',
    image: '/placeholder.jpg',
    price: '$59.99',
    category: 'tools',
  },
  {
    id: 5,
    title: 'Custom UI Framework',
    description: 'Modern UI framework for FiveM servers',
    image: '/placeholder.jpg',
    price: '$44.99',
    category: 'scripts',
  },
  {
    id: 6,
    title: 'Admin Tools Bundle',
    description: 'Complete admin management solution',
    image: '/placeholder.jpg',
    price: '$69.99',
    category: 'tools',
  },
];

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleBuyNow = (productId: number) => {
    // Implement Ko-fi redirect
    window.location.href = 'https://ko-fi.com/nfltemp/shop';
    // Track purchase event
    if ((window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Shop
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        Browse our collection of premium FiveM scripts and tools
      </Typography>

      {/* Search Bar */}
      <Box sx={{ maxWidth: 600, mx: 'auto', mb: 6 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Products Grid */}
      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
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
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  {product.price}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: 'block', mt: 1 }}
                >
                  Category: {product.category}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="large"
                  variant="contained"
                  fullWidth
                  onClick={() => handleBuyNow(product.id)}
                >
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Shop; 