import Link from "next/link";
import { Icon } from "semantic-ui-react";
import Image from "next/image";
import styles from "./join.module.scss";

export function Joinlayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Link href="/">
        <Image src="/img/logo.png" alt="Gaming" height={30} width={180} priority/>
        </Link>
        <Link href="/">
          <Icon name="close"/>
        </Link>
      </div>
      <div className={styles.blockLeft}>{children}</div>
      <div className={styles.blockRight}/>
    </div>
  );
}
