import { Modal } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  asidebarlocalization,
  modallocalization,
  productslocalization,
} from "../../../constants/localization/Localization";
import { Iproduct } from "../../../interfaces/interfaces";
import { deleteProduct } from "../../Sevices/Products/deleteProducts";
import { updateItem } from "../../Sevices/Products/editProducts";
import Button from "../../shared/button/Button";
import Input from "../../shared/input/Input";
import { InitialFocus } from "../Modal/modal";
import { toast } from "react-toastify";

export default function Products({ formData }: { formData: Iproduct[] }) {
  const [products, setProducts] = useState<Iproduct[]>(formData || []);
  const [selectedProduct, setSelectedProduct] = useState<Iproduct | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchProducts = async (products?: Iproduct[]) => {
    try {
      const response = await axios.get(
        "https://676d5e440e299dd2ddff55b6.mockapi.io/shop"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("خطا در دریافت محصولات:", error);
    }
  };

  useEffect(() => {
    if (!formData || formData.length === 0) {
      fetchProducts();
    } else {
      setProducts(formData);
    }
  }, [formData]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const result = await Swal.fire({
        title: "آیا مطمئن هستید؟",
        text: "این محصول برای همیشه حذف خواهد شد!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "بله، حذف شود!",
        cancelButtonText: "لغو",
      });

      if (result.isConfirmed) {
        const success = await deleteProduct(id);
        if (success) {
          setProducts((prev) => prev.filter((p) => p.id !== id));
          Swal.fire({
            title: "حذف شد!",
            text: "محصول با موفقیت حذف شد.",
            icon: "success",
            confirmButtonText: "باشه",
          });
        } else {
          throw new Error("مشکلی پیش آمد. دوباره امتحان کنید.");
        }
      }
    } catch (error) {
      console.error("خطا در حذف محصول:", error);
      Swal.fire("خطا!", "مشکلی پیش آمد. دوباره امتحان کنید.", "error");
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
          title: "!ویرایش موفقیت آمیز بود",
          icon: "success",
          confirmButtonText: "باشه",
        });
      } else {
        throw new Error("!خطا در ویرایش محصول");
      }
    } catch (error: any) {
      console.error(":خطا در ویرایش محصول", error);
      Swal.fire(
        "خطا در ویرایش!",
        error.message || "دوباره امتحان کنید.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  const statusLocalizationHandler = (status: string) => {
    switch (status) {
      case "inStock":
        return modallocalization["inStock"];
      case "outOfStock":
        return modallocalization["outOfStock"];
      case "comingSoon":
        return modallocalization["comingSoon"];
      case "discontinue":
        return modallocalization["discontinue"];
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "inStock":
        return "bg-green-200 text-green-700";
      case "outOfStock":
        return "bg-red-200 text-red-700";
      case "comingSoon":
        return "bg-yellow-200 text-yellow-700";
      case "discontinue":
        return "bg-gray-200 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
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

  return (
    <div className="px-16">
      <InitialFocus setProducts={setProducts} fetchProducts={fetchProducts} />
      <div className="flex justify-between items-center py-5 gap-5 mt-3">
        <p className="font-semibold text-2xl">
          {asidebarlocalization["products"]}
        </p>
      </div>
      <div>
        <div className="table-container overflow-auto max-h-[72vh]">
          <table className="w-full bg-white text-left border-collapse table-container shadow-md rounded-lg max-w-[62rem]">
            <thead className="bg-gray-300 sticky top-0 z-10">
              <tr>
                <th className="py-3 px-4 text-sm text-center font-semibold">
                  {productslocalization["productName"]}
                </th>
                <th className="py-3 px-4 text-sm text-center font-semibold">
                  {productslocalization["productID"]}
                </th>
                <th className="py-3 px-4 text-sm text-center font-semibold">
                  {productslocalization["price"]}
                </th>
                <th className="py-3 px-4 text-sm text-center font-semibold">
                  {productslocalization["stock"]}
                </th>
                <th className="py-3 px-4 text-sm text-center font-semibold">
                  {productslocalization["type"]}
                </th>
                <th className="py-3 px-4 text-sm text-center font-semibold">
                  {productslocalization["status"]}
                </th>
                <th className="py-3 px-4 text-sm text-center font-semibold">
                  {productslocalization["action"]}
                </th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((item) => (
                  <tr
                    key={item.id}
                    className={`border-b ${
                      item.productStatus === "comingSoon"
                        ? "bg-yellow-100"
                        : item.productStatus === "discontinue"
                        ? "bg-gray-300 opacity-70 "
                        : ""
                    }`}
                  >
                    <td
                      className={`py-4 text-center ${
                        item.productStatus === "outOfStock"
                          ? "line-through"
                          : ""
                      }`}
                    >
                      {item.productName}
                    </td>
                    <td className="py-4 text-center">{item.id}</td>
                    <td className="py-4 text-center">{item.productPrice}</td>
                    <td className="py-4 text-center">{item.productStock}</td>
                    <td className="py-4 text-center">{item.productType}</td>
                    <td className="py-4 text-center">
                      <div
                        className={`${getStatusColor(
                          item.productStatus
                        )} w-2/3 rounded-lg p-1 m-auto`}
                      >
                        {statusLocalizationHandler(item.productStatus)}
                      </div>
                    </td>
                    <td className="py-4 flex gap-2 items-center justify-center">
                      <button
                        className="bg-red-500 text-white rounded-lg py-1 px-2 hover:bg-red-700"
                        onClick={() => item.id && handleDelete(item.id)}
                      >
                        {productslocalization["delete"]}
                      </button>
                      <button
                        className="bg-blue-500 text-white rounded-lg py-1 px-2 hover:bg-blue-700"
                        onClick={() => handleEditClick(item)}
                      >
                        {productslocalization["edit"]}
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
                  className="p-2 rounded-md mb-3 w-full border border-gray-300"
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
                  className="p-2 rounded-md mb-3 w-full border border-gray-300"
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
