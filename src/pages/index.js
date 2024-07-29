import { Inter } from "next/font/google";
import { Button } from "semantic-ui-react";
import { useAuth } from "@/hooks";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <main>
      <div>
        <h1>Games Shop</h1>
      </div>
      {user ? (
        <div>
          <h1>Hola, {user.username}</h1>
          <Button onClick={logout} primary>Logout</Button>
        </div>
      ) : (
        <div><a href="/join/sign-in">Login</a></div>
      )}
    </main>
  );
}
