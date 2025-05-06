import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, styled,Card, CardContent, } from '@mui/material';

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    borderBottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: #878787;
`;

const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
    & > h6 {
        margin-bottom: 20px;
    }
`;

const Price = styled(Typography)`
    float: right;
`;

const TotalAmount = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    border-top: 1px dashed #e0e0e0;
    padding: 20px 0;
    border-bottom: 1px dashed #e0e0e0;
`;

const Discount = styled(Typography)`
    font-size: 16px;
    color: green;
`;

const TotalView = ({ cartItems }) => {
    const [price, setPrice] = useState(0);  // Add useState hook
    const [discount, setDiscount] = useState(0);  // Add useState hook

    useEffect(() => {
        let totalPrice = 0, totalDiscount = 0;
        cartItems.forEach(item => {
            totalPrice += item.price.mrp;
            totalDiscount += (item.price.mrp - item.price.cost);
        });
        setPrice(totalPrice);
        setDiscount(totalDiscount);
    }, [cartItems]);  // Add useEffect hook

    return (
        <Box>
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                <Typography>Price ({cartItems?.length} item)
                    <Price component="span">₹{price}</Price>
                </Typography>
                <Typography>Discount
                    <Price component="span">-₹{discount}</Price>
                </Typography>
                <Typography>Delivery Charges
                    <Price component="span">₹40</Price>
                </Typography>
                <TotalAmount>Total Amount
                    <Price>₹{price - discount + 40}</Price>
                </TotalAmount>
                <Discount>You will save ₹{discount - 40} on this order</Discount>
    
                <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2, backgroundColor: '#9c27b0' }}
                >
                    Continue
                </Button>
                {/* Safety Card */}
                <Card sx={{ mt: 2, borderRadius: 2 }}>
                    <CardContent>
                        <Box display="flex" alignItems="center" gap={2}>
                            <img
                                src="https://images.meesho.com/images/marketing/1588578650850.webp"
                                alt="Meesho Safe"
                                width={200}
                            />
                
                        </Box>
                    </CardContent>
                </Card>
            </Container>

        </Box>
    );
};

export default TotalView;
