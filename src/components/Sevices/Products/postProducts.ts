// import axios from 'axios';

// export interface IpostProducts {
//   productImage: string;
//   productName: string;
//   productPrice: string;
//   productStock: string;
//   productType: string;
//   productStatus: string;
// }

// export const postProducts = async ({
//   productImage,
//   productName,
//   productPrice,
//   productStock,
//   productType,
//   productStatus,
// }: IpostProducts) => {
//   try {
//     const response = await axios.post(
//       'https://676d5e440e299dd2ddff55b6.mockapi.io/shop',
//       {
//         productName,
//         productPrice,
//         productStock,
//         productType,
//         productStatus,
//         productImage,
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//     return response;
//   } catch (error: any) {
//     console.error('خطا در ارسال درخواست:', error);
//   }
// };
import axios from 'axios';
import { API_KEY, BASE_URL } from '../../../constants/api/Api';

export interface IpostProducts {
  productImage: File | null;
  productName: string;
  productPrice: string;
  productStock: string;
  productType: string;
  productStatus: string;
}

export const postProducts = async (formData: IpostProducts) => {
  try {
    const data = new FormData();
    if (formData.productImage) {
      data.append('productImage', formData.productImage);
    }
    data.append('productName', formData.productName);
    data.append('productPrice', formData.productPrice);
    data.append('productStock', formData.productStock);
    data.append('productType', formData.productType);
    data.append('productStatus', formData.productStatus);
console.log(formData)
    const response = await axios.post(
      `${BASE_URL}/api/records/products`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          api_key: API_KEY,
          Authorization: `Bearer {{eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDJlM2FiNzFiNTU0NTgwNmVkMWJlYyIsImlhdCI6MTc0MTg3NDEyNCwiZXhwIjoxNzQyMDQ2OTI0fQ.m8NyyLyGVYYni15jiCOuC86EAdIoZ03dlAvdqXC8hQk}}`,
        },
      }
    );

    return response;
  } catch (error: any) {
    console.error('خطا در ارسال درخواست:', error);
  }
};