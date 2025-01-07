import { ENV, authFetch } from "@/utils";

export class WishList {
  async checkInWish(userId, gameId) {
    try {
      const filterUser = `filters[user][id][$eq][0]=${userId}`;
      const filterGame = `filters[game][id][$eq][1]=${gameId}`;
      const urlParams = `${filterUser}&${filterGame}`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}?${urlParams}`;

      const response = await authFetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      if (result.data.length === 0) return false;

      return result.data[0];
    } catch (error) {
      throw error;
    }
  }

  async add(userId, gameId) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            user: userId,
            game: gameId,
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
}
