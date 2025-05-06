import {AppBar,Box,Toolbar,styled} from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from 'react-router-dom';

const StyledHeader = styled(AppBar)`
  background: #FFFFFF;
  height: 70px;
  box-shadow: none;
  border-bottom: 1px solid #e0e0e0; /* 👈 Add this line */
`;

const Component = styled(Box)`
    margin-left:30px;
`
const CustomButtonWrapper = styled(Box)`
  margin:0 5% 0 auto;
`;

const Navigation = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
`;
const Header = () =>{
    const logoURL = 'https://www.meesho.com/assets/svgicons/meeshoLogo.svg';
    return (
        <StyledHeader>
            <Toolbar>
                <Component>
                    <Navigation to="/">
                    <img src={logoURL} alt="logo" style={{width:160}}/>
                    </Navigation>
                   
                  
                </Component>   
                <Search/>
                <CustomButtonWrapper>
                    <CustomButtons/>
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}
export default Header;


