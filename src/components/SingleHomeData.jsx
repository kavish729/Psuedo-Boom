import React, { useRef, useState } from "react";
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Text,
  Heading,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartdata } from "../Redux/Appreducer/action";

const data = {
  isNew: true,
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

function Rating({ rating, numReviews }) {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

const SingleHomeData = ({ item }) => {
  const dispatch = useDispatch();

  const handleadd = (item) => {
    dispatch(cartdata(item));
  };
  // console.log(cartitem);

  const [disTime, setDisTime] = useState(item.time);
  const timerRef = useRef(null);
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDisTime((prev) => prev - 10);
    }, 10);
  }, []);


  // Cart functionality

  const handleCart = (item) => {
      
  }




  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={"#ffffff"}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
        transition={"1.5s"}
        _hover={{
          bg: "#ede8e8",
          transform: "scale(0.97)",
          boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
        }}
      >
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image
          src={item.cover_photo}
          width="450px"
          height={"350px"}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {item.book_name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >

              <Box display={"flex"}>
                <Icon
                  onClick={() => handleadd(item)}
                  as={FiShoppingCart}
                  h={7}
                  w={7}
                  alignSelf={"center"}
                />
              </Box>

            </Tooltip>
          </Flex>

          <Box
            display={"flex"}
            justifyContent={disTime > 0 ? "space-between" : "center"}
            alignItems="center"
            flexDirection={disTime > 0 ? "row" : "columns"}
          >
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box
                textDecoration={disTime > 0 ? "line-through" : "none"}
                as="span"
                color={"gray.600"}
                fontSize={disTime > 0 ? "20px" : "23px"}
                fontWeight={disTime > 0 ? "500" : "700"}
              >
                ₹ {item.mrp}
              </Box>
            </Box>
            {disTime > 0 && (
              <Box fontSize="2xl" color={"black"}>
                <Box
                  as="span"
                  fontSize={"22px"}
                  fontWeight={"600"}
                  color={"gray.600"}
                >
                  In offer &nbsp; ₹{item.price}
                </Box>{" "}
              </Box>
            )}
          </Box>

          {disTime > 0 ? (
            <Box display={"grid"} align={"center"}>
              <Text fontSize={"20px"} color="#f10bc3" fontWeight={"800"}>
                Offer ends in
              </Text>
              <Flex
                borderRadius={"5px"}
                bg={"#096fdb"}
                color={"white"}
                px={"10px"}
                py={"5px"}
                justify={"space-between"}
                align={"center"}
              >
                <Text fontWeight={"800"}>
                  {("0" + Math.floor((disTime / 600000) % 60)).slice(-2)}
                </Text>
                <Text fontWeight={"800"}>hour</Text>
                &nbsp; <p>:</p> &nbsp; &nbsp;
                <Text fontWeight={"800"}>
                  {("0" + Math.floor((disTime / 60000) % 60)).slice(-2)}
                </Text>
                <Text fontWeight={"800"}>minute</Text>
                &nbsp; <Text fontWeight={"800"}>:</Text> &nbsp; &nbsp;
                <Text fontWeight={"800"}>
                  {("0" + Math.floor((disTime / 1000) % 60)).slice(-2)}{" "}
                </Text>
                <Text fontWeight={"800"}>sec</Text>
              </Flex>
            </Box>
          ) : (
            <Text
              color={"#d21919"}
              textAlign={"center"}
              fontWeight={"700"}
              fontSize={"22px"}
            >
              Offer ended
            </Text>
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default SingleHomeData;
