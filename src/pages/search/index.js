import { Game } from "@/api";
import { Pagination, Search } from "semantic-ui-react";

export { default } from "./search";

export async function getServerSideProps(context) {
  const {
    query: { s, page = 1 },
  } = context;
  
  const gameCtrl = new Game();
  const responseGame = await gameCtrl.getGamesBySearch(s, page);
  
  return {
    props: {
      games: responseGame,
      pagination: responseGame.meta.pagination,
      searchText: s,
    },
  };
}
