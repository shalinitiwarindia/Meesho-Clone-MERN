import { Fragment, useEffect } from "react";

import NavBar from "./NavBar";
import {Box,  styled } from "@mui/material";
import { getProducts } from "../../redux/actions/productAction";
import {useDispatch, useSelector} from "react-redux";

import MidSection from "./MidSection";
import Banner from "./Banner";
import Mid from "./Mid";
import MidSlide from "./MidSlide";

import OriginalBrands from "./OriginalBrands";
import Slide from "./Slide";
import TrendzSection from "./TrendzSection";

import ProductSection from "./ProductSection";







const Component = styled(Box)`
  padding: 10px;
  background: #F2F2F2
`;
const Home = () => {
  const {products} = useSelector(state => state.getProducts)
  console.log(products);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getProducts()) 
  },[dispatch])
    return (
        <Fragment>
             <NavBar />
             <Component>
               
                
                <MidSection />
                <Banner/>
              
                <Mid/>
                <MidSlide/>
                <OriginalBrands/>
                <Slide />
               <TrendzSection/>
           
            <ProductSection products={products} />
             </Component>
             
        </Fragment>
       
    )
}

export default Home;