import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const categories = [
  {
    title: "Personal Care",
    image: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/niv/niv01150/y/27.jpg", 
  },
  {
    title: "Electronics",
    image: "https://avstore.in/cdn/shop/files/2.AVStore-Bose-QuietComfort-45-Noise-Right-Side-View.jpg?v=1685695623",
  },
  {
    title: "Makeup",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2025/FEBRUARY/24/Lx4IbfDW_56367bfc2e9949bf8084af4260902cfd.jpg",
  },
  {
    title: "Smart Phones",
    image: "https://image.made-in-china.com/2f0j00LTsCakfhYebW/6-5-Inch-Screen-Android-Smartphone-Dual-SIM-3800mAh-4G-Smart-Mobile-Phone.webp",
  },
  {
    title: "Men Perfume",
    image: "https://perfumeaddiction.com/cdn/shop/products/TPS-product-600x600.jpg?v=1503993115",
  },
];

const OriginalBrands = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" fontWeight="bold">
          Original Brands{" "}
          <CheckCircle sx={{ color: "purple", verticalAlign: "middle" }} />
        </Typography>
        <Button variant="text" sx={{ color: "purple", fontWeight: 500 }}>
          VIEW ALL &gt;
        </Button>
      </Box>

      <Grid container spacing={2}>
        {categories.map((item, index) => (
          <Grid item xs={6} sm={4} md={2.4} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                textAlign: "center",
                boxShadow: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box p={2}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
              </Box>
              <CardContent
                sx={{
                  background: "linear-gradient(to right, #654DE4, #9A5FFF)",
                  color: "white",
                  fontWeight: "bold",
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                  py: 1.5,
                }}
              >
                <Typography>{item.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OriginalBrands;
