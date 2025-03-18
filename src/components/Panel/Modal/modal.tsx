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
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { API_KEY, BASE_URL } from '../../../constants/api/Api';
import { modallocalization, productslocalization } from '../../../constants/localization/Localization';
import { productTypes } from '../../../utils/productType';

const productStatuses = [
  { value: 'inStock', label: modallocalization['inStock'] },
  //{ value: "outOfStock", label: modallocalization["outOfStock"] },
  { value: 'comingSoon', label: modallocalization['comingSoon'] },
  { value: 'discontinue', label: modallocalization['discontinue'] },
];

export function InitialFocus({ fetchProducts }) {
  const [formData, setFormData] = useState({
    productName: '',
    productPrice: '',
    productStock: '',
    productType: '',
    productStatus: '',
    productImage: '',
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post(
        `${BASE_URL}/api/files/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            api_key: API_KEY,
            Authorization: `Bearer {eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDJlM2FiNzFiNTU0NTgwNmVkMWJlYyIsImlhdCI6MTc0MTg3NDEyNCwiZXhwIjoxNzQyMDQ2OTI0fQ.m8NyyLyGVYYni15jiCOuC86EAdIoZ03dlAvdqXC8hQk}`, // توکن معتبر جایگزین شود
          },
        }
      );

      return response.data?.downloadLink || null;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const imageUrl = await uploadImage(file);

    if (imageUrl) {
      setFormData(prev => ({ ...prev, productImage: imageUrl }));

    } else {
      toast.error('آپلود تصویر ناموفق بود');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.productImage) {
      toast.error('لطفاً تصویر محصول را آپلود کنید');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `${BASE_URL}/api/records/products`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            api_key: API_KEY,
            Authorization: `Bearer {eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDJlM2FiNzFiNTU0NTgwNmVkMWJlYyIsImlhdCI6MTc0MTg3NDEyNCwiZXhwIjoxNzQyMDQ2OTI0fQ.m8NyyLyGVYYni15jiCOuC86EAdIoZ03dlAvdqXC8hQk}`,
          },
        }
      );

      if (response.status === 201) {
        toast.success('محصول با موفقیت اضافه شد');
        fetchProducts();
        setFormData({
          productName: '',
          productPrice: '',
          productStock: '',
          productType: '',
          productStatus: '',
          productImage: '',
        });
        setFileName(null);
        onClose();
      } else {
        toast.error('مشکلی در ذخیره محصول به وجود آمد');
      }
    } catch (error) {
      toast.error('خطا در ارسال داده‌ها');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute top-20 left-[4rem] mt-6">
      <ToastContainer />
      <Button
        onClick={onOpen}
        colorScheme="blue"
        className="flex gap-2 items-center justify-center w-56"
      >
        <FaPlus />
        {productslocalization.addNewProduct}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader>{productslocalization.addNewProduct}</ModalHeader>
            <ModalCloseButton className="mt-2" />

            <ModalBody pb={6}>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  id="fileInp"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <FormLabel
                  htmlFor="fileInp"
                  className="bg-primary-200 p-2 cursor-pointer rounded-md m-auto"
                >
                  {productslocalization.fileINPLabel}
                </FormLabel>
                <p className="text-center">
                  {fileName || 'فایلی انتخاب نشده است'}
                </p>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>{productslocalization.productName}</FormLabel>
                <Input
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>{productslocalization.price}</FormLabel>
                <Input
                  type="text"
                  name="productPrice"
                  value={formData.productPrice}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>{productslocalization.stock}</FormLabel>
                <Input
                  type="number"
                  name="productStock"
                  value={formData.productStock}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>{productslocalization.type}</FormLabel>
                <Select
                  name="productType"
                  value={formData.productType}
                  onChange={handleChange}
                >
                  {productTypes.map(type => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>{productslocalization.status}</FormLabel>
                <Select
                  name="productStatus"
                  value={formData.productStatus}
                  onChange={handleChange}
                >
                  {productStatuses.map(status => (
                    <option key={status.value} value={status.value}>
                      {status.label}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              {loading && <p>در حال ارسال...</p>}
              <Button
                colorScheme="blue"
                mr={3}
                type="submit"
                isLoading={loading}
              >
                {modallocalization.save}
              </Button>
              <Button onClick={onClose}>{modallocalization.cancel}</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </div>
  );
}
