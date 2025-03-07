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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import { IpostProducts, postProducts } from '../Sevices/Products/postProducts';
import { Iproduct } from '../../interfaces/interfaces';
import Loading from '../Loading/Loading';
import { modallocalization, productslocalization } from '../../constants/localization/Localization';

const productTypes = [
  'apple',
  'xiaomi',
  'samsung',
  'huawei',
  'nokia',
  'microsoft',
  'nothingPhone',
  'google',
];

const productStatuses = [
  { value: 'inStock', label: modallocalization['inStock'] },
  { value: 'outOfStock', label: modallocalization['outOfStock'] },
  { value: 'comingSoon', label: modallocalization['comingSoon'] },
  { value: 'discontinue', label: modallocalization['discontinue'] },
];

export default function InitialFocus({
  setProducts,
  fetchProducts, //rerender products list after add products
}: {
  setProducts: (products: Iproduct[]) => void;
  fetchProducts: () => void; 
}) {
  const initialFormData: Iproduct = {
    productName: '',
    productPrice: '',
    productStock: '',
    productType: '',
    productStatus: '',
  };

  const [formData, setFormData] = useState<Iproduct>(initialFormData);
  const [loading, setLoading] = useState<boolean>(false);

  
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ارسال محصول به سرور
  const handleAddProducts = async (formData: IpostProducts) => {
    setLoading(true);
    try {
      const response = await postProducts(formData);
      if (response?.status === 201) {
        toast.success('افزودن محصول موفقیت‌آمیز بود');
        onClose();
        setFormData(initialFormData);
        // پس از افزودن محصول، محصولات جدید را از سرور بارگذاری می‌کنیم
        fetchProducts();
      } else {
        toast.error('خطا در ارسال اطلاعات');
      }
    } catch (error) {
      toast.error('افزودن محصول جدید موفقیت‌آمیز نبود');
      console.error('خطا در ارسال درخواست:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // اعتبارسنجی ساده فرم
    if (
      !formData.productName ||
      !formData.productPrice ||
      !formData.productStock ||
      !formData.productType ||
      !formData.productStatus
    ) {
      toast.error('تمامی فیلدها باید پر شوند');
      return;
    }
    handleAddProducts(formData);
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    onClose();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <div className="absolute top-20 right-[4.3rem] ">
      <ToastContainer />
      <Button onClick={onOpen} colorScheme="blue" size="lg">
        <FaPlus />
        {productslocalization['addNewProduct']}
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader>{productslocalization['addNewProduct']}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>{productslocalization['productName']}</FormLabel>
                <Input
                  type="text"
                  name="productName"
                  placeholder={productslocalization['productName']}
                  value={formData.productName}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>{productslocalization['price']}</FormLabel>
                <Input
                  placeholder={productslocalization['price']}
                  type="number"
                  name="productPrice"
                  value={formData.productPrice}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>{productslocalization['stock']}</FormLabel>
                <Input
                  placeholder={productslocalization['stock']}
                  type="number"
                  name="productStock"
                  value={formData.productStock}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>{productslocalization['type']}</FormLabel>
                <Select
                  placeholder={productslocalization['type']}
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
                <FormLabel>{productslocalization['status']}</FormLabel>
                <Select
                  name="productStatus"
                  value={formData.productStatus}
                  onChange={handleChange}
                >
                  <option hidden selected>{productslocalization["status"]}</option>
                  {productStatuses.map(status => (
                    <option key={status.value} value={status.value}>
                      {status.label}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              {loading && <Loading />}
              <Button
                colorScheme="blue"
                mr={3}
                type="submit"
                isLoading={loading}
              >
                {modallocalization['save']}
              </Button>
              <Button onClick={handleCancel}>
                {modallocalization['cancel']}
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </div>
  );
}
