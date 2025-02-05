import { ENV, authFetch } from "@/utils";
import { head, method } from "lodash";

export class Address {
  async createAddress(data, userID) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            ...data,
            user: userID,
          },
        }),
      };

      const response = await authFetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getAddress(userID) {
    try {

      const filters = `filters[user][id][$eq]=${userID}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}?${filters}`;
      
      const response = await authFetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async updateAddress(addressID, data) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}/${addressID}`;
      const params = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      };

      const response = await authFetch(url, params);
      const result = await response.json();

      if (response.status !== 200) {
        // OJO
        // Manejo de errores: Aunque estás lanzando errores si el estado de la respuesta no es 200, sería útil proporcionar información adicional sobre el error para facilitar la depuración.
        // console.error("Error en updateAddress:", error);
        throw result;
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  async deleteAddress(addressID) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}/${addressID}`;
      const params = {
        method: "DELETE",
      };

      const response = await authFetch(url, params);
      const result = await response.json();

      if (response.status !== 200) {
        throw result;
      }

      return result;
    } catch (error) {
      throw error;
    }
  }
}
