import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postCartData } from "../redux/app/action";

const MapData = ({ item }) => {
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    const payload = {
      title: item.title,
      image: item.image,
      rating: item.rating,
      price: item.price,
      category: item.category,
      qty: 1,
    };
    if (!isAdded) {
      dispatch(postCartData(payload));
      alert("Item added to the cart😍");
      setIsAdded(true);
    } else {
      alert("Already Added your item ☺️");
    }
  };

  return (
    <Flex
      m="auto"
      direction={"column"}
      width={{ base: "320px", md: "320px", lg: "320px" }}
    >
      <Image width="100%" src={item.image} height="300px" />
      <Box p="5px">
        <Flex mt="5px" justify={"space-between"}>
          <Text fontSize={"20px"} fontWeight="600">
            {item.title}
          </Text>
          <Text bg="red" borderRadius={"15px"} color="white" p="2px 10px">
            {item.category}
          </Text>
        </Flex>
        <Flex mt="3px" justify={"space-between"}>
          <Flex gap={"8px"}>
            <Text color={"grey"} textDecoration={"line-through"}>
              MRP: ₹{item.price + (item.price / 100) * 15}{" "}
            </Text>
            <Text fontWeight={"700"}>Selling Price: ₹{item.price} </Text>
          </Flex>
        </Flex>
        <Flex m="17px auto" align={"center"} justify="center">
          <button onClick={() => handleAddToCart(item)} className="cart-btn">
            Add To Cart
          </button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default MapData;
