import { useState, useEffect } from "react";
import { Game } from "@/api";
import { GamesGrid } from "@/components/Shared";

const gameCtrl = new Game();

export function LastestGames(props) {
  const { title, limit = 9, platformID = null } = props;
  const [games, setGames] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await gameCtrl.getLastestPublications({
          limit,
          platformID,
        });
        setGames(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!games) return null;

  return (
    <div>
      <h2>{title}</h2>
      <GamesGrid games={games} />
    </div>
  );
}
