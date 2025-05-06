import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productAction";
import { Link } from "react-router-dom";
const SearchContainer = styled(Box)`
  width: 150%;
  height:40px;
  border-radius: 5px;
  margin-left: 40px;
  display: flex;
  border: 1px solid #4f4f4f; 
  position: relative;       
`;

const InputSearchBase = styled(InputBase)`
 
  width: 100%;
  font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
  color: #808080;
  padding: 5px;
  display: flex;
  font-size:100px;
`;

const ListWrapper = styled(List)`
   position: absolute;
   background:#FFFFFF;
   color:#000;
   margin-top:36px;
`;

const Search = () => {
  const [text, setText] = useState('');

   const { products } = useSelector(state => state.getProducts);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getProducts())
   }, [dispatch])
   const getText = (text) => {
      setText(text);
   }
  return (
    <SearchContainer>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <InputSearchBase
        placeholder="Try Saree, Kurti or Search by Product Code"
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      {
        text &&
        <ListWrapper>
          {
            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
              <ListItem>
                <Link
                  to={`/product/${product.id}`}
                  onClick={() => setText('')}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))
          }
        </ListWrapper>
      }
    </SearchContainer>
  )
}

export default Search;