import React from "react";
import { productslocalization } from "../../../constants/localization/Localization";
import { statusLocalizationHandler } from "../../../utils/statusLocalizationHndler";
import { getStatusColor } from "../../../utils/statusColor";
import { Iproduct } from "../../../interfaces/interfaces";

interface ProductTableProps {
  filteredProducts: Iproduct[];
  handleDelete: (id: string) => void;
  handleEditClick: (product: Iproduct) => void;
  noResults: boolean;
}

export default function ProductTable({
  filteredProducts,
  handleDelete,
  handleEditClick,
  noResults,
}: ProductTableProps) {
  return (
    <div className="font-vazir">
      <table className="w-full bg-white text-left border-collapse table-container shadow-md rounded-lg max-w-[62rem]">
        <thead className="bg-gray-400 sticky top-0 z-10">
          <tr>
            <th className="py-3 px-4 text-sm text-center font-semibold">
              {productslocalization["action"]}
            </th>
            <th className="py-3 px-4 text-sm text-center font-semibold">
              {productslocalization["status"]}
            </th>
            <th className="py-3 px-4 text-sm text-center">
              {productslocalization["price"]}
            </th>
            <th className="py-3 px-4 text-sm text-center font-semibold">
              {productslocalization["stock"]}
            </th>
            <th className="py-3 px-4 text-sm text-center font-semibold">
              {productslocalization["type"]}
            </th>
            <th className="py-3 px-4 text-sm text-center font-semibold">
              {productslocalization["productName"]}
            </th>
            <th className="py-3 px-4 text-sm text-center font-semibold">
              {productslocalization["productID"]}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <tr
                key={item.id}
                className={`border-b font-number ${
                  item.productStatus === "comingSoon"
                    ? "bg-yellow-100"
                    : item.productStatus === "discontinue"
                    ? "bg-gray-300 opacity-50 "
                    : item.productStatus === "outOfStock"
                    ? "bg-red-100"
                    : ""
                }`}
              >
                <td className="py-4 flex gap-2 items-center justify-center">
                  <button
                    className="bg-red-500 text-white rounded-lg py-1 font-vazir px-2 hover:bg-red-700"
                    onClick={() => item.id && handleDelete(item.id)}
                  >
                    {productslocalization["delete"]}
                  </button>
                  <button
                    className="bg-blue-500 text-white rounded-lg font-vazir py-1 px-2 hover:bg-blue-700"
                    onClick={() => handleEditClick(item)}
                  >
                    {productslocalization["edit"]}
                  </button>
                </td>
                <td className="py-4 text-center">
                  <div
                    className={`${getStatusColor(
                      item.productStatus
                    )} w-2/3 rounded-lg p-1 m-auto`}
                  >
                    {statusLocalizationHandler(item.productStatus)}
                  </div>
                </td>
                <td className="py-4 text-center">{item.productPrice}</td>
                <td className="py-4 text-center">{item.productStock}</td>
                <td className="py-4 text-center">{item.productType}</td>
                <td
                  className={`py-4 text-center ${
                    item.productStatus === "outOfStock" ? "line-through" : ""
                  }`}
                >
                  {item.productName}
                </td>
                <td
                  className={`py-4 text-center ${
                    item.productStatus === "outOfStock" ? "line-through" : ""
                  }`}
                >
                  {item.id}
                </td>
              </tr>
            ))
          ) : noResults ? (
            <tr>
              <td colSpan={7} className="py-3 text-center text-red-500">
                <p>{productslocalization["noProductsFound"]}</p>
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
}
