import React, { useRef, useState } from 'react'
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
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
  import { useEffect } from 'react';


  const data = {
    isNew: true,
    name: 'Wayfarer Classic',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  };
  

function Rating({ rating, numReviews }) {
    return (
      <Box d="flex" alignItems="center">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && 's'}
        </Box>
      </Box>
    );
  }
  


const SingleHomeData = ({item}) => {
 const [disTime,setDisTime] = useState(50000000)
  const timerRef = useRef(null);
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDisTime((prev) => prev - 30);
    }, 20);
  },[])




  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative">
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
        width="100%"
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
            isTruncated>
            {item.book_name}
          </Box>
          <Tooltip
            label="Add to cart"
            bg="white"
            placement={'top'}
            color={'gray.800'}
            fontSize={'1.2em'}>
            <chakra.a href={'#'} display={'flex'}>
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
            </chakra.a>
          </Tooltip>
        </Flex>

        <Box display="flex"  justifyContent="space-between" alignContent="center">
            {/* <Box display="flex"  justifyContent="space-between" alignContent="center">
          <Rating rating={data.rating} numReviews={data.numReviews} />
          </Box> */}
          <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
            <Box textDecoration={"line-through"} as="span" color={'gray.600'} fontSize="lg">
              ₹      {item.mrp}
            </Box> 
       
          </Box>
      
          <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
            <Box as="span" fontWeight={"600"} color={'gray.600'} fontSize="md">
             In offer 
            </Box>   &nbsp;
            ₹
            {item.price}
          </Box>
      

        </Box>
        <Box display={"grid"} align={"center"}>
          <Text fontSize={"20px"} color="red.400" fontWeight={"800"}>Offer ends in</Text>
        <Flex borderRadius={"5px"} bg={"#096fdb"} color={"white"} px={"10px"} py={"5px"} justify={"space-between"} align={"center"}> 
          <Text fontWeight={"800"}>{("0" + Math.floor((disTime / 600000) % 60)).slice(-2)}</Text>{" "}
          <Text fontWeight={"800"}>hour</Text>
          &nbsp; <p>:</p> &nbsp; &nbsp;
          <Text fontWeight={"800"}>{("0" + Math.floor((disTime / 60000) % 60)).slice(-2)}</Text>
          <Text fontWeight={"800"}>minute</Text>
          &nbsp; <Text fontWeight={"800"}>:</Text> &nbsp; &nbsp;
          <Text fontWeight={"800"}>{("0" + Math.floor((disTime / 1000) % 60)).slice(-2)} </Text>
          <Text fontWeight={"800"}>sec</Text>
        </Flex>
        </Box>
      </Box>
    </Box>
  </Flex>
  )
}

export default SingleHomeData