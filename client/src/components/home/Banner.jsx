import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import PaymentsIcon from '@mui/icons-material/Payments';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const Banner = () => {
  return (
    <Box
      sx={{
        bgcolor: '#FFFFFF',
        borderRadius: 2,
        border: '1px solid #F8C3E2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 2,
        px: 3,
        mt: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <ReplayIcon color="secondary" />
        <Typography variant="body2" fontWeight="500">
          7 Days Easy Return
        </Typography>
      </Box>

      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <PaymentsIcon color="secondary" />
        <Typography variant="body2" fontWeight="500">
          Cash on Delivery
        </Typography>
      </Box>

      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <LocalOfferIcon color="secondary" />
        <Typography variant="body2" fontWeight="500">
          Lowest Prices
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
