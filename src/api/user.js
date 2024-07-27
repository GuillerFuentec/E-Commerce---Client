import { ENV } from "@/utils";

export class User {
  async getMe() {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USER_ME}`;

      const params = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNzIyMTIwNzgxLCJleHAiOjE3MjQ3MTI3ODF9.DsGzTT37RbyFA8ie0aBtuELV_7CNti38DF9VOKzsnos",
        },
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw error;

      return result;
    } catch (error) {
      console.error(error);
    }
  }
}
