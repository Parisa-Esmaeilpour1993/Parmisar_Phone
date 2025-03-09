export interface Iproduct {
  productName: string;
  productPrice: string;
  productStock: string;
  productType: string;
  productStatus: string;
  id?: string;
}

export interface productInit {
  productName: string;
  productId: number | null;
  price: number | null;
  stock: number | null;
  type: string;
  status: string;
  action: [];
}

export interface Iorders {
  userName: string;
  totalPrice: number;
  status: boolean;
  id: number;
  orders: [];
}

export interface UserProps {
  userName: string;
  id: number;
  user: [];
}
