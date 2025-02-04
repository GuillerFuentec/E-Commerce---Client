import { authFetch, ENV } from "@/utils";
import { size, forEach } from "lodash";

export class Cart {
  addItem(gameId) {
    const games = this.getAll();
    const objIndex = games.findIndex((game) => game.id === gameId);

    if (objIndex < 0) {
      games.push({
        id: gameId,
        quantity: 1,
      });
    } else {
      const game = games[objIndex];
      games[objIndex].quantity = game.quantity + 1;
    }
    localStorage.setItem(ENV.CART, JSON.stringify(games));
  }

  count() {
    const response = this.getAll();
    let count = 0;

    forEach(response, (item) => {
      count += item.quantity;
    });

    return count;
  }

  getAll() {
    const response = localStorage.getItem(ENV.CART);

    if (!response) {
      return [];
    } else {
      return JSON.parse(response);
    }
  }

  changeQuantity(gameId, quantity) {
    const games = this.getAll();
    const objIndex = games.findIndex((game) => game.id === gameId);

    if (objIndex >= 0) {
      games[objIndex].quantity = quantity;
      localStorage.setItem(ENV.CART, JSON.stringify(games));
    }
  }

  deleteItem(gameId) {
    const games = this.getAll();
    const newGames = games.filter((game) => game.id !== gameId);
    localStorage.setItem(ENV.CART, JSON.stringify(newGames));
  }
}
