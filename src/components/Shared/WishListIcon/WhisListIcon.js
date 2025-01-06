import { Icon } from "semantic-ui-react";
import classNames from "classnames";
import styles from "./wishListIcon.module.scss";

export function WishListIcon(props) {
  const { gameId, className } = props;
  return (
    <Icon
      name="heart"
      className={classNames(styles.wishListIcon, { [className]: className })}
    />
  );
}
