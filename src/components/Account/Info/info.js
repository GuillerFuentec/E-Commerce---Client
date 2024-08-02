import { DateTime } from "luxon";
import { BasicLayout } from "@/layouts";
import { Button, Icon } from "semantic-ui-react";
import { useAuth } from "@/hooks";
import styles from "./info.module.scss"

export function Info() {
  const { user } = useAuth();
  return (
      <div className={styles.info}>
        <Button icon className={styles.user}>
          <Icon name="user outline" />
        </Button>
        <h3 className={styles.username}>{user.username}</h3>
        <h4 className={styles.email}>{user.email}</h4>
        <p className={styles.createdAt}>Member since: {DateTime.fromISO(user.createdAt, {locale: "en"}).toFormat("DDD")}</p>
      </div>
  )
}
