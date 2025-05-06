
import React from "react";
import { Box } from "@mui/material";

const brands = [
  "https://logoeps.com/wp-content/uploads/2017/08/Bata-logo.png",
  "https://opa-media-optimized-delivery.s3.ap-south-1.amazonaws.com/wow_logo_qnzd48.png",
  "https://static.thearcweb.com/images/PROD/PROD-164cca1b-d99a-4b21-86ae-1296b4397fec.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pk190hmWBHQ4vZQ90qGiXHk95uK2bv3pag&s",
  "https://seeklogo.com/images/B/burger-king-logo-C329670C79-seeklogo.com.png",
  "https://1000logos.net/wp-content/uploads/2021/04/Nivea-logo.png",
];

const Slide = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        backgroundColor: "#f5f0ff",
        py: 2,
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          animation: "slide 20s linear infinite",
        }}
      >
        {[...brands, ...brands].map((src, i) => (
          <Box
            key={i}
            sx={{
              width: 150,
              height: 100,
              mx: 2,
              backgroundColor: "white",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: 1,
            }}
          >
            <img src={src} alt="brand" style={{ maxWidth: "90%", maxHeight: "100px" }} />
          </Box>
        ))}
      </Box>

      
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </Box>
  );
};

export default Slide;
