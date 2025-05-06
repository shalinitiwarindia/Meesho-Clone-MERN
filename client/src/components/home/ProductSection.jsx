import {
  Box,
  Typography,
  styled,
  Checkbox,
  FormControlLabel,
  TextField,
  Select,
  MenuItem,
  Collapse, Divider, Button

} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Link } from "react-router-dom";

// Wrapper with padding and background
const Container = styled(Box)`
    display: flex;
    padding: 20px 40px;
    gap: 20px;
    background: #fafafa;
  `;

// Sidebar box
const Sidebar = styled(Box)`
    width: 250px;
    background: #fff;
    border: 1px solid #e0e0e0;
    padding: 20px;
    border-radius: 8px;
  `;

// Product grid container
const ProductGrid = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    margin-left:30px;
    flex: 1;
  `;

// Card
const ProductCard = styled(Box)`
    width: 200px;
    padding: 15px;
    border: 1px solid #f0f0f0;
    border-radius: 10px;
    background: #fff;
    text-align: center;
    transition: 0.3s;
    &:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  `;

// Product Image
const Image = styled("img")({
  width: "100%",
  height: 250,
  objectFit: "contain",
});

// Text
const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px;
  `;

// Heading + Sort wrapper
const HeaderBar = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 40px 10px 40px;
  `;
const SidebarContainer = styled(Box)`
  width: 250px;
  padding: 15px;
  border-right: 1px solid #ddd;
`;

const ShowMoreText = styled("div")`
  color: #a10077;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Section = styled(Box)`
  margin-top: 10px;
`;

const SectionHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 5px 0;
`;

const FilterTags = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px 0;
`;

const TagButton = styled(Button)`
  text-transform: none;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 5px 15px;
  font-size: 14px;
  color: #333;
  background-color: #fff;

  &:hover {
    background-color: #f5f5f5;
  }
`;


const ProductSection = ({ products }) => {
  const [sortOption, setSortOption] = useState("relevance"); // Default sort option

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortOption(value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case "lowToHigh":
        return a.price.cost - b.price.cost; // Sort by price (Low to High)
      case "highToLow":
        return b.price.cost - a.price.cost; // Sort by price (High to Low)
      case "rating":
        return b.rating - a.rating; // Sort by rating
      default:
        return 0; // Default sorting (Relevance)
    }
  });
  const [openGender, setOpenGender] = useState(true);
  const [openColor, setOpenColor] = useState(false);
  const [openFabric, setOpenFabric] = useState(false);
  const [openDialShape, setOpenDialShape] = useState(false);
  const [openSize, setOpenSize] = useState(false);
  return (
    <>
      {/* Top Heading */}
      <HeaderBar>
        <Typography variant="h4" fontWeight={600}>
          Products For You
        </Typography>

      </HeaderBar>

      {/* Main Content */}
      <Container>
        {/* Sidebar */}
        <Sidebar>
          <Box display="flex" alignItems="center" gap={2}>
            <Typography>Sort by :</Typography>
            <Select
              size="small"
              value={sortOption}
              onChange={handleSortChange}
            >
              <MenuItem value="relevance">Relevance</MenuItem>
              <MenuItem value="lowToHigh">Price: Low to High</MenuItem>
              <MenuItem value="highToLow">Price: High to Low</MenuItem>
              <MenuItem value="rating">Rating</MenuItem>
            </Select>
          </Box>
          <Typography fontWeight={600} fontSize="16px" mb={1}>
            FILTERS
          </Typography>
          <Typography fontSize="12px" color="gray" mb={2}>
            1000+ Products
          </Typography>

          <Typography fontWeight={600} mb={1}>
            Category
          </Typography>
          <TextField
            placeholder="Search"

            variant="outlined"
            size="small"
            fullWidth
            sx={{ mb: 2 }}
          />
          <FormControlLabel control={<Checkbox />} label="Women T-shirts" />
          <FormControlLabel control={<Checkbox />} label="Women Tops And Tunics" />
          <FormControlLabel control={<Checkbox />} label="Analog Watches" />
          <FormControlLabel control={<Checkbox />} label="Bangles & Bracelets" />
          <FormControlLabel control={<Checkbox />} label="Bedsheets" />
          <FormControlLabel control={<Checkbox />} label="Bike Covers" />
          <FormControlLabel control={<Checkbox />} label="Boxes,Baskets & Bins" />
          <FormControlLabel control={<Checkbox />} label="Dresses and Gowns" />
          <FormControlLabel control={<Checkbox />} label="Dupatta Sets" />
          <FormControlLabel control={<Checkbox />} label="Earing and studs" />
          <FormControlLabel control={<Checkbox />} label="Flipflop and Slippers" />
          <FormControlLabel control={<Checkbox />} label="Gowns For Baby Girl" />
          <FormControlLabel control={<Checkbox />} label="Sarees" />
          <FormControlLabel control={<Checkbox />} label="Frock and Dresses" />
          <FormControlLabel control={<Checkbox />} label="Bangles & Bracelets" />
          <SidebarContainer>
            <ShowMoreText>Show More</ShowMoreText>
            <Divider />

            {/* Gender */}
            <Section>
              <SectionHeader onClick={() => setOpenGender(!openGender)}>
                <Typography variant="subtitle1">Gender</Typography>
                {openGender ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </SectionHeader>
              <Collapse in={openGender}>
                <FilterTags>
                  {["Boys", "Girls", "Men", "Women"].map((item) => (
                    <TagButton key={item}>{item}</TagButton>
                  ))}
                </FilterTags>
              </Collapse>
            </Section>

            <Divider />

            {/* Other Filters */}
            {[
              { title: "Color", open: openColor, setOpen: setOpenColor },
              { title: "Fabric", open: openFabric, setOpen: setOpenFabric },
              { title: "Dial Shape", open: openDialShape, setOpen: setOpenDialShape },
              { title: "Size", open: openSize, setOpen: setOpenSize },
            ].map(({ title, open, setOpen }) => (
              <React.Fragment key={title}>
                <Section>
                  <SectionHeader onClick={() => setOpen(!open)}>
                    <Typography variant="subtitle1">{title}</Typography>
                    {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </SectionHeader>
                  <Collapse in={open}>
                    <Typography variant="body2" color="text.secondary" sx={{ px: 1, pb: 1 }}>
                      {/* Placeholder for inner content */}
                    </Typography>
                  </Collapse>
                </Section>
                <Divider />
              </React.Fragment>
            ))}
          </SidebarContainer>

        </Sidebar>

        {/* Product Grid */}
        <ProductGrid>
          {sortedProducts.map((product) => (
            <Link
              key={product.id}
              to={`product/${product.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ProductCard>
                <Image src={product.url} alt="product" />
                <Text fontWeight={600} color="#212121">
                  {product.title.shortTitle}
                </Text>
                <Text color="green">₹{product.price.cost}</Text>
                <Text fontSize="12px" color="gray">
                  {product.tagline}
                </Text>
                <Box mt={1} display="flex" justifyContent="center" gap={1} alignItems="center">
                  <Box
                    px={1}
                    py={0.2}
                    bgcolor="#008000"
                    borderRadius="4px"
                    fontSize="12px"
                    fontWeight="bold"
                    color="#FFFFFF"
                  >
                    {product.rating || "4.0"}
                  </Box>
                  <Typography fontSize="12px" color="gray">
                    {product.reviews ? `${product.reviews} Reviews` : "No Reviews"}
                  </Typography>


                </Box>
              </ProductCard>
            </Link>
          ))}
        </ProductGrid>
      </Container>
    </>
  );
};

export default ProductSection;
