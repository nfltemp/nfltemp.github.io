import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportIcon from '@mui/icons-material/Support';
import SecurityIcon from '@mui/icons-material/Security';

const features = [
  {
    icon: <CodeIcon />,
    title: 'Custom Development',
    description: 'Tailored FiveM scripts and tools built to your specifications',
  },
  {
    icon: <SpeedIcon />,
    title: 'Performance Optimized',
    description: 'High-performance solutions designed for optimal server performance',
  },
  {
    icon: <SupportIcon />,
    title: 'Premium Support',
    description: '24/7 support for all our products with quick response times',
  },
  {
    icon: <SecurityIcon />,
    title: 'Secure Solutions',
    description: 'Built with security best practices to protect your server',
  },
];

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h3" gutterBottom>
          About NFL Temp
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          We specialize in creating high-quality FiveM scripts and tools
          that enhance your server's functionality and user experience.
        </Typography>
      </Box>

      {/* Features Grid */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                },
              }}
            >
              <Box
                sx={{
                  p: 2,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  color: 'white',
                  mb: 2,
                }}
              >
                {feature.icon}
              </Box>
              <Typography variant="h6" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Why Choose Us Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Why Choose Us?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h6" gutterBottom>
                Our Expertise
              </Typography>
              <Typography paragraph>
                With years of experience in FiveM development, we understand the unique
                challenges and requirements of creating high-quality scripts and tools
                for FiveM servers.
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CodeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Expert Development Team" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SpeedIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Performance-First Approach" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SecurityIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Secure & Reliable Solutions" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h6" gutterBottom>
                Our Commitment
              </Typography>
              <Typography paragraph>
                We are committed to providing the highest quality FiveM scripts and
                exceptional customer support to ensure your server's success.
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <SupportIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="24/7 Customer Support" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CodeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Regular Updates" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SecurityIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Money-Back Guarantee" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About; 