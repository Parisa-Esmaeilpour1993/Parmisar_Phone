import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { FaPlus } from "react-icons/fa";

export function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);


    const addProductHandler = async (e) => {
      e.preventDefault();
      const form = e.target
        try {
          const response = await axios.post(
            "https://676d5e440e299dd2ddff55b6.mockapi.io/shop",
            {
              product: form.productName.value,
              price: form.price.value,
              stock: form.stock.value,
              type: form.type.value,
              status: form.status.value,
            }
          );
        } catch (error) {
            console.log(error.message)
        }
    };

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue" size="lg">
        {" "}
        <FaPlus /> Add New Product
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={addProductHandler}>
            <ModalHeader>Add New Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Product Name</FormLabel>
                <Input name="productName" placeholder="Product Name" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Price</FormLabel>
                <Input placeholder="Price" type="number" name="price" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Stock</FormLabel>
                <Input placeholder="Stock" type="number" name="stock" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Brand</FormLabel>
                <Select placeholder="Select Brand" name="type">
                  <option value="apple">Apple</option>
                  <option value="xiaomi">Xiaomi</option>
                  <option value="samsung">Samsung</option>
                  <option value="huawei">Huawei</option>
                  <option value="nokia">Nokia</option>
                  <option value="microsoft">Microsoft</option>
                  <option value="nothingPhone">NothingPhone</option>
                  <option value="google">Google</option>
                </Select>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Status</FormLabel>
                <Select placeholder="Select Status" name="status">
                  <option value="inStock">In Stock</option>
                  <option value="outofStock">Out of Stock</option>
                  <option value="comingSoon">ComingSoon</option>
                  <option value="onsale">On sale</option>
                  <option value="discontinue">Discontinue</option>
                </Select>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
