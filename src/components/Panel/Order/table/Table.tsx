import { useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Orderlocalization } from "../../../../constants/localization/Localization";
import { Iorders } from "../../../../interfaces/interfaces";
import { ORDER_BASE_URL } from "../../../Sevices/OrderURL/OrderURL";
import { OpenOrderModal } from "./OpenOrderModal";

export default function Table({ searchQuery }: { searchQuery: string }) {
  const [orders, setOrders] = useState<Iorders[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOrder, setSelectedOrder] = useState<Iorders | null>(null);
  const [filteredOrders, setFilteredOrders] = useState<Iorders[]>([]);
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(true);

  const ordersHandler = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${ORDER_BASE_URL}/Orders`);
      setOrders(response.data);
      setFilteredOrders(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    ordersHandler();
  }, []);

  const statusBG = (status: boolean) => {
    switch (status) {
      case true:
        return "bg-green-400";
      case false:
        return "bg-red-500";
      default:
        break;
    }
  };

  const handleOpenModal = (order: Iorders) => {
    setSelectedOrder(order);
    onOpen();
  };

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredOrders(orders);
      setNoResults(false);
    } else {
      const filtered = orders.filter((order) =>
        order.userName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredOrders(filtered);
      setNoResults(filtered.length === 0);
    }
  }, [searchQuery, orders]);

  return (
    <div className="overflow-y-auto max-h-[70vh] shadow-xl">
      <table className="w-full bg-white border-collapse text-center relative ">
        <thead className="bg-gray-300">
          <tr>
            <th className="py-3 px-8 text-sm font-semibold">
              {Orderlocalization.status}
            </th>
            <th className="py-3 px-8 text-sm font-semibold">
              {Orderlocalization.orderTotalPrice}
            </th>
            <th className="py-3 px-4 text-sm font-semibold">
              {Orderlocalization.userName}
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={3} className="py-3 px-4 text-center text-gray-500">
                {Orderlocalization.loading}
              </td>
            </tr>
          ) : filteredOrders.length > 0 ? (
            filteredOrders.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-200"
                onClick={() => handleOpenModal(item)}
              >
                <td className="py-3 px-2">
                  <div
                    className={`px-3 py-1 text-xs font-semibold rounded-full w-1/2 text-white ${statusBG(
                      item.status
                    )} m-auto`}
                  >
                    {item.status
                      ? Orderlocalization.send
                      : Orderlocalization.sending}
                  </div>
                </td>
                <td className="py-3 px-2">{item.totalPrice}</td>
                <td className="py-3 px-2">{item.userName}</td>
              </tr>
            ))
          ) : noResults ? (
            <tr>
              <td colSpan={3} className="py-3 px-4 text-center text-red-500">
                {Orderlocalization.noResult}
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
      {selectedOrder && (
        <OpenOrderModal
          order={selectedOrder}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </div>
  );
}
