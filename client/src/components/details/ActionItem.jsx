import { Box, Button,  styled } from "@mui/material";

import { ShoppingCart as Cart } from "@mui/icons-material";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useState } from "react";



const LeftContainer = styled(Box)(({ theme }) => ({
    width: "120%",

    padding: "40px 0 0 80px",
    marginRight: "20px",
    [theme.breakpoints.down("lg")]: {
        padding: "20px 40px"
    }
}));



const Image = styled("img")({
    width: "90%",
    height:"90%",
    paddingLeft: "20px"
});
const StyledButton = styled(Button)(({ theme }) => ({
    width: "48%",
    height: 50,
    borderRadius: 2,
    [theme.breakpoints.down("lg")]: {
        width: "46%"
    },
    [theme.breakpoints.down("sm")]: {
        width: "48%"
    }
}))

const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [quantity] = useState(1);
    const {id} = product;
    const addItemToCart = () => {
        dispatch(addToCart(id,quantity));
        navigate('/cart');
    }
      
    const buyNow = () => {
        dispatch(addToCart(id,quantity));
        navigate('/cart');
    }
    return (
       
        <LeftContainer>
            
                <Box style={{ padding: "15px 20px", border: "1px solid #f0f0f0" }}>
                    <Image src={product.detailUrl} alt="product" />
                    </Box>
                
                <Box>
                    <StyledButton variant="contained" onClick={() => addItemToCart()} style={{ marginTop:40,marginRight: 10, color: "#d3007f", background: "#FFFFFF", border: " 1px solid #d3007f" }}><Cart />Add to Cart</StyledButton>
                    <StyledButton variant="contained" onClick={() => buyNow()} style={{marginTop:40, background: "#d3007f" }}><KeyboardDoubleArrowRightIcon />Buy Now</StyledButton>
                </Box>
                
            
        </LeftContainer>





    )
}

export default ActionItem;