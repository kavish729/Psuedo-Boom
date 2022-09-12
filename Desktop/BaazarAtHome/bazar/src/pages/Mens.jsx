import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import  { useEffect } from "react";
import FilterDrawer from "../components/FilterDrawer";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./../redux/app/action";
import MapData from "../components/MapData";
const Mens = () => {
  const data = useSelector((state) => state.app.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <Box m={"100px auto"} width={{ base: "100%", md: "97%", lg: "90%" }}>
      <FilterDrawer />
      <SimpleGrid
        mt={"15px"}
        columns={{ base: 1, md: 2, lg: 4 }}
        m="15px auto"
      >
        {
          data.length && data.map((item) => {
            return <MapData key={item.id} item={item} />
          })
        }
      </SimpleGrid>
    </Box>
  );
};

export default Mens;
