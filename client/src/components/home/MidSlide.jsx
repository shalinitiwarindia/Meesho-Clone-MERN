
import React from 'react';
import { Box, Button, Grid, Card, CardMedia } from '@mui/material';

const categories = [
    { label: 'Lehengas', img: 'https://images.meesho.com/images/marketing/1744722796811.webp' },
    { label: 'Menwear', img: 'https://images.meesho.com/images/marketing/1744635113661.webp' },
    { label: 'Sarees', img: 'https://images.meesho.com/images/marketing/1744635139351.webp' },
    { label: 'Jewellery', img: 'https://images.meesho.com/images/marketing/1744635189897.webp' },
];

const MidSlide = () => {
    return (
        <Box sx={{
            backgroundImage: 'url("https://images.meesho.com/images/marketing/1744698265981.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '80vh',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            px: 4,
            py: 6,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // fallback dark overlay
        }}>
            <Grid container spacing={50} alignItems="center"  >
                <Grid item xs={12} md={6}>

                    <Button
                        variant="outlined"
                        sx={{
                            mt: 50, // or whatever spacing you need
                            ml: 10,
                            color: '#FFC107', // golden yellow text
                            borderColor: '#FFC107', // golden border
                            backgroundColor: '#4A2E1F', // dark brown background
                            borderRadius: '10px',
                            px: 4, // padding left and right
                            py: 1.5,
                            fontWeight: 'bold',
                            fontSize: '16px',
                            '&:hover': {
                                backgroundColor: '#5c3928', // slightly lighter on hover
                                borderColor: '#FFD54F',
                            },
                        }}
                    >
                        Shop Now
                    </Button>

                </Grid>

                <Grid item xs={12} md={6}>
                    <Grid container spacing={2}>
                        {categories.map((item, index) => (
                            <Grid item xs={6} key={index}>
                                <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none', textAlign: 'center' }}>
                                    <CardMedia
                                        component="img"
                                        image={item.img}
                                        alt={item.label}
                                        sx={{
                                            width: '100%',
                                            height: 150,
                                            objectFit: 'contain',
                                            borderRadius: 2,


                                        }}
                                    />


                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
export default MidSlide;