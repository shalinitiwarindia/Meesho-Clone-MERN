import { Box, styled, Typography, Button, Chip } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


const Container = styled(Box)`
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 16px;
  width: 75%;
  margin-left: 170px; 
`;

// Styled price text
const Price = styled(Typography)`
  font-size: 28px;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

// Rating Button
const RatingButton = styled(Button)`
  background-color: #388e3c;
  color: #fff;
  font-size: 12px;
  padding: 2px 6px;
  min-width: auto;
  line-height: 1;
  margin-right: 8px;

  &:hover {
    background-color: #2e7d32;
  }
`;
const SizeContainer = styled(Box)`
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 16px;
  width: 75%;
  margin-left: 170px; 
  margin-top:10px;
`;
const SizeButton = styled(Button)`
  border: 1px solid #c4c4c4;
  color: #333;
  border-radius: 20px;
  min-width: 48px;
  height: 32px;
  margin: 5px 6px 0 0;
  font-size: 14px;
  text-transform: none;
  font-weight: 500;
`;
const Product = styled(Box)`
   border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 16px;
  width: 75%;
  margin-left: 170px; 
  margin-top:10px;
`;
const ProductDetail = ({ product }) => {
    const sizes = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4XL', '5XL'];
    return (
        <Box>
            <Container>
                {/* Title */}
                <Typography
                    variant="h6"
                    sx={{ color: "#4a4a4a", fontWeight: 400, marginBottom: 2 }}
                >
                    {product.title.longTitle}
                </Typography>

                {/* Price */}
                <Price>
                    ₹{product.price.cost}
                    <InfoOutlinedIcon sx={{ fontSize: 18, color: "#878787", ml: 1 }} />
                </Price>

                {/* Ratings & Delivery */}
                <Box>
                    {/* Rating Row */}
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        <RatingButton variant="contained" size="small" disableElevation>
                            {product.rating} <StarIcon sx={{ fontSize: 14, ml: 0.5 }} />
                        </RatingButton>

                        <Typography
                            variant="body2"
                            sx={{ color: "#757575", fontWeight: 400 }}
                        >
                            24351 Ratings, {product.reviews} Reviews
                        </Typography>
                    </Box>

                    {/* Free Delivery below rating */}
                    <Chip
                        label="Free Delivery"
                        sx={{
                            backgroundColor: "#f0f7ff",
                            color: "#1565c0",
                            fontWeight: 500,
                            fontSize: "12px"
                        }}
                        size="small"
                    />
                </Box>
            </Container>
            <SizeContainer>
                {/* Size Selection */}
                <Box>
                    <Typography
                        variant="subtitle1"
                        sx={{ color: "#333", fontWeight: 600, marginBottom: 1 }}
                    >
                        Select Size
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                        {sizes.map((size) => (
                            <SizeButton key={size}>{size}</SizeButton>
                        ))}
                    </Box>
                </Box>
            </SizeContainer>

            <Product>
                <Typography variant="subtitle1"
                    sx={{ color: "#333", fontWeight: 900, marginBottom: 1 }}>Product Details</Typography>
                <Typography
                    variant="body1"
                    sx={{ color: "#757575", fontWeight: 500 }}
                >
                    Name:{product.title.longTitle}<br/>
                    Sizes :<br/>

                    S (Bust Size : 36 in, Size Length: 46 in)

                    M (Bust Size : 38 in, Size Length: 46 in)

                    L (Bust Size : 40 in, Size Length: 46 in)

                    XL (Bust Size : 42 in, Size Length: 46 in)

                    XXL (Bust Size : 44 in, Size Length: 46 in)

                    XXXL (Bust Size : 46 in, Size Length: 52 in)<br/>
                    Description:<br/>
                    {product.description}<br/>
                    Country of Origin : India


                </Typography>

            </Product>
        </Box>


    );
};

export default ProductDetail;
