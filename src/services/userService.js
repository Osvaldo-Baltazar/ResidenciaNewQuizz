import axios from "axios";
import authService from "./authService";

const API_URL = "http://www.vocatec.somee.com/api/usuarios"; // Reemplaza con la URL de tu API

const userService = {
  getUser: async () => {
    const token = authService.getToken();
    const idUser = authService.getUserId();

    try {
      const response = await axios.get(`${API_URL}/${idUser}`, {
        headers: {
          Authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default userService;
