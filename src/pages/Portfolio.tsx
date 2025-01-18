import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Chip,
  Stack,
} from '@mui/material';

const portfolioItems = [
  {
    id: 1,
    title: 'Advanced Server Management',
    description: 'A comprehensive server management system with advanced features for FiveM servers.',
    image: '/placeholder.jpg',
    technologies: ['Lua', 'JavaScript', 'MySQL'],
    category: 'Server Tools',
  },
  {
    id: 2,
    title: 'Custom UI Framework',
    description: 'Modern and responsive UI framework designed specifically for FiveM servers.',
    image: '/placeholder.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    category: 'UI/UX',
  },
  {
    id: 3,
    title: 'Performance Optimization Suite',
    description: 'Collection of optimization tools and scripts for maximum server performance.',
    image: '/placeholder.jpg',
    technologies: ['Lua', 'C++', 'Python'],
    category: 'Performance',
  },
];

const Portfolio = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={8}>
        <Typography variant="h3" gutterBottom>
          Portfolio
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Showcasing our best FiveM development work
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {portfolioItems.map((item) => (
          <Grid item key={item.id} xs={12} md={6}>
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
                height="300"
                image={item.image}
                alt={item.title}
                sx={{
                  objectFit: 'cover',
                }}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  paragraph
                >
                  {item.description}
                </Typography>
                <Box mt={2}>
                  <Typography variant="subtitle2" gutterBottom>
                    Technologies Used:
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                    {item.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                </Box>
                <Box mt={2}>
                  <Chip
                    label={item.category}
                    color="secondary"
                    size="small"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Contact Section */}
      <Box textAlign="center" mt={8}>
        <Typography variant="h4" gutterBottom>
          Interested in Custom Development?
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Contact us to discuss your project requirements and how we can help enhance your FiveM server.
        </Typography>
      </Box>
    </Container>
  );
};

export default Portfolio; 