import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  ButtonGroup,
  useDisclosure,
  Input,
  Text,
  Heading,
} from "@chakra-ui/react";
import { MdBuild, MdHome } from "@chakra-ui/icons";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button className="slidebar_div" ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open Sliderbar
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent padding={1}>
          <DrawerCloseButton  />
          <Heading ml={8} as="h2" size="xl" noOfLines={1}>
            Logo
          </Heading>
          <Button
            mt={5}
            className="button"
            color="dark"
            colorScheme="teal"
            border="0"
            variant="outline"
          >
            <i className="fa-solid fa-house-chimney"></i>
            Call us
          </Button>
          <Button
            border="0"
            my={5}
            color="dark"
            colorScheme="teal"
            variant="outline"
          >
            <i className="fa-solid fa-arrow-trend-up "></i>
            Trending
          </Button>
          <Button border="0" colorScheme="teal" color="dark" variant="outline">
            <i className="fa-brands fa-wpexplorer"></i>
            Explore
          </Button>
          <Button
            border="0"
            my={5}
            colorScheme="teal"
            color="dark"
            variant="outline"
          >
            <i className="fa-solid fa-star"></i>
            Favorite
          </Button>
          <Button border="0" colorScheme="teal" color="dark" variant="outline">
            <i className="fa-solid fa-gear"></i>
            Settings
          </Button>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
