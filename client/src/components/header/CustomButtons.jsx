


import { Badge,Box,  Typography } from "@mui/material";
import { styled } from "@mui/material/styles"; // ✅ Corrected styled import
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import LoginDialog from "../login/LoginDialog";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Styled Components
const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 60px;
  color: #1c1c1c;
  width: 100%;
`;
const Container = styled(Link)(({theme})=>({
  display: 'flex',
  textDecoration:'none',
  color:'inherit',
  [theme.breakpoints.down('md')]: {
      display:'block'
  }
}));
const LeftSection = styled(Box)`
  display: flex;
  align-items: center;
  

  & > div {
    display: flex;
    width:30%;
    align-items: center;
    margin-right: 25px;
    padding-right: 20px;
    font-size: 12px;
    font-weight: 400;
    border-right: 1px solid #ccc;
    cursor: pointer;
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    margin-right: 25px;
    padding-right: 20px;
    font-size: 14px;
    font-weight: 400;
    border-right: 1px solid #ccc;
    cursor: pointer;
  }

  svg {
    margin-right: 6px;
  }
`;

const RightSection = styled(Box)`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-right:10px;
  
`;

const IconTextBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: 100;

  svg {
    font-size: 23px;
    margin-bottom: 4px;
  }
`;



// Component
const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const {account,setAccount} = useContext(DataContext);

  const {cartItems} = useSelector(state => state.cart);
  const openDialog = () => {
      setOpen(true);
  }

 
  return (
    <Wrapper>
      {/* Left Side */}
      <LeftSection>

        <Box>
          <Typography>Become a Supplier</Typography>
        </Box>
        <Box>
          <Typography>Investor Relations</Typography>
        </Box>
      </LeftSection>

      {/* Right Side */}
      <RightSection>
        <IconTextBox style={{ marginTop: 15, }}>
          {account ? (
            <Profile account={account} setAccount={setAccount} />
          ) : (

            <Box
              onClick={openDialog}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                color: "black", // default
                marginBottom:"20px",
                
                "&:hover": {
                  color: "#d3007f", // hover effect on both icon & text
                },
              }}
            >
              <AccountCircleOutlinedIcon sx={{ fontSize: 30 }} />
              <Typography sx={{ fontSize: 14, fontWeight: 500, mt: "4px" }}>
                Profile
              </Typography>
            </Box>

          )}
        </IconTextBox>

        {/* Cart Icon and Link */}
        <Container to='/cart'>
        <Badge badgeContent={cartItems?.length} color="secondary">
          <ShoppingCartOutlinedIcon />
          </Badge>
          <Typography style={{marginLeft:10}}>Cart</Typography>
        </Container>


      </RightSection>

      {/* Login Dialog */}
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
