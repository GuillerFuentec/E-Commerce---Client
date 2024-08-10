import { useState, useEffect } from "react";
import { Game } from "@/api";

const gameCtrl = new Game();
const limit = 2;
const platformID = null;

export function LastestGames() {
  const [game, setGame] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await gameCtrl.getLastestPublications({
          limit,
          platformID,
        });
        console.log(response.data);
        
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!game) return null

  return <div>LastestGames</div>;
}
