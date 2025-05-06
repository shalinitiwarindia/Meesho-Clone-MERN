

import { Box, Typography,  Grid, styled } from '@mui/material';


import { useSelector} from 'react-redux';


import TotalView from './TotalView';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';


const Container = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        padding: '15px 0'
    }
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down('md')]: {
        marginBottom: 15
    }
}));

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`;





const Cart = () => {
    const { cartItems } = useSelector(state => state.cart);

   
    return (
        <>
            {
                cartItems.length ?
                    <Container container>
                       <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                        <Header>
                            <Typography>My Cart({cartItems.length})</Typography>
                        </Header>
                        {
                            cartItems.map(item => (
                                <CartItem item={item}/>
                            ))
                        }
                       
                        </LeftComponent> 
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                                <TotalView cartItems={cartItems}/>
                        </Grid>

                    </Container>
                 :<EmptyCart/>
            }
        </>
    )
}
export default Cart;