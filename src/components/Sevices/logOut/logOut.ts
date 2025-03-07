import axios from "axios";
import { BASE_URL } from "../../../constants/api/Api";


export const logOut = async () => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/users/logout`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
