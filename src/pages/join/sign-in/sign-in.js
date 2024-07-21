import Link from "next/link";
import { Joinlayout } from "@/layouts/JoinLayout/join-layout";
import styles from "./sign-in.module.scss";

export default function SignInPage() {
  return (
    <>
      <Joinlayout>
        <div>
          <h3>Iniciar Sesion</h3>

          <div className={styles.actions}>
            <Link href="/join/sign-up" >Sign Up</Link>
          </div>
        </div>
      </Joinlayout>
    </>
  );
}
