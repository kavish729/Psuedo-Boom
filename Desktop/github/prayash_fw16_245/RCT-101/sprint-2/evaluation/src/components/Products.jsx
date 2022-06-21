import React,{useState,useEffect} from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import { Flex, Spacer } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import axios from "axios";

const Products = () => {

  const [mainData,setMainData] = useState([])

  const getData = async () => {
    let res = await axios("http://localhost:8080/products?_page=1&_limit=3");
    setMainData(res.data)
  };
  useEffect(() => {
    getData()
  },[])
 


  return (
    <Flex>
      <AddProduct setMainData={setMainData} mainData={mainData} />
      <Grid>
        {
          mainData.map((item) => {
            return   <Product key={item.id} value={item}/> 
          })
        }
         </Grid>
        
      <Pagination/>
    </Flex>
  );
};

export default Products;
