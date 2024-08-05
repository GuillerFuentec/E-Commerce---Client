import { ENV, authFetch } from "@/utils";
import { method } from "lodash";

export class User {
  async getMe() {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USER_ME}`;

      const response = await authFetch(url);
      const result = await response.json();

      if (response.status !== 200) throw error;

      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async updateMe(userID, data) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USER}/${userID}`;

      const params = {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const response = await authFetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;
    
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}
