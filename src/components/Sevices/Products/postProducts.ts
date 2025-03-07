import axios from 'axios';

export interface IpostProducts {
  productName: string;
  productPrice: string;
  productStock: string;
  productType: string;
  productStatus: string;
}

export const postProducts = async ({
  productName,
  productPrice,
  productStock,
  productType,
  productStatus,
}: IpostProducts) => {
  try {
    const response = await axios.post(
      'https://676d5e440e299dd2ddff55b6.mockapi.io/shop',
      { productName, productPrice, productStock, productType, productStatus },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response;
  } catch (error: any) {
    console.error('خطا در ارسال درخواست:', error);
  }
};
