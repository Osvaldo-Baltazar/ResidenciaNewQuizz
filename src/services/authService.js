import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "http://www.vocatec.somee.com/api/usuarios";

const authService = {
  login: async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const { token } = response.data.result;
        const { idUsuario } = response.data.result.usuario;
        Cookies.set("token", token, { expires: 1, SameSite: "strict" });
        Cookies.set("idUser", idUsuario, { expires: 1, SameSite: "strict" });
        return response;
      } else {
        throw new Error("Token no encontrado en la respuesta");
      }
    } catch (error) {
      throw error;
    }
  },

  register: async (userData) => {
    try {
      console.log(userData);
      const response = await axios.post(`${API_URL}/registro`, userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  getToken: () => {
    return Cookies.get("token");
  },
  getIdUser: () => {
    return Cookies.get("idUser");
  },
  signOut: () => {
    Cookies.remove("token");
    Cookies.remove("idUser");
  },
};

export default authService;
