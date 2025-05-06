import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const categories = [
  { label: 'Ethnic Wear', img: 'https://images.meesho.com/images/marketing/1744634654837.webp' },
  { label: 'Western Dresses', img: 'https://images.meesho.com/images/marketing/1744634725496.webp' },
  { label: 'Menswear', img: 'https://images.meesho.com/images/marketing/1744634780426.webp' },
  { label: 'Footwear', img: 'https://images.meesho.com/images/marketing/1744634814643.webp' },
  { label: 'Home Decor', img: 'https://images.meesho.com/images/marketing/1744634835018.webp' },
  { label: 'Beauty', img: 'https://images.meesho.com/images/marketing/1744634871107.webp' },
  { label: 'Accessories', img: 'https://images.meesho.com/images/marketing/1744634909968.webp' },
  { label: 'Grocery', img: 'https://images.meesho.com/images/marketing/1744634937295.webp' }
];

const Mid = () => {
  return (
    <Box
      sx={{
        px: 4,
        py: 4,
        bgcolor: '#fff',
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
      >
        {categories.map((item, index) => (
          <Grid item key={index}>
            <Box
              sx={{
                width: 120,
                textAlign: 'center',
              }}
            >
              <Box
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: '50% 50% 0 0',
                  overflow: 'hidden',
                  backgroundColor: '#FDECF9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 1.2,
                }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  style={{
                    width: '80%',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </Box>
              <Typography
                variant="body1"
                fontWeight="500"
              >
                {item.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Mid;
