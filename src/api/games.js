import { ENV } from "@/utils";

export class Game {
  async getLastPublished() {
    try {
      const sort = `sort=publishedAt:desc`;
      const pagination = `pagination[limit]=1`;
      const populate = `populate=*`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${sort}&${pagination}&${populate}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw response;

      return result;
    } catch (error) {
      throw error;
    }
  }
  async getLastestPublications({ limit = 9, platformID = null }) {
    try {
      const filterPlatform = platformID
        ? `filters[platform][id][$eq]=${platformID}`
        : "";
      const paginationLimit = `pagination[limit]=${limit}`;
      const sort = `sort[0]=publishedAt:desc`;
      const populate = `populate=*`;
      const urlParams = `${sort}&${paginationLimit}&${filterPlatform}&${populate}`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${urlParams}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}
