import { Box, Grid, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleHomeData from "../components/SingleHomeData";
import { getData } from "../Redux/Appreducer/action";
const Home = () => {
  const data = useSelector((state) => state.app.books);
  const isLoading = useSelector((state) => state.app.isLoading)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

 if(isLoading){
   return (
    <Box textAlign={"center"} mt={"200px"}>
      <Spinner
  thickness='7px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
    </Box>
   )
 }

  return (
    <Box>

      <SimpleGrid
        width={"100%"}
        columns={[1,3,3]}
        spacing="10px"
      >
        {data.length>0 &&
          data.map((item) => {
            return <SingleHomeData item={item} key={item.id} />;
          })}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
