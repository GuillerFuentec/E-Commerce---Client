import { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";
import { WishList } from "@/api";
import classNames from "classnames";
import { useAuth } from "@/hooks";
import styles from "./wishListIcon.module.scss";

const wishListCtrl = new WishList();

export function WishListIcon(props) {
  const { gameId, className, removeCallback } = props;
  const [hasItemWishList, setHasItemWishList] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await wishListCtrl.checkInWish(user.id, gameId);
        setHasItemWishList(response);
      } catch (error) {
        setHasItemWishList(false);
        console.error(error);
      }
    })();
  }, [gameId]);

  const addWishList = async () => {
    const response = await wishListCtrl.add(user.id, gameId);
    setHasItemWishList(response);
  };

  const deleteWishList = async () => {
    try {
      await wishListCtrl.delete(hasItemWishList.id);
      setHasItemWishList(false);

      if (removeCallback) removeCallback();
    } catch (error) {
      console.error(error);
    }
  };

  if (hasItemWishList === null) return null;

  return (
    <Icon
      name={hasItemWishList ? "heart" : "heart outline"}
      onClick={hasItemWishList ? deleteWishList : addWishList}
      className={classNames(styles.wishListIcon, { [className]: className })}
    />
  );
}
