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

      if (response !== 200) throw result;

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
}
