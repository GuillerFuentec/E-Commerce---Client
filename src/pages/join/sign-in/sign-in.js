import Link from "next/link";
import { Joinlayout } from "@/layouts/JoinLayout/join-layout";
import {LoginForm} from "@/components/Auth"
import styles from "./sign-in.module.scss";
import { Seo } from "@/components/Shared";

export default function SignInPage() {
  return (
    <>
    <Seo title="Gaming | Sing In"/>
      <Joinlayout>
        <div className={styles.signIn}>
          <h3>Iniciar Sesion</h3>
          <LoginForm />
          <div className={styles.actions}>
            <span style={{paddingRight: "6px"}}>Don't have an account yet?</span><Link href="/join/sign-up" >Sign Up</Link>
          </div>
        </div>
      </Joinlayout>
    </>
  );
}
