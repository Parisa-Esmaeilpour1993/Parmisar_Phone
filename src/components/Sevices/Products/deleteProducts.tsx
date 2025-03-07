import axios from "axios";

export const deleteProduct = async (id: string) => {
  try {
    const response = await axios.delete(
      `https://676d5e440e299dd2ddff55b6.mockapi.io/shop/${id}`
    );
    return response.status === 200;
  } catch (error) {
    console.error('خطا در حذف محصول:', error);
    return false;
  }
};
