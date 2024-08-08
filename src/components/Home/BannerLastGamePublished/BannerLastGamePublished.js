import { useState, useEffect } from "react";
import { Game } from "@/api";
import styles from "./BannerLastGamePublished.module.scss";

const gameCtrl = new Game();

export function BannerLastGamePublished() {
  const [game, setGame] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await gameCtrl.getLastPublished();
        setGame(response.data[0]);
      } catch (error) {
        throw error;
      }
    })();
  }, [game]);
  if (!game) return null
  return <div>BannerLastGamePublished</div>;
}
