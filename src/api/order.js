import { authFetch, ENV } from "@/utils";

export class Order {
  async getAll(userId) {
    try {
      const filters = `filters[user][id][$eq]=${userId}`;
      const sortBy = `sort=createdAt:desc`;
      const urlParams = `${filters}&${sortBy}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ORDER}?${urlParams}`;

      const response = await authFetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}
