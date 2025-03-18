import axios from "axios";
import { API_KEY, BASE_URL } from "../../../constants/api/Api";

export const deleteProduct = async (id: string) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/api/records/products/${id}`,{
            headers: {
              api_key: API_KEY,
            },
          
  });
    return response.status === 200;
  } catch (error) {
    console.error('خطا در حذف محصول:', error);
    return false;
  }
};
