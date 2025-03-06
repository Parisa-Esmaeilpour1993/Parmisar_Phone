import axios from "axios";
import { Orderlocalization } from "../../../../constants/localization/Localization";
import { ORDER_BASE_URL } from "../../../Sevices/OrderURL/OrderURL";
import { useEffect, useState } from "react";
import { Iorders } from "../../../../interfaces/interfaces";
import { useDisclosure } from "@chakra-ui/react";
import { OpenOrderModal } from "./OpenOrderModal";

export default function Table() {
  const [orders, setOrders] = useState<Iorders[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOrder, setSelectedOrder] = useState<Iorders | null>(null);

  const ordersHandler = async () => {
    try {
      const response = await axios.get(`${ORDER_BASE_URL}/Orders`);
      setOrders(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ordersHandler();
  }, []);

  const statusBG = (status: boolean) => {
    switch (status) {
      case true:
        return "bg-green-400";
      //   case "sending":
      //     return "bg-yellow-300";
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

  return (
    <div className="overflow-y-auto max-h-[700px] shadow-xl">
      <table className="w-full bg-white border-collapse text-center relative ">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-4 text-sm font-semibold">
              {Orderlocalization.userName}
            </th>
            <th className="py-3 px-4 text-sm font-semibold">
              {Orderlocalization.orderTotalPrice}
            </th>
            <th className="py-3 px-4 text-sm font-semibold">
              {Orderlocalization.status}
            </th>
          </tr>
        </thead>
        <tbody className="">
          {orders.map((item) => (
            <tr
              key={item.id}
              className="border-b hover:bg-gray-200"
              onClick={() => handleOpenModal(item)}
            >
              <td className="py-3 px-4">{item.userName}</td>
              <td className="py-3 px-4">{item.totalPrice}</td>
              <td className="py-3 px-4">
                <div
                  className={`px-3 py-1 text-xs font-semibold rounded-full w-1/2 text-white ${statusBG(
                    item.status
                  )} m-auto`}
                >
                  {item.status ? "ارسال شده" : "درحال ارسال"}
                </div>
              </td>
            </tr>
          ))}
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
