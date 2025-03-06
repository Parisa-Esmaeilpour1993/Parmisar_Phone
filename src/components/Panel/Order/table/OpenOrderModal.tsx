import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Iorders } from "../../../../interfaces/interfaces";
import { OrderModalLocalization } from "../../../../constants/localization/Localization";

interface ModalProps {
  order: Iorders;
  isOpen: boolean;
  onClose: () => void;
}

export function OpenOrderModal({ order, isOpen, onClose }: ModalProps) {
  const orderList = order.orders;
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{OrderModalLocalization.title}</ModalHeader>
        <ModalBody>
          <div className="flex gap-5">
            <h1>{OrderModalLocalization.userName} :</h1>
            <h2>{order.userName}</h2>
          </div>
          <div className="flex flex-col gap-5 text-center">
            <h1 className="pt-5 font-semibold text-lg">
              {OrderModalLocalization.OrderList}
            </h1>
            <table>
              <thead className="bg-gray-300">
                <tr>
                  <th className="py-3 px-4 text-sm font-semibold">
                    {OrderModalLocalization.productName}
                  </th>
                  <th className="py-3 px-4 text-sm font-semibold">
                    {OrderModalLocalization.productPrice}
                  </th>
                  <th className="py-3 px-4 text-sm font-semibold">
                    {OrderModalLocalization.count}
                  </th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((item: any) => {
                  return (
                    <tr key={item.id}>
                      <td className="py-3 px-4">{item.productName}</td>
                      <td className="py-3 px-4">{item.productPrice}</td>
                      <td className="py-3 px-4">{item.count}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>{OrderModalLocalization.close}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
