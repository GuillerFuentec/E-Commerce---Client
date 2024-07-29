import { ENV, authFetch } from "@/utils";

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
}
