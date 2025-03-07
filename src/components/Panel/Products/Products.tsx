import { useEffect, useState } from 'react';
import {
  asidebarlocalization,
  modallocalization,
  productslocalization,
} from '../../../constants/localization/Localization';
import { Iproduct } from '../../../interfaces/interfaces';
import Swal from 'sweetalert2';
import { deleteProduct } from '../../Sevices/Products/deleteProducts';
import { updateItem } from '../../Sevices/Products/editProducts';
import { Modal } from '@chakra-ui/react';
import Input from '../../shared/input/Input';
import Button from '../../shared/button/Button';
import axios from 'axios';

export default function Products({ formData }: { formData: Iproduct[] }) {
  const [products, setProducts] = useState<Iproduct[]>(formData || []);
  const [selectedProduct, setSelectedProduct] = useState<Iproduct | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (products?: Iproduct[]) => {
     try {
       const response = await axios.get(
         'https://676d5e440e299dd2ddff55b6.mockapi.io/shop'
       );
       setProducts(response.data);
     } catch (error) {
       console.error('خطا در دریافت محصولات:', error);
     }
   };
 
   useEffect(() => {
     if (!formData || formData.length === 0) {
       fetchProducts();
     } else {
       setProducts(formData);
     }
   }, [formData]);


  const handleDelete = async (id: string) => {
    try {
      const result = await Swal.fire({
        title: 'آیا مطمئن هستید؟',
        text: 'این محصول برای همیشه حذف خواهد شد!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'بله، حذف شود!',
        cancelButtonText: 'لغو',
      });

      if (result.isConfirmed) {
        const success = await deleteProduct(id);
        if (success) {
          setProducts(prev => prev.filter(p => p.id !== id));
          Swal.fire('حذف شد!', 'محصول با موفقیت حذف شد.', 'success');
        } else {
          throw new Error('مشکلی پیش آمد. دوباره امتحان کنید.');
        }
      }
    } catch (error) {
      console.error('خطا در حذف محصول:', error);
      Swal.fire('خطا!', 'مشکلی پیش آمد. دوباره امتحان کنید.', 'error');
    }
  };



  const handleEditClick = (product: Iproduct) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleEditChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setSelectedProduct(prev => (prev ? { ...prev, [name]: value } : null));
  };

 
const handleEditSubmit = async () => {
  if (!selectedProduct || !selectedProduct.id) return;
  try {
    setLoading(true);
    const updatedData = await updateItem(selectedProduct.id, selectedProduct);
    if (updatedData) {
      setProducts(prev =>
        prev.map(p => (p.id === selectedProduct.id ? updatedData : p))
      );
      setIsEditModalOpen(false);
      setSelectedProduct(null); // پاک کردن مقدار بعد از ویرایش
      Swal.fire('ویرایش موفقیت‌آمیز بود!', '', 'success');
    } else {
      throw new Error('خطا در ویرایش محصول!');
    }
  } catch (error: any) {
    console.error('خطا در ویرایش محصول:', error);
    Swal.fire(
      'خطا در ویرایش!',
      error.message || 'دوباره امتحان کنید.',
      'error'
    );
  } finally {
    setLoading(false);
  }
};

const statusLocalizationHandler =(status:string)=>{
  switch (status) {
    case 'inStock':
      return modallocalization['inStock'];
    case 'outOfStock':
      return modallocalization['outOfStock'];
    case 'comingSoon':
      return modallocalization['comingSoon'];
    case 'discontinue':
      return modallocalization['discontinue'];
  }
}


  return (
    <div>
      <div className="flex justify-between items-center px-16 py-5 gap-5 mt-3">
        <p className="font-semibold text-2xl">
          {asidebarlocalization['products']}
        </p>
      </div>
      <div className="px-16">
        <div className="overflow-x-auto table-container shadow-md rounded-lg w-[71rem] h-[35rem]">
          <table className="w-full bg-white text-left border-collapse ">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 text-sm text-center font-semibold">
                  {productslocalization['productName']}
                </th>
                <th className="py-3 px-4 text-sm text-center font-semibold">
                  {productslocalization['productID']}
                </th>
                <th className="py-3 px-4 text-sm text-center font-semibold">
                  {productslocalization['price']}
                </th>
                <th className="py-3 px-4 text-sm text-center font-semibold">
                  {productslocalization['stock']}
                </th>
                <th className="py-3 px-4 text-sm text-center font-semibold">
                  {productslocalization['type']}
                </th>
                <th className="py-3 px-4 text-sm text-center font-semibold">
                  {productslocalization['status']}
                </th>
                <th className="py-3 px-4 text-sm text-center font-semibold">
                  {productslocalization['action']}
                </th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map(item => (
                  <tr key={item.id} className="border-b">
                    <td className="py-4 text-center">{item.productName}</td>
                    <td className="py-4 text-center">{item.id}</td>
                    <td className="py-4 text-center">{item.productPrice}</td>
                    <td className="py-4 text-center">{item.productStock}</td>
                    <td className="py-4 text-center">{item.productType}</td>
                    <td className="py-4 text-center">{statusLocalizationHandler(item.productStatus)}</td>
                    <td className="py-4 text-center">
                      <button
                        className="bg-red-500 text-white rounded-lg p-1 mr-2"
                        onClick={() => item.id && handleDelete(item.id)}
                      >
                        {productslocalization['delete']}
                      </button>
                      <button
                        className="bg-blue-500 text-white rounded-lg p-1"
                        onClick={() => handleEditClick(item)}
                      >
                        {productslocalization['edit']}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="absolute top-52 font-semibold text-xl right-[38%] py-4">
                    <p>محصولی یافت نشد!</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {isEditModalOpen && selectedProduct && (
            <Modal
              isOpen={isEditModalOpen}
              onClose={() => setIsEditModalOpen(false)}
            >
              <div className="p-6 top-28 bg-primary-200 w-[25rem] h-[32rem] rounded-lg shadow-2xl z-50 right-[33%] absolute">
                <Input
                  className="p-2 rounded-md mb-3"
                  name="productName"
                  value={selectedProduct.productName}
                  onChange={handleEditChange}
                  label={productslocalization['productName']}
                  type="text"
                />
                <Input
                  className="p-2 rounded-md mb-3"
                  name="productPrice"
                  value={selectedProduct.productPrice}
                  onChange={handleEditChange}
                  label={productslocalization['price']}
                  type="number"
                />
                <Input
                  className="p-2 rounded-md mb-3"
                  name="productStock"
                  value={selectedProduct.productStock}
                  onChange={handleEditChange}
                  label={productslocalization['stock']}
                  type="number"
                />
                <Input
                  className="p-2 rounded-md mb-3"
                  name="productType"
                  value={selectedProduct.productType}
                  onChange={handleEditChange}
                  label={productslocalization['type']}
                  type="text"
                />
                <Input
                  className="p-2 rounded-md mb-3"
                  name="productStatus"
                  value={selectedProduct.productStatus}
                  onChange={handleEditChange}
                  label={productslocalization['status']}
                  type="text"
                />
                <Button
                  onClick={handleEditSubmit}
                  className="bg-primary-100 p-2 rounded-lg active:scale-95 mt-2 ml-[7.5rem]"
                >
                  {loading ? 'در حال ویرایش...' : 'ذخیره تغییرات'}
                </Button>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}
