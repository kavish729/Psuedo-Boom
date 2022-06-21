import React,{useState} from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { useRadioGroup, Radio } from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";






const AddProduct = ({mainData,setMainData}) => {
  // TODO: Remove below const and instead import them from chakra;

  const [data,setData] = useState({
    title:"",
    price: "",
    cat : "",

  })


  const postData = async (value) => {
    try {
      let res = await fetch("http://localhost:8080/products", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(value),
      });
      let data = await res.json();
      console.log(data)
      setMainData([...mainData, data]);
    } catch (e) {
      console.log(e);
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleChange = (e) => {
    let {type,name,radio,value} = e.target;
      setData({ ...data, [name]: value });
  }

  const handleSubmit = (e) => {
    console.log("asdfadsf")
    e.preventDefault();
    postData(data)
    setData({
      title:"",
      price: "",
      cat : "",  
    })
    
  } 

  return (
    <>
      <Button my={4} onClick={onOpen} data-cy="add-product-button">Add New Product</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
      <ModalBody onSubmit={handleSubmit} pb={6}>
        <Input type="text" name="title" value={data.title} onChange={handleChange} data-cy="add-product-title" placeholder="Add products here..." />
        <Select onChange={handleChange}   data-cy="add-product-category">
          <option value="shirt" data-cy="add-product-category-shirt">shirt</option>
          <option value="pent" data-cy="add-product-category-pant">pent</option>
          <option value="jeans" data-cy="add-product-category-jeans">jeans</option>
        </Select>
        <useRadioGroup onChange={handleChange} data-cy="add-product-gender">
          <Radio type="radio" value="male"  data-cy="add-product-gender-male">Male</Radio>
          <Radio type="radio" value="female"  data-cy="add-product-gender-female">Female</Radio>
          <Radio type="radio" value="unisex"  data-cy="add-product-gender-unisex">Unisex </Radio>
        </useRadioGroup>
        <Input type="number" name="price" onChange={handleChange} data-cy="add-product-price" placeholder="Price..." />
        <Button onClick={handleSubmit}  data-cy="add-product-submit-button">Create</Button>
      </ModalBody>
    </Modal>
     
  
     
     
    </>
  );
};

export default AddProduct;
