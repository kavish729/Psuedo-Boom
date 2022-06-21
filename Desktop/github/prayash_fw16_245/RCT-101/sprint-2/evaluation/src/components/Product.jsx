import React from "react";
import { Stack, HStack, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from '@chakra-ui/react';
const Product = ({value}) => {



  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" src={value.imageSrc}  />
      <Text data-cy="product-category">
        {value.category}
      </Text>
      <Tag>
        <TagLabel data-cy="product-gender">
      {value.gender}

        </TagLabel>
      </Tag>
      <Heading data-cy="product-title">
      {value.title}

      </Heading>
      <Box data-cy="product-price">
      {value.price}

      </Box>
    </Stack>
  );
};

export default Product;
