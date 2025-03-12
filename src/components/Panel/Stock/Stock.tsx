import axios from 'axios';
import { useEffect, useState } from 'react';
import { Iproduct } from '../../../interfaces/interfaces';
import {
  asidebarlocalization,
  modallocalization,
  Orderlocalization,
  productslocalization,
} from '../../../constants/localization/Localization';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import Input from '../../shared/input/Input';

export default function Stock({ searchQuery }: { searchQuery: string }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [filteredStock, setFilteredStock] = useState<Iproduct[]>([]);
  const [noResult, setNoResults] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Iproduct | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  async function getStock() {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://676d5e440e299dd2ddff55b6.mockapi.io/shop'
      );
      setProducts(response.data);
      setFilteredStock(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getStock();
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredStock(products);
      setNoResults(false);
      return;
    }

    const filtered = products.filter(
      product =>
        product.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        String(product.productStock).includes(searchQuery)
    );

    setFilteredStock(filtered);
    setNoResults(filtered.length === 0);
  }, [searchQuery, products]);

  const handleOpenEdit = (product: Iproduct) => {
    setSelectedProduct(product);
    setIsEditOpen(true);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedProduct) {
      setSelectedProduct({ ...selectedProduct, productStock: e.target.value });
    }
  };

  const handleEditSubmit = async () => {
    if (!selectedProduct) return;

    setLoading(true);
    try {
      await axios.put(
        `https://676d5e440e299dd2ddff55b6.mockapi.io/shop/${selectedProduct.id}`,
        {
          productStock: selectedProduct.productStock,
        }
      );

      setProducts(prevProducts =>
        prevProducts.map(p =>
          p.id === selectedProduct.id
            ? { ...p, productStock: selectedProduct.productStock }
            : p
        )
      );

      setFilteredStock(prevStock =>
        prevStock.map(p =>
          p.id === selectedProduct.id
            ? { ...p, productStock: selectedProduct.productStock }
            : p
        )
      );

      setIsEditOpen(false);
    } catch (error) {
      console.error('Error updating product stock:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-16 mt-12 text-right font-vazir">
      <p className="font-semibold text-xl">{asidebarlocalization['stock']}</p>

      {loading ? (
        <div className="flex justify-center items-center mt-4">
          <div className="ml-2 border-t-4 border-primary-200 w-8 h-8 border-dotted rounded-full animate-spin"></div>
        </div>
      ) : filteredStock.length > 0 ? (
        <div className="overflow-y-auto max-h-[24rem] mt-4 flex flex-row-reverse">
          <table className="min-w-fit bg-white text-center shadow-md rounded-lg border-collapse">
            <thead className="bg-gray-300">
              <tr>
                <th className="py-3 text-sm font-semibold text-center">
                  {productslocalization['stock']}
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-center">
                  {productslocalization['productName']}
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-center">
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredStock.map(product => (
                <tr
                  key={product.id}
                  className="border-b font-number hover:bg-gray-100"
                >
                  <td className="py-3 px-4 text-center">
                    {product.productStock}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {product.productName}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Button
                      colorScheme="blue"
                      onClick={() => handleOpenEdit(product)}
                    >
                      {productslocalization['edit']}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : noResult ? (
        <p className="py-10 text-red-500 text-center">
          {Orderlocalization['noResult']}
        </p>
      ) : null}

      <Modal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{productslocalization['edit']}</ModalHeader>
          <ModalBody>
            <Input
              className="p-2 rounded-md mb-3"
              name="productStock"
              value={selectedProduct?.productStock || ''}
              onChange={handleEditChange}
              label={productslocalization['stock']}
              type="number"
            />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleEditSubmit}
              isLoading={loading}
            >
              {modallocalization['saveChanges']}
            </Button>
            <Button onClick={() => setIsEditOpen(false)}>
              {modallocalization['cancel']}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
