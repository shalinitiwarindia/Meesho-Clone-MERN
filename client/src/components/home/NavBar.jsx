import React from "react";
import { Box, Typography, styled } from "@mui/material";

const Container = styled(Box)`
  display: flex;
  justify-content: space-around;
  height:40px;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  overflow-x: auto;
  position: sticky;
  top: 70px; /* same as your header height */
  z-index: 1000;

  &::-webkit-scrollbar {
    display: none;
  }
`;


const CategoryItem = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  white-space: nowrap;
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    color: #d3007f;
  }
`;

const categories = [
  "Home & Kitchen",
  "Beauty & Health",
  "Jewellery & Accessories",
  "Bags & Footwear",
  "Electronics",
  "Sports & Fitness",
  "Car & Motorbike",
  "Office Supplies & Stationery",
  "Pet Supplies",
];

const NavBar = () => {
  return (
    <Container>
      {categories.map((cat, i) => (
        <CategoryItem key={i}>{cat}</CategoryItem>
      ))}
    </Container>
  );
};

export default NavBar;
