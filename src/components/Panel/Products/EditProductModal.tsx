import React from "react";
import Button from "../../shared/button/Button";
import Input from "../../shared/input/Input";
import { Modal } from "@chakra-ui/react";
import { productslocalization } from "../../../constants/localization/Localization";

export default function EditProductModal({
  isOpen,
  onClose,
  selectedProduct,
  handleEditChange,
  handleEditSubmit,
  loading,
  productTypes,
  productStatuses,
  modallocalization,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct: any;
  handleEditChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleEditSubmit: () => void;
  loading: boolean;
  productTypes: string[];
  productStatuses: { value: string; label: string }[];
  modallocalization: any;
}) {
  if (!selectedProduct) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="font-vazir p-6 top-20 bg-primary-200 w-[25rem] h-[32rem] rounded-lg shadow-2xl z-50 right-1/3 absolute">
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
            onClick={onClose}
            className="bg-primary-100 p-2 rounded-lg active:scale-95 mt-2 hover:bg-primary-200 hover:font-semibold"
          >
            {modallocalization.cancel}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
