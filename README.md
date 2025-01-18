# NFL Temp - FiveM Scripts Store

A modern e-commerce website for FiveM scripts and tools, built with React, Material-UI, and integrated with Ko-fi for payments.

## Features

- Modern, responsive design
- Product showcase
- Portfolio section
- Integration with Ko-fi for payments
- Facebook Pixel tracking
- Search functionality
- Mobile-friendly navigation

## Tech Stack

- React
- TypeScript
- Material-UI
- React Router
- Vite
- Facebook Pixel

## Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## Environment Variables

No environment variables are required as the Ko-fi integration is handled through direct URL redirects.

## Facebook Pixel

The Facebook Pixel is already configured in the `index.html` file. It tracks:
- PageView events
- InitiateCheckout events when users click "Buy Now" 