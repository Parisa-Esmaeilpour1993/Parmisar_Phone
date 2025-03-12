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
import { InitialFocus } from "../Modal/modal";
import EditProductModal from "./EditProductModal";
import ProductTable from "./ProductTable";
import { productStatuses } from "../../../utils/productStatus";
import { productTypes } from "../../../utils/productType";

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
    <div className="px-16 pt-4 font-vazir">
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
            <EditProductModal
              isOpen={isEditModalOpen}
              onClose={() => setIsEditModalOpen(false)}
              selectedProduct={selectedProduct}
              handleEditChange={handleEditChange}
              handleEditSubmit={handleEditSubmit}
              loading={loading}
              productTypes={productTypes}
              productStatuses={productStatuses}
              modallocalization={modallocalization}
            />
          )}
        </div>
      </div>
    </div>
  );
}
