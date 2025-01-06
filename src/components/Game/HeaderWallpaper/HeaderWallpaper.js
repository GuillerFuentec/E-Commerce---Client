import styles from "./HeaderWallpaper.module.scss";
import { ENV } from "@/utils";
import { Image } from "semantic-ui-react";

export function HeaderWallpaper(props) {
  const { image } = props;

  return (
    <div className={styles.headerWallpaper}>
      <Image src={`${ENV.SERVER_HOST}${image}`} />
    </div>
  );
}
