import axios from "axios";
import authService from "./authService";
const API_URL = "http://vocatecnmapi.somee.com/resultado"; // Reemplaza con la URL de tu API

const ResultService = {
  GuardarResultado: async (TestResult) => {
    try {
      const response = await axios.post(`${API_URL}`, TestResult, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },

  ObtenerResultados: async () => {
    try {
      const idUser = authService.getIdUser();
      const response = await axios.get(`${API_URL}/${idUser}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return "No se encontraron resultados";
      }
      throw error;
    }
  },
};

export default ResultService;
