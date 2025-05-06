import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';


const Container = styled(Box)`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

const Image = styled('img')({
  width: '200px',
  marginBottom: '20px',
});

const Message = styled(Typography)`
  font-size: 22px;
  color: #212121;
  margin-bottom: 10px;
  font-weight: 500;
`;

const SubText = styled(Typography)`
  color: #878787;
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  background: #9c27b0;
  color: #fff;
  padding: 10px 30px;
  font-weight: 600;
  &:hover {
    background: #7b1fa2;
  }
`;

const EmptyCart = () => {
  return (
    <Container>
      <Image src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSQNaa5jZQuZfih0msNBLg1wlhW8zRekGj9BWjWc59hLN-HfTo8" alt="empty-cart" />
      <Message>Your cart is empty</Message>
      <SubText>
        Just relax, let us help you find some first-class products
      </SubText>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <StyledButton>Start Shopping</StyledButton>
      </Link>
    </Container>
  );
};

export default EmptyCart;
