import { Modal } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import {
  asidebarlocalization,
  modallocalization,
  productslocalization,
  swallLocalization,
} from "../../../constants/localization/Localization";
import { Iproduct } from "../../../interfaces/interfaces";
import { deleteProduct } from "../../Sevices/Products/deleteProducts";
import { updateItem } from "../../Sevices/Products/editProducts";
import Button from "../../shared/button/Button";
import Input from "../../shared/input/Input";
import { InitialFocus } from "../Modal/modal";
import ProductTable from "./ProductTable";

export default function Products({
  formData,
  searchQuery,
}: {
  formData: Iproduct[];
  searchQuery: string;
}) {
  const [products, setProducts] = useState<Iproduct[]>(formData || []);
  const [selectedProduct, setSelectedProduct] = useState<Iproduct | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Iproduct[]>([]);
  const [noResults, setNoResults] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://676d5e440e299dd2ddff55b6.mockapi.io/shop"
      );
      setProducts(response.data);
    } catch (error) {
      console.error(productslocalization.errorInGettingData, error);
    }
  };
  useEffect(() => {
    fetchProducts();

    if (!formData || formData.length === 0) {
      fetchProducts();
    } else {
      setProducts(formData);
    }
  }, [formData]);

  const handleDelete = async (id: string) => {
    try {
      const result = await Swal.fire({
        title: swallLocalization.sure,
        text: swallLocalization.warninigText,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: swallLocalization.okDelete,
        cancelButtonText: swallLocalization.cancle,
      });

      if (result.isConfirmed) {
        const success = await deleteProduct(id);
        if (success) {
          setProducts((prev) => prev.filter((p) => p.id !== id));
          Swal.fire({
            title: swallLocalization.delete,
            text: swallLocalization.deletedSuccessfully,
            icon: "success",
            confirmButtonText: swallLocalization.ok,
          });
        } else {
          throw new Error(swallLocalization.errorHappened);
        }
      }
    } catch (error) {
      console.error(swallLocalization.error, error);
      Swal.fire(
        swallLocalization.error,
        swallLocalization.errorHappened,
        "error"
      );
    }
  };

  const handleEditClick = (product: Iproduct) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleEditChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setSelectedProduct((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  const handleEditSubmit = async () => {
    if (!selectedProduct || !selectedProduct.id) return;

    if (selectedProduct.productStatus == "outOfStock") {
      toast.info(modallocalization.error);
      return;
    }

    if (selectedProduct.productStock === "0") {
      toast.warning(modallocalization.notReady);
    }

    try {
      setLoading(true);

      const updatedProduct = {
        ...selectedProduct,
        productStatus:
          selectedProduct.productStock === "0"
            ? "outOfStock"
            : selectedProduct.productStatus,
      };

      const updatedData = await updateItem(selectedProduct.id, updatedProduct);
      if (updatedData) {
        setProducts((prev) =>
          prev.map((p) => (p.id === selectedProduct.id ? updatedData : p))
        );
        setIsEditModalOpen(false);
        setSelectedProduct(null);
        Swal.fire({
          title: swallLocalization.editedSuccessfully,
          icon: "success",
          confirmButtonText: swallLocalization.ok,
        });
      } else {
        throw new Error(swallLocalization.errorInEditing);
      }
    } catch (error: any) {
      console.error(swallLocalization.errorInEditing, error);
      Swal.fire(
        swallLocalization.errorInEditing,
        error.message || swallLocalization.errorHappened,
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  const productTypes = [
    "apple",
    "xiaomi",
    "samsung",
    "huawei",
    "nokia",
    "microsoft",
    "nothingPhone",
    "google",
  ];

  const productStatuses = [
    { value: "inStock", label: modallocalization["inStock"] },
    { value: "outOfStock", label: modallocalization["outOfStock"] },
    { value: "comingSoon", label: modallocalization["comingSoon"] },
    { value: "discontinue", label: modallocalization["discontinue"] },
  ];

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts(products);
      setNoResults(false);
    } else {
      const filtered = products.filter((product) =>
        product.productName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
      setNoResults(filtered.length === 0);
    }
  }, [searchQuery, products]);

  return (
    <div className="px-16 pt-4">
      <InitialFocus setProducts={setProducts} fetchProducts={fetchProducts} />
      <div className="flex justify-end items-center py-5 gap-5 mt-3">
        <p className="font-semibold text-2xl">
          {asidebarlocalization["products"]}
        </p>
      </div>
      <div>
        <div className="table-container overflow-auto max-h-[70vh]">
          <ProductTable
            filteredProducts={filteredProducts}
            handleDelete={handleDelete}
            handleEditClick={handleEditClick}
            noResults={noResults}
          />
          {isEditModalOpen && selectedProduct && (
            <Modal
              isOpen={isEditModalOpen}
              onClose={() => setIsEditModalOpen(false)}
            >
              <div className="p-6 top-20 bg-primary-200 w-[25rem] h-[32rem] rounded-lg shadow-2xl z-50 right-1/3 absolute">
                <Input
                  className="p-2 rounded-md mb-3"
                  name="productName"
                  value={selectedProduct.productName}
                  onChange={handleEditChange}
                  label={productslocalization["productName"]}
                  type="text"
                />
                <Input
                  className="p-2 rounded-md mb-3"
                  name="productPrice"
                  value={selectedProduct.productPrice}
                  onChange={handleEditChange}
                  label={productslocalization["price"]}
                  type="number"
                />
                <Input
                  className="p-2 rounded-md mb-3"
                  name="productStock"
                  value={selectedProduct.productStock}
                  onChange={handleEditChange}
                  label={productslocalization["stock"]}
                  type="number"
                />
                <label className="mb-1 flex justify-end">
                  {productslocalization["type"]}
                </label>
                <select
                  name="productType"
                  value={selectedProduct.productType}
                  onChange={handleEditChange}
                  className="p-2 rounded-md mb-3 w-full border border-gray-300 text-right"
                >
                  <option hidden>{productslocalization["type"]}</option>
                  {productTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <label className="mb-1 flex justify-end">
                  {productslocalization["status"]}
                </label>
                <select
                  name="productStatus"
                  value={selectedProduct.productStatus}
                  onChange={handleEditChange}
                  className="p-2 rounded-md mb-3 w-full border border-gray-300 text-right"
                >
                  <option hidden>{productslocalization["status"]}</option>
                  {productStatuses.map((status) => (
                    <option key={status.value} value={status.value}>
                      {status.label}
                    </option>
                  ))}
                </select>
                <div className="flex gap-4 items-center justify-center">
                  <Button
                    onClick={handleEditSubmit}
                    className="bg-primary-100 p-2 rounded-lg active:scale-95 mt-2 hover:bg-primary-200 hover:font-semibold"
                  >
                    {loading
                      ? modallocalization.editing
                      : modallocalization.saveChanges}
                  </Button>
                  <Button
                    onClick={() => setIsEditModalOpen(false)}
                    className="bg-primary-100 p-2 rounded-lg active:scale-95 mt-2 hover:bg-primary-200 hover:font-semibold"
                  >
                    {modallocalization.cancel}
                  </Button>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}
