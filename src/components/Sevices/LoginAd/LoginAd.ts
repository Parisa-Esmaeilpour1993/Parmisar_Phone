import axios from 'axios';
import { API_KEY, BASE_URL } from '../../../constants/api/Api';

interface LoginAdProps {
  email: string;
  password: string;
}

export const LoginAd = async ({ email, password }: LoginAdProps) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/users/login`,
      { email, password },
      {
        headers: {
          api_key: API_KEY,
          'Content-Type': 'application/json',
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
