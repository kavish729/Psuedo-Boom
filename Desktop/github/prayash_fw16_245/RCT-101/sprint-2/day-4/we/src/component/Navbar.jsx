import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Text
} from "@chakra-ui/react";
const Navbar = () => {
  return (
    <>
      <Flex>
        <Box p="4" bg="">
          Logo
        </Box>
        <Menu>
          <MenuButton>
           Inspiration
          </MenuButton>
          <MenuList>
            <MenuItem>
            Explore Design Wrok
           Trending Design to inspire you
            </MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
        <Spacer />
        <Box p="4" bg="green.400">
          Box 2
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
