import axios from 'axios';


const apiClient = axios.create({
  baseURL: 'https://676d5e440e299dd2ddff55b6.mockapi.io',
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
    const { data } = await apiClient.put(`/shop/${id}`, updatedData);
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


