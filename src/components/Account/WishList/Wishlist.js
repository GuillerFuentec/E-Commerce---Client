import { useState, useEffect } from "react";
import { size } from "lodash";
import { WishList as WishlistCtrl } from "@/api";
import { useAuth } from "@/hooks";
import { NoResult } from "@/components/Shared";
import { GridGames } from "./GridGames";

const wishlistCtrl = new WishlistCtrl();

export function Wishlist() {
  const [wishlist, setWishlist] = useState(null);
  const [reload, setReload] = useState(false);
  const { user } = useAuth();
  const onReload = () => setReload((prevState) => !prevState);

  useEffect(() => {
    (async () => {
      const response = await wishlistCtrl.getAll(user.id);
      setWishlist(response.data);
    })();
  }, [reload]);

  return size(wishlist) === 0 ? (
    <NoResult text="No games in wishlist yet" />
  ) : (
    <GridGames wishlist={wishlist} onReload={onReload} />
  );
}
