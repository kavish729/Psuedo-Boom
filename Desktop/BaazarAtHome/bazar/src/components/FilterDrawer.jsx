import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Select,
  } from '@chakra-ui/react'
const FilterDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')
  return (
    <>
   
  <button className='filter-btn' onClick={onOpen}>
    Filter By Category and Price
  </button>
  <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerHeader borderBottomWidth='1px'>Filter</DrawerHeader>
      <DrawerBody>
        <Select>
            <option value="jacket">Jacket</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </Select>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
  </>
  )
}

export default FilterDrawer