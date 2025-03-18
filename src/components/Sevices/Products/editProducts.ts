import axios from 'axios';
import { API_KEY, BASE_URL } from '../../../constants/api/Api';


const apiClient = axios.create({
  baseURL: `${BASE_URL}/api/records/products`,
});

export const fetchItems = async () => {
  try {
    const { data } = await apiClient.get('/shop');
    return data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw new Error('Failed to fetch items. Please try again later.');
  }
};


export const updateItem = async (
  id: string,
  updatedData: Record<string, any>
) => {
  try {
    const { data } = await axios.put(
      `${BASE_URL}/api/records/products/${id}`,
      updatedData,
      {
        headers: {
          api_key: API_KEY,
          Authorization: `Bearer {{eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDJlM2FiNzFiNTU0NTgwNmVkMWJlYyIsImlhdCI6MTc0MTg3NDEyNCwiZXhwIjoxNzQyMDQ2OTI0fQ.m8NyyLyGVYYni15jiCOuC86EAdIoZ03dlAvdqXC8hQk}}`,
        },
      }
    );

    console.log('Updated Data:', updatedData);
    if (data) {
      return data; 
    } else {
      throw new Error('No data received from server.');
    }
  } catch (error) {
    console.error('Error updating item:', error);
    throw new Error('Failed to update item. Please try again later.');
  }
};


