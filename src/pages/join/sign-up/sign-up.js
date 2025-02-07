import Link from "next/link";
import {RegisterForm} from "@/components/Auth"
import { Joinlayout } from "@/layouts/JoinLayout/join-layout";
import styles from "./sign-up.module.scss";
import { Seo } from "@/components/Shared";


export default function SignUpPage() {
  return (
    <>
    <Seo title="Gaming | Sign Up"/>
      <Joinlayout>
        <div className={styles.signUp}>
          <h3>Crear Cuenta</h3>
          <RegisterForm />

          <div className={styles.actions}>
            <Link href="/join/sign-in" >Back</Link>
          </div>
        </div>
      </Joinlayout>
    </>
  );
}
