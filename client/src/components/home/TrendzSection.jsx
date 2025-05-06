import React from "react";
import { Box, Button, Typography } from "@mui/material";

const items = [
  {
    title: "Summer Dresses",
    image: "https://images.meesho.com/images/marketing/1744635893307.webp",
  },
  {
    title: "Baggy Jeans",
    image: "https://images.meesho.com/images/marketing/1744635812270.webp",
  },
  {
    title: "Earrings",
    image: "https://images.meesho.com/images/marketing/1744635870215.webp",
  },
  {
    title: "Chic Flats",
    image: "https://images.meesho.com/images/marketing/1744635846873.webp",
  },
];

const TrendzSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "linear-gradient(to right, #6c004e, #4b0050)",
        background: "linear-gradient(to right, #860065, #2b0034)",
        color: "#fff",
        py: 6,
        px: 4,
        overflowX: "auto",
        flexWrap: "nowrap",
      }}
    >
      {/* Left Section */}
<Box sx={{ minWidth: "350px", mr: 6, px: 3 }}>
  <Typography
    variant="h3" // Increased from h4 → h3
    sx={{ fontWeight: "bold", mb: 2 }}
  >
    meesho <span style={{ color: "#ffbb00" }}>#TRENDZ</span>
  </Typography>
  <Button
    variant="contained"
    sx={{
      mt: 3,
      px: 4, // Wider button
      py: 1.5,
      fontSize: "1rem",
      bgcolor: "white",
      color: "#000",
      fontWeight: 600,
    }}
  >
    Shop Now
  </Button>
</Box>


      {/* Right Section - Products */}
      <Box sx={{ display: "flex", gap: 6 }}>
        {items.map((item, i) => (
          <Box
            key={i}
            sx={{
              minWidth: 130,
              bgcolor: "white",
              borderRadius: 2,
              textAlign: "center",
              boxShadow: 2,
              p: 1,
            }}
          >
            <Box
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                height: 150,
                mb: 1,
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{
                bgcolor: "#fff3e0",
                color: "#000",
                fontWeight: 600,
                py: 0.5,
                borderRadius: 1,
              }}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TrendzSection;

