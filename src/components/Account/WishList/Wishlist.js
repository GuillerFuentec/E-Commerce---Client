import { useState, useEffect } from "react";
import { size } from "lodash";
import { WishList as WhishlistCtrl } from "@/api";
import { useAuth } from "@/hooks";
import { NoResult } from "@/components/Shared";
import { GridGames } from "./GridGames";

const whishlistCtl = new WhishlistCtrl();

export function Wishlist() {
  const [whishlist, setWhishlist] = useState(null);
  const [reload, setReload] = useState(false);
  const { user } = useAuth();
  const onReload = () => setReload((prevState) => !prevState);

  useEffect(() => {
    (async () => {
      const response = await whishlistCtl.getAll(user.id);
      setWhishlist(response.data);
    })();
  }, [reload]);

  return size(whishlist) === 0 ? (
    <NoResult text="No games in wishlist yet" />
  ) : (
    <GridGames wishlist={whishlist} onReload={onReload} />
  );
}
