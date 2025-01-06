import ReactPlayer from "react-player";
import styles from "./Video.module.scss";

export function Video(props) {
  const { url } = props;

  return (
    <ReactPlayer url={url} className={styles.video} width="100%" height={634} />
  );
}
